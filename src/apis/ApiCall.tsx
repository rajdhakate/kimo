import {HighlightActivities} from '../utils/GlobalType';

interface ApiResponse {
  // Define the structure of your API response
  data: HighlightActivities;
  // Add other properties as needed
}

const apiUrl = 'https://web-dev.dev.kimo.ai';

export const makeApiCall = (
  endPoint: string,
  options?: RequestInit,
): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + endPoint, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        resolve({data});
      })
      .catch(error => {
        reject(error);
      });
  });
};
