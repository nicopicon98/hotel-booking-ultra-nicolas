export interface ReqHotel {
  currency?: string,
  eapid?: number,
  locale?: string,
  siteId?: number,
  resultsSize: number;
  resultsStartingIndex: number;
  destination: Destination;
  checkInDate: CheckInOutDate;
  checkOutDate: CheckInOutDate;
  rooms: RoomType
}

export type Destination = {
  regionId: string;
};

export type CheckInOutDate = {
  day: number;
  month: number;
  year: number;
}

export type RoomType = Array<{
  adults: number;
  children: Array<{
    age: number
  }>
}>

