import { getHotelsInfoByCriteria } from '../services/getHotels.service';
import { getHotelLocations } from '../services/getLocations.service'
import { Property } from '../interfaces/ReqRespHotelInterface';
import { isAtLeastOneMissing } from '../helper/isEmpty';
import useGETurlParams from './useGETurlParams';
import { useState, useEffect, useCallback } from 'react';

interface HotelsRespHkk {
  location: string;
  info: Array<Property>
}

const useGEThotelsByParams = () => {
  const { urlParams } = useGETurlParams();
  const isValueEmpty = isAtLeastOneMissing(urlParams)
  const [hotels, setHotels] = useState<HotelsRespHkk>();
  const [isHotelsLoading, setIsHotelsLoading] = useState(true);

  const fetchInfo = async () => {
    if (!isValueEmpty) {
      const reqObj = {
        resultsSize: +urlParams.resultsSize!,
        resultsStartingIndex: +urlParams.resultsStartingIndex!,
        destination: {
          regionId: urlParams.destination!
        },
        checkInDate: {
          day: +urlParams.checkInDate!.slice(8, 10),
          month: +urlParams.checkInDate!.slice(5, 7),
          year: +urlParams.checkInDate!.slice(0, 4)
        },
        checkOutDate: {
          day: +urlParams.checkOutDate!.slice(8, 10),
          month: +urlParams.checkOutDate!.slice(5, 7),
          year: +urlParams.checkOutDate!.slice(0, 4)
        },
        rooms: [{ adults: +urlParams.adults!, children: [] }]
      }
      const [respLocation, resp] = await Promise.all([getHotelLocations(urlParams.destination!), getHotelsInfoByCriteria(reqObj)])
      console.log(resp)
      setHotels({
        location: respLocation.sr[0].regionNames.lastSearchName,
        info: resp.data.propertySearch.properties
      })
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