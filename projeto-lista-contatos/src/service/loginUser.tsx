import {api} from '../utils/urls'

export interface Postlogin{
   
    email       :string
    password    :string
  
}
export interface ResposneLogin{
    token       :string
   

}

export async function LoginUser(dataPost:Postlogin):Promise<ResposneLogin> {

    const {data} = await api.post('login',dataPost)
    

    console.log(data)

    return data
    
}