import type {
  VehicleBodyType,
  VehicleEngineType,
  VehicleTransmissionType,
} from "@/types/types";

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: VehicleBodyType;
  description: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: VehicleTransmissionType;
  engine: VehicleEngineType;
  amenities: string[];
  coverImage: string;
  totalReviews: number;
  gallery: GalleryImage[];
}

export interface CampersProps {
  campers: Camper[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface PropsParams {
  page?: number;
  perPage?: number;
  location?: string;
  form?: VehicleBodyType;
  transmission?: VehicleTransmissionType;
  engine?: VehicleEngineType;
}

export interface GalleryImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface CamperGalleryProps {
  gallery: GalleryImage[];
}

export interface CamperReview {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface BookingRequest {
  name: string;
  email: string;
}

export interface BookCamperResponse {
  message: string;
}
