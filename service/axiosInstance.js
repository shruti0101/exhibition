import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export async function createContactForm(formData) {
  const { data } = await axiosInstance.post("/api/contact", formData);
  return data;
}

export async function createCareerForm(formData) {
  const { data } = await axiosInstance.post("/api/career", formData);
  return data;
}
