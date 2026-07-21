// import axios from "axios";
import { ENDPOINTS } from "../api/endpoints";
import api from "../api/api";

export const contact = async (payload) => {
  const response = await api.post(ENDPOINTS.CONTACT, payload);
  return response.data;
};
