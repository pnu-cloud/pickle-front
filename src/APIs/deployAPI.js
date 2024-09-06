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

const useStep2Submit = async (projectId, projectName, projectDomain, templates) => {
  const ACCESS_TOKEN = localStorage.getItem('Token');

  const requestBody = {
    projectData: {
      projectId,
      projectName,
      projectDomain,
      templates: templates.map((template) => ({
        templateTitle: template.templateTitle,
        subdomain: template.subdomain,
        templateFile: template.templateFile || '',
        envVars: {
          additionalProp1: template.envVars?.additionalProp1 || '',
          additionalProp2: template.envVars?.additionalProp2 || '',
          additionalProp3: template.envVars?.additionalProp3 || '',
        },
      })),
    },
  };
  console.log('Templates before sending to server:', templates);

  console.log('Request Body:', requestBody); // 서버로 전송되는 데이터 확인

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
  domain,
  projectId,
  projectName,
  projectDomain,
  selectedTemplate,
  filesToAdd,
  keyValuePairs,
  fallbackDomain,
) => {
  console.log('Files to Add:', filesToAdd);
  const templates = Object.keys(selectedTemplate)
    .filter((key) => selectedTemplate[key]) // null 값 필터링
    .map((key) => {
      const file = filesToAdd[key];
      console.log('Template Key:', key); // 각 템플릿 키 확인
      console.log('Selected Template Value:', selectedTemplate[key]); // 각 템플릿 값 확인
      const envVars = keyValuePairs[key] || [];
      return {
        // templateTitle: selectedTemplate[key] || '',
        templateTitle: key,
        subdomain: selectedTemplate[key]?.subdomain ? `${selectedTemplate[key]?.subdomain}.pnu.app` : fallbackDomain,
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
    })
    .filter((template) => template !== null);
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 0);
  });

  console.log('Generated Templates:', templates);
  console.log('Selected Template:', selectedTemplate); // 디버깅 로그
  console.log(domain);
  console.log('Files to Add:', filesToAdd); // 디버깅 로그
  console.log('Key Value Pairs:', keyValuePairs); // 디버깅 로그
  console.log('Generated Templates:', templates); // 디버깅 로그

  try {
    const response = await useStep2Submit(projectId, projectName, projectDomain, templates);
    console.log('Project deployed successfully:', response);
    return response;
  } catch (error) {
    console.error('Error during deployment:', error); // 에러 로그
    throw error;
  }
};
