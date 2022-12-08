import {api} from '../utils/urls'

export interface ResponseGetPost {
    id: string;
    name: string;
    email: string;
    phone: string;
    isActive: boolean;
  }

export async function getContacts(): Promise<ResponseGetPost[]>{
  const token = localStorage.getItem("token");
 
  const { data } = await api.get("contact/user",{
    headers: {
        Authorization: `Bearer ${token}`,
    },
    });

  return data

  
}