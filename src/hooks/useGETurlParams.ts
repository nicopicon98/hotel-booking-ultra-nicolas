import { useSearchParams } from 'react-router-dom'

const useGETurlParams = () => {
  const [queryParameters] = useSearchParams()
  const urlParams = {
    resultsSize: queryParameters.get("resultsSize"),
    resultsStartingIndex: queryParameters.get("resultsStartingIndex"),
    destination: queryParameters.get("destination"),
    checkInDate: queryParameters.get("checkInDate"),
    checkOutDate: queryParameters.get("checkOutDate"),
    adults: queryParameters.get("adults")
  }
  return {
    urlParams
  }
}

export default useGETurlParams