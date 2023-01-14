import axios, { AxiosRequestConfig } from 'axios';
import { ReqHotel, ResHotel } from '../models';
import { BASE_URL } from '../config';

export const getHotelsInfoByCriteria = async (obj: ReqHotel): Promise<ResHotel> => {
  const options: AxiosRequestConfig<any> = {
    method: 'POST',
    url: `${BASE_URL}/properties/v2/list`,
    data: obj
  };
  const resp = await axios.request(options)
  return resp.data
}