import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
const ACCESS_TOKEN = localStorage.getItem('Token');

export const useGroupQuery = (groupId) => {
  const ACCESS_TOKEN = localStorage.getItem('Token');
  return useQuery(
    ['group', groupId],
    async () => {
      const { data } = await axios.get('https://pcl.seung.site/api/group', {
        params: { groupId },
        headers: {
          'Content-Type': 'application/json',
          Authorization: ACCESS_TOKEN,
        },
      });
      return data.data;
    },
    {
      enabled: !!groupId,
    },
  );
};

export const useDomainCheck = () => {
  const ACCESS_TOKEN = localStorage.getItem('Token');
  return useMutation(async (domainName) => {
    if (!ACCESS_TOKEN) {
      throw new Error('No ACCESS_TOKEN found. Please log in again.');
    }
    try {
      const response = await axios.post(
        'https://pcl.seung.site/api/project/check-valid-domain',
        { domain: `${domainName}.pnu.app` },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: ACCESS_TOKEN,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error checking domain:', error);
      throw error;
    }
  });
};

export const useStep1Submit = async (
  groupId,
  domainName,
  projectName,
  projectIntro,
  projectDescription,
  existingFiles,
  filesToAdd,
) => {
  const ACCESS_TOKEN = localStorage.getItem('Token');

  // const postData = {
  //   groupId,
  //   domain: `${domainName}.pnu.app`,
  //   projectName,
  //   projectIntro,
  //   projectDescription,
  // };

  // const formData = new FormData();
  // formData.append('submitProjectOverviewReqDto', new Blob([JSON.stringify(postData)], { type: 'application/json' }));
  // existingFiles.forEach((file) => {
  //   formData.append('projectImages', file, file.name);
  // });
  // filesToAdd.forEach((file) => {
  //   formData.append('projectImages', file, file.name);
  // });

  const postData = {
    submitProjectOverviewReqDto: {
      groupId,
      domain: `${domainName}.pnu.app`,
      projectName,
      projectIntro,
      projectDescription,
    },
    projectImages: [], // 만약 파일이 없다면 빈 배열로 보냄
  };

  // 파일을 포함하는 경우
  if (existingFiles.length > 0 || filesToAdd.length > 0) {
    existingFiles.forEach((file) => {
      postData.projectImages.push(file.name);
    });
    filesToAdd.forEach((file) => {
      postData.projectImages.push(file.name);
    });
  }

  // try {
  //   const response = await axios.post('https://pcl.seung.site/api/project/submit-project-overview', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       Authorization: ACCESS_TOKEN,
  //     },
  //   });
  //   const { domain, projectId } = response.data.data;
  //   return { success: true, domain, projectId, responseData: response.data };
  // } catch (error) {
  //   console.error('Error: ', error);
  //   throw error;
  // }
  try {
    const response = await axios.post('https://pcl.seung.site/api/project/submit-project-overview', postData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: ACCESS_TOKEN,
      },
    });

    const { domain, projectId } = response.data.data;
    return { success: true, domain, projectId, responseData: response.data };
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

export const useStep2Submit = async (projectId, projectName, projectDomain, templates) => {
  try {
    const projectData = {
      projectId,
      projectName,
      projectDomain,
      templates: templates.map((template) => ({
        templateTitle: template.templateTitle,
        subdomain: template.subdomain || 'default.pnu.app',
        envVars: template.envVars || {},
      })),
    };

    const response = await axios.post(
      '/api/project/templates',
      { projectData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error submitting project templates:', error);
    throw error;
  }
};

export const handleDeploy = async (selectedTemplate, keyValuePairs) => {
  const templates = [];

  if (selectedTemplate.FE) {
    templates.push({
      templateTitle: `Frontend - ${selectedTemplate.FE}`,
      subdomain: selectedTemplate.FE.subdomain || 'default.pnu.app',
      envVars: keyValuePairs.FE,
    });
  }

  if (selectedTemplate.BE) {
    templates.push({
      templateTitle: `Backend - ${selectedTemplate.BE}`,
      subdomain: selectedTemplate.BE.subdomain || 'default.pnu.app',
      envVars: keyValuePairs.BE,
    });
  }

  if (selectedTemplate.DB) {
    templates.push({
      templateTitle: `Database - ${selectedTemplate.DB}`,
      subdomain: selectedTemplate.DB.subdomain || 'default.pnu.app',
      envVars: keyValuePairs.DB,
    });
  }

  if (selectedTemplate.ETC) {
    templates.push({
      templateTitle: `Etc - ${selectedTemplate.ETC}`,
      subdomain: selectedTemplate.ETC.subdomain || 'default.pnu.app',
      envVars: keyValuePairs.ETC,
    });
  }

  try {
    const response = await useStep2Submit('MyProject', templates);
    console.log('Project deployed successfully:', response);
  } catch (error) {
    console.error('Error during deployment:', error);
  }
};
