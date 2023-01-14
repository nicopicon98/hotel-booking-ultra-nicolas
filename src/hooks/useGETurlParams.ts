import { useSearchParams } from 'react-router-dom'
import { URLGetReqHotel } from '../models'

const useGETurlParams = () => {
  const [queryParameters] = useSearchParams()
  const urlParams: URLGetReqHotel = {
    resultsSize: queryParameters.get("resultsSize")!,
    resultsStartingIndex: queryParameters.get("resultsStartingIndex")!,
    destination: queryParameters.get("destination")!,
    checkInDate: queryParameters.get("checkInDate")!,
    checkOutDate: queryParameters.get("checkOutDate")!,
    adults: queryParameters.get("adults")!
  }
  return {
    urlParams
  }
}

export default useGETurlParams