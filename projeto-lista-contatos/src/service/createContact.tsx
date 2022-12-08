import { api } from "../utils/urls";

export interface ContactUser {
  name: string;
  phone: string;
  email: string;
}
export interface ResponsePost {
  id: string;
  name: string;
  emial: string;
  phone: string;
  isActive: boolean;
}

export async function postContact(dataPost: ContactUser) {
  const token = localStorage.getItem("token");
    if (token) {
        await api.post("contact", dataPost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });

  }
}

