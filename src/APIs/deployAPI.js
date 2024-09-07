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
  filesToAdd,
) => {
  const ACCESS_TOKEN = localStorage.getItem('Token');

  const postData = {
    groupId,
    domain: `${domainName}.pnu.app`,
    projectName,
    projectIntro,
    projectDescription,
  };

  const formData = new FormData();
  formData.append('submitProjectOverviewReqDto', new Blob([JSON.stringify(postData)], { type: 'application/json' }));
  filesToAdd?.forEach((file) => {
    const fileBlob = new Blob([file], { type: file.type });
    formData.append('projectImages', fileBlob, file.name);
  });

  try {
    const response = await axios.post('https://pcl.seung.site/api/project/submit-project-overview', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: ACCESS_TOKEN,
      },
    });

    console.log('API Response:', response); // 응답 구조를 확인
    return response;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};

/*
export const useStep2Submit = async (projectId, projectName, projectDomain, templates) => {
  try {
    const projectData = {
      projectId,
      projectName,
      projectDomain,
      templates: templates.map((template) => ({
        templateTitle: template.templateTitle,
        subdomain: template.subdomain || 'default.pnu.app',
        templateFile: template.templateFile || '', // templateFile 추가
        envVars: {
          additionalProp1: template.envVars.additionalProp1 || '',
          additionalProp2: template.envVars.additionalProp2 || '',
          additionalProp3: template.envVars.additionalProp3 || '',
        },
      })),
    };

    const response = await axios.post(
      'https://pcl.seung.site/api/project/submit-project-detail',
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
}; */

const useStep2Submit = async (requestBody) => {
  const ACCESS_TOKEN = localStorage.getItem('Token');

  try {
    const response = await axios.post('https://pcl.seung.site/api/project/submit-project-detail', requestBody, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: ACCESS_TOKEN, // Authorization에 토큰 추가
      },
    });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const handleDeploy = async (
  projectId,
  projectName,
  projectDomain,
  selectedTemplate,
  subdomain,
  filesToAdd,
  keyValuePairs,
) => {
  const templates = Object.keys(selectedTemplate)
    .filter((key) => selectedTemplate[key]) // null 값 필터링
    .map((key, index) => {
      const file = filesToAdd[key]?.[0] || '';
      const envVars = keyValuePairs[key] || {};
      return {
        // templateTitle: selectedTemplate[key] || '',
        templateTitle: selectedTemplate[key],
        subdomain: subdomain ? `${subdomain}.${projectDomain}` : `${projectDomain}`,
        // templateFile: filesToAdd[key] || '', // 파일이 제대로 추가되었는지 확인
        // templateFile: filesToAdd[key] ? new Blob([filesToAdd[key]], { type: filesToAdd[key].type }) : '',
        // templateFile: selectedTemplate[key] || '',
        templateFile: file ? new Blob([file], { type: file.type }) : '',
        envVars: {
          additionalProp1: envVars[0]?.key || '',
          additionalProp2: envVars[1]?.key || '',
          additionalProp3: envVars[2]?.key || '',
        },
      };
    });

  const requestBody = {
    projectData: {
      projectId: projectId,
      projectName: projectName,
      projectDomain: projectDomain, // 이전 페이지에서 받아온 projectDomain
      templates, // 생성한 templates 배열
    },
  };

  try {
    const response = await useStep2Submit(requestBody);
    console.log('Project deployed successfully:', response);
    return response;
  } catch (error) {
    console.error('Error during deployment:', error); // 에러 로그
    throw error;
  }
};
