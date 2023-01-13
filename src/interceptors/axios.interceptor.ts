import axios, { AxiosRequestConfig } from 'axios';
import { CONFIG_REQ } from '../config';
import { getValidationError, SnackbarUtilities } from '../utilities';

export const AxiosInterceptor = () => {

  const updateHeader = (request: AxiosRequestConfig) => {
    const newHeaders = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': CONFIG_REQ['X-RapidAPI-Key'],
      'X-RapidAPI-Host': CONFIG_REQ['X-RapidAPI-Host']
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url?.includes('assets')) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      if(!response.data.data) return response
      console.log('response', response);
      SnackbarUtilities.success('Hoteles cargados con exito');
      return response;
    },
    (error) => {
      console.log('error', error);
      SnackbarUtilities.error(getValidationError(error.code));
      return Promise.reject(error);
    }
  );
};