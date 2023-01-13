import axios, { AxiosRequestConfig } from 'axios';
import { CONFIG_REQ } from '../config';

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

};