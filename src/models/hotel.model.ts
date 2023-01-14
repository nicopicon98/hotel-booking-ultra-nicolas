import { Reviews } from "./res-hotel.model";

export interface Hotel {
  image?: string;
  hotelName?: string;
  location?: string;
  feedback?: Reviews;
  partialPrice?: string;
  totalPrice?: string;
}