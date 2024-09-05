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

  const formData = new FormData();
  formData.append('groupId', groupId);
  formData.append('domain', `${domainName}.pnu.app`);
  formData.append('projectName', projectName);
  formData.append('projectIntro', projectIntro);
  formData.append('projectDescription', projectDescription);

  [...existingFiles, ...filesToAdd].forEach((file) => {
    formData.append('projectImages', file);
  });

  try {
    const response = await axios.post('https://pcl.seung.site/api/project/submit-project-overview', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: ACCESS_TOKEN,
      },
    });
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error: ', error);
  }
};

export const useStep2Submit = async (projectName, templates) => {
  try {
    const formData = new FormData();
    formData.append('projectName', projectName);

    templates.forEach((template, index) => {
      formData.append(`templates[${index}].templateTitle`, template.templateTitle);
      formData.append(`templates[${index}].subdomain`, template.subdomain || 'default.pnu.app');

      template.files.forEach((file, fileIndex) => {
        formData.append(`templates[${index}].files[${fileIndex}]`, file);
      });

      Object.entries(template.envVars).forEach(([key, value]) => {
        formData.append(`templates[${index}].envVars[${key}]`, value);
      });
    });

    const response = await axios.post('/api/project/templates', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error submitting project templates:', error);
    throw error;
  }
};

export const handleDeploy = async (selectedTemplate, filesToAdd, keyValuePairs) => {
  const templates = [];

  if (selectedTemplate.FE) {
    templates.push({
      templateTitle: `Frontend - ${selectedTemplate.FE}`,
      subdomain: selectedTemplate.FE.subdomain || 'default.pnu.app',
      files: filesToAdd,
      envVars: keyValuePairs,
    });
  }

  if (selectedTemplate.BE) {
    templates.push({
      templateTitle: `Backend - ${selectedTemplate.BE}`,
      subdomain: selectedTemplate.BE.subdomain || 'default.pnu.app',
      files: filesToAdd,
      envVars: keyValuePairs,
    });
  }

  if (selectedTemplate.DB) {
    templates.push({
      templateTitle: `Database - ${selectedTemplate.DB}`,
      subdomain: selectedTemplate.DB.subdomain || 'default.pnu.app',
      files: filesToAdd,
      envVars: keyValuePairs,
    });
  }

  if (selectedTemplate.ETC) {
    templates.push({
      templateTitle: `Etc - ${selectedTemplate.ETC}`,
      subdomain: selectedTemplate.ETC.subdomain || 'default.pnu.app',
      files: filesToAdd,
      envVars: keyValuePairs,
    });
  }

  try {
    const response = await useStep2Submit('MyProject', templates);
    console.log('Project deployed successfully:', response);
  } catch (error) {
    console.error('Error during deployment:', error);
  }
};
