import { api } from "@/lib/axios";
import type {
  BookingRequest,
  Camper,
  CamperReview,
  CampersProps,
  PropsParams,
} from "@/types/api";

export const getCampers = async ({
  page,
  perPage = 4,
  location,
  form,
  transmission,
  engine,
}: PropsParams) => {
  const response = await api.get<CampersProps>("/campers", {
    params: {
      page,
      perPage,
      location,
      form,
      transmission,
      engine,
    },
  });

  return response.data;
};

export const getCamperById = async (camperId: string) => {
  const response = await api.get<Camper>(`/campers/${camperId}`);
  return response.data;
};

export const getCamperReviews = async (camperId: string) => {
  const response = await api.get<CamperReview[]>(
    `/campers/${camperId}/reviews`,
  );
  return response.data;
};

export const postCamper = async (camperId: string, body: BookingRequest) => {
  const response = await api.post(
    `/campers/${camperId}/booking-requests`,
    body,
  );
  return response.data;
};
