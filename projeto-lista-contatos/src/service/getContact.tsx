import {api} from '../utils/urls'

export interface ResponsePost {
    id: string;
    name: string;
    emial: string;
    phone: string;
    isActive: boolean;
  }

export async function getContacts(): Promise<ResponsePost[]>{
  const token = localStorage.getItem("token");
 
  const { data } = await api.get("contact/user",{
    headers: {
        Authorization: `Bearer ${token}`,
    },
    });

  return data

  
}