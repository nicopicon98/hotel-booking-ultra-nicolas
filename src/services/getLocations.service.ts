import axios, { AxiosRequestConfig } from 'axios';
import { ResLocation } from '../models';
import { BASE_URL } from '../config';

export const getHotelLocations = async (q: string): Promise<ResLocation> => {
  const options: AxiosRequestConfig<any> = {
    method: 'GET',
    url: `${BASE_URL}/locations/v3/search`,
    params: { q, locale: 'en_US', langid: '1033', siteid: '300000001' },
  };
  const resp = await axios.request(options)
  return resp.data
}