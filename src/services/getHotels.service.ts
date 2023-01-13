import { HotelSearchReq, HotelSearchResp } from '../interfaces/ReqRespHotelInterface';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../config';

export const getHotelsInfoByCriteria = async (obj: HotelSearchReq): Promise<HotelSearchResp> => {
  const options: AxiosRequestConfig<any> = {
    method: 'POST',
    url: `${BASE_URL}/properties/v2/list`,
    data: obj
  };
  const resp = await axios.request(options)
  return resp.data
}