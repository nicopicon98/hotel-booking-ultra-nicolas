import { Property } from "../models";

export const createHotelAdapter = (hotel: Property) => ({
  image: hotel.propertyImage?.image.url,
  hotelName: hotel.name,
  location: hotel.neighborhood?.name,
  feedback: hotel.reviews,
  partialPrice: hotel.price?.lead?.formatted,
  totalPrice: hotel.price?.strikeOut?.formatted
})