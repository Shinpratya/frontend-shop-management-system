import Axios from 'axios';

const baseUrl = 'https://fakestoreapi.com'

export const apiClient = Axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    lang: 'th',
  },
});

// apiClient.interceptors.request.use(
//   (config) => {
//     const { access_token } = authStore.getState();

//     if (
//       access_token &&
//       config.headers.Authorization !== null
//     ) {
//       config.headers.Authorization = access_token;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );