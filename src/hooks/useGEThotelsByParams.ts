import { formatParamsToObjToSend } from '../utilities/format-params-objToSend.utility';
import { isAtLeastOneMissing } from '../utilities/atleast-one-missing.utility';
import { getHotelsInfoByCriteria } from '../services/getHotels.service';
import useGETurlParams from './useGETurlParams';
import { useState, useEffect, } from 'react';
import { Property } from '../models';

const useGEThotelsByParams = () => {
  const { urlParams } = useGETurlParams();
  const isValueEmpty = isAtLeastOneMissing(urlParams)
  const [hotels, setHotels] = useState<Array<Property>>();
  const [isHotelsLoading, setIsHotelsLoading] = useState(true);

  const fetchInfo = async () => {
    if (!isValueEmpty) {
      const objGetFormatted = formatParamsToObjToSend(urlParams);
      const resp = await getHotelsInfoByCriteria(objGetFormatted);
      console.log(resp)
      setHotels(resp.data.propertySearch.properties)
    }
    setIsHotelsLoading(false);
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  return {
    isValueEmpty,
    hotels,
    isHotelsLoading
  }
}

export default useGEThotelsByParams