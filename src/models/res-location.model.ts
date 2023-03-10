export interface ResLocation {
  q:   string;
  rid: string;
  rc:  string;
  sr:  Sr[];
}

export interface Sr {
  "@type":         string;
  index:           string;
  gaiaId?:         string;
  type:            string;
  regionNames:     RegionNames;
  essId:           EssID;
  coordinates:     Coordinates;
  hierarchyInfo:   HierarchyInfo;
  isMinorAirport?: string;
  hotelId?:        string;
  cityId?:         string;
  hotelAddress?:   HotelAddress;
}

export interface Coordinates {
  lat:  string;
  long: string;
}

export interface EssID {
  sourceName: string;
  sourceId:   string;
}

export interface HierarchyInfo {
  country: Country;
}

export interface Country {
  name?:     string;
  isoCode2?: string;
  isoCode3:  string;
}

export interface HotelAddress {
  street:   string;
  city:     string;
  province: string;
}

export interface RegionNames {
  fullName:             string;
  shortName:            string;
  displayName:          string;
  primaryDisplayName:   string;
  secondaryDisplayName: string;
  lastSearchName:       string;
}
