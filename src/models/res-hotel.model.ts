export interface ResHotel {
  data: Data;
}

export interface Data {
  propertySearch: PropertySearch;
}

export interface PropertySearch {
  __typename:             string;
  filterMetadata:         FilterMetadata;
  universalSortAndFilter: UniversalSortAndFilter;
  properties:             Property[];
  propertySearchListings: Property[];
  summary:                Summary;
  searchCriteria:         SearchCriteria;
  shoppingContext:        ShoppingContext;
  map:                    Map;
  clickstream:            Clickstream;
}

export interface Clickstream {
  __typename:          string;
  searchResultsViewed: null;
}

export interface FilterMetadata {
  __typename:    string;
  amenities:     Amenity[];
  neighborhoods: NeighborhoodElement[];
  priceRange:    PriceRange;
}

export interface Amenity {
  __typename: string;
  id:         number;
}

export interface NeighborhoodElement {
  __typename: string;
  name:       string;
  regionId:   string;
}

export interface PriceRange {
  __typename: string;
  max:        number;
  min:        number;
  id?:        string;
}

export interface Map {
  __typename: string;
  subtitle:   null;
}

export interface Property {
  __typename:                      string;
  id?:                             string;
  featuredMessages?:               any[];
  name?:                           string;
  availability?:                   Availability;
  propertyImage?:                  PropertyImage;
  destinationInfo?:                DestinationInfo;
  legalDisclaimer?:                null;
  listingFooter?:                  null;
  mapMarker?:                      MapMarker;
  neighborhood?:                   PropertyNeighborhood | null;
  offerBadge?:                     OfferBadge | null;
  offerSummary?:                   OfferSummary;
  pinnedDetails?:                  null;
  price?:                          PropertyPrice;
  priceAfterLoyaltyPointsApplied?: PriceAfterLoyaltyPointsApplied;
  propertyFees?:                   any[];
  reviews?:                        Reviews;
  sponsoredListing?:               null;
  star?:                           null;
  supportingMessages?:             null;
  regionId?:                       string;
  priceMetadata?:                  PriceMetadata;
  saveTripItem?:                   null;
}


export interface Availability {
  __typename:   string;
  available:    boolean;
  minRoomsLeft: number | null;
}


export interface DestinationInfo {
  __typename:              string;
  distanceFromDestination: DistanceFromDestination;
  distanceFromMessaging:   null;
  regionId:                string;
}


export interface DistanceFromDestination {
  __typename: string;
  unit:       string;
  value:      number;
}



export interface MapMarker {
  __typename: string;
  label:      string;
  latLong:    LatLong;
}


export interface LatLong {
  __typename: string;
  latitude:   number;
  longitude:  number;
}

export interface PropertyNeighborhood {
  __typename: string;
  name:       string;
}


export interface OfferBadge {
  __typename: string;
  primary:    Ary;
  secondary:  Ary;
}



export interface Ary {
  __typename: string;
  text:       string;
  theme_temp: string;
  icon_temp:  IconTemp | null;
  mark:       null;
}

export interface IconTemp {
  __typename:  string;
  id:          string;
  description: string;
  token?:      string;
}


export interface OfferSummary {
  __typename: string;
  messages:   MessageElement[];
  attributes: PricingScheme[];
}

export interface PricingScheme {
  __typename: string;
  type:       string;
}
export interface MessageElement {
  __typename: string;
  message:    string;
  theme:      null | string;
  type:       string;
  mark:       IconTemp | null;
}

export interface PropertyPrice {
  __typename:      string;
  options:         PriceOption[];
  priceMessaging:  null;
  lead:            Lead;
  strikeOut:       Lead | null;
  displayMessages: DisplayMessage[];
  strikeOutType:   string;
  priceMessages:   PriceMessage[];
}

export interface DisplayMessage {
  __typename: string;
  lineItems:  LineItem[];
}

export interface LineItem {
  __typename:          string;
  disclaimer?:         Disclaimer | null;
  price?:              LineItemPrice;
  role?:               string;
  accessibilityLabel?: null;
  mark?:               null;
  state?:              null;
  value?:              string;
  badge?:              null;
}


export interface Disclaimer {
  __typename: string;
  content:    string[];
  title:      null;
}

export interface LineItemPrice {
  __typename:         string;
  formatted:          string;
  accessibilityLabel: string;
}


export interface Lead {
  __typename:    string;
  amount:        number;
  currencyInfo?: CurrencyInfo;
  formatted:     string;
}


export interface CurrencyInfo {
  __typename: string;
  code:       string;
  symbol:     Symbol;
}


export interface PriceOption {
  __typename:            string;
  strikeOut:             Lead | null;
  disclaimer:            PriceMessage | null;
  formattedDisplayPrice: string;
}

export interface PriceMessage {
  __typename: string;
  value:      string;
}


export interface PriceAfterLoyaltyPointsApplied {
  __typename: string;
  options:    any[];
  lead:       null;
}

export interface PriceMetadata {
  __typename:              string;
  discountType?:            string;
  rateDiscount:            RateDiscount;
  totalDiscountPercentage: number;
}


export interface RateDiscount {
  __typename:  string;
  description: null | string;
}


export interface PropertyImage {
  __typename:    string;
  alt:           string;
  fallbackImage: null;
  image:         Image;
  subjectId:     number;
}


export interface Image {
  __typename:  string;
  description: string;
  url:         string;
}


export interface Reviews {
  __typename: string;
  score:      number;
  total:      number;
}

export interface SearchCriteria {
  __typename:        string;
  resolvedDateRange: ResolvedDateRange;
}

export interface ResolvedDateRange {
  __typename:   string;
  checkInDate:  CheckDate;
  checkOutDate: CheckDate;
}

export interface CheckDate {
  __typename: string;
  day:        number;
  month:      number;
  year:       number;
}

export interface ShoppingContext {
  __typename: string;
  multiItem:  null;
}

export interface Summary {
  __typename:            string;
  matchedPropertiesSize: number;
  pricingScheme:         PricingScheme;
  regionCompression:     null;
  loyaltyInfo:           null;
  resultsTitleModel:     ResultsTitleModel;
  resultsSummary:        ResultsSummary[];
}

export interface ResultsSummary {
  __typename:          string;
  accessibilityLabel?: string;
  value?:              string;
  link?:               Link;
}

export interface Link {
  __typename:          string;
  clientSideAnalytics: Analytics;
  uri:                 PriceMessage;
}

export interface Analytics {
  __typename: string;
  linkName:   string;
  referrerId: string;
}

export interface ResultsTitleModel {
  __typename: string;
  header:     string;
}

export interface UniversalSortAndFilter {
  __typename:     string;
  toolbar:        Toolbar;
  revealAction:   Action;
  applyAction:    Action;
  filterSections: FilterSection[];
  sortSections:   SortSection[];
}

export interface Action {
  __typename:    string;
  primary:       string;
  action:        ActionClass;
  accessibility: string;
  badge:         number | null;
  disabled:      boolean;
  icon:          Icon | null;
}

export interface ActionClass {
  __typename:    string;
  actionType:    string;
  accessibility: null | string;
  analytics:     Analytics;
}

export interface Icon {
  __typename:  string;
  id:          string;
  description: string;
  size:        null;
  token:       string;
  theme:       null;
}

export interface FilterSection {
  __typename: string;
  title:      string;
  fields:     FilterSectionField[];
}

export interface FilterSectionField {
  __typename:                 string;
  primary:                    null | string;
  secondary:                  null;
  action?:                    ActionClass;
  id?:                        string;
  label?:                     null;
  placeholder?:               string;
  selected?:                  null;
  typeaheadInfo?:             TypeaheadInfo;
  icon?:                      Icon;
  analytics?:                 Analytics;
  expando?:                   Expando | null;
  multiSelectionOptions?:     MultiSelectionOptionElement[];
  range?:                     Range;
  options?:                   MultiSelectionOptionElement[];
  tileMultiSelectionOptions?: MultiSelectionOptionElement[];
}

export interface Expando {
  __typename:        string;
  threshold:         number;
  collapseLabel:     string;
  expandLabel:       string;
  collapseAnalytics: Analytics;
  expandAnalytics:   Analytics;
}

export interface MultiSelectionOptionElement {
  __typename:        string;
  id:                string;
  primary:           string;
  secondary:         null | string;
  icon:              Icon | null;
  analytics:         Analytics;
  value:             string;
  description:       null | string;
  selected:          boolean;
  disabled:          boolean;
  default:           boolean;
  selectAnalytics:   Analytics;
  deselectAnalytics: Analytics;
}

export interface Range {
  __typename:      string;
  id:              string;
  primary:         string;
  secondary:       null;
  icon:            null;
  analytics:       Analytics;
  selected:        PriceRange;
  characteristics: Characteristics;
}

export interface Characteristics {
  __typename: string;
  min:        number;
  max:        number;
  step:       number;
  labels:     Label[];
}

export interface Label {
  __typename: string;
  label:      string;
  value:      number;
}

export interface TypeaheadInfo {
  __typename:         string;
  client:             string;
  isDestination:      boolean;
  lineOfBusiness:     string;
  maxNumberOfResults: number;
  packageType:        null;
  personalize:        boolean;
  regionType:         number;
  typeaheadFeatures:  string;
}

export interface SortSection {
  __typename: string;
  title:      null;
  fields:     SortSectionField[];
}

export interface SortSectionField {
  __typename:            string;
  primary:               string;
  secondary:             null;
  dropdownFilterOptions: MultiSelectionOptionElement[];
}

export interface Toolbar {
  __typename: string;
  primary:    string;
  actions:    Actions;
}

export interface Actions {
  __typename:  string;
  primary:     Primary;
  secondaries: Secondary[];
}

export interface Primary {
  __typename: string;
  primary:    null;
  action:     ActionClass;
}

export interface Secondary {
  __typename: string;
  primary:    string;
  disabled:   boolean;
  action:     ActionClass;
}
