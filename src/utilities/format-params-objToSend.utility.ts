import { URLGetReqHotel } from "../models"

export const formatParamsToObjToSend = (obj: URLGetReqHotel) => {
  return {
    resultsSize: +obj.resultsSize,
    resultsStartingIndex: +obj.resultsStartingIndex,
    destination: {
      regionId: obj.destination
    },
    checkInDate: {
      day: +obj.checkInDate.slice(8, 10),
      month: +obj.checkInDate.slice(5, 7),
      year: +obj.checkInDate.slice(0, 4)
    },
    checkOutDate: {
      day: +obj.checkOutDate.slice(8, 10),
      month: +obj.checkOutDate.slice(5, 7),
      year: +obj.checkOutDate.slice(0, 4)
    },
    rooms: [{ adults: +obj.adults, children: [] }]
  }
}