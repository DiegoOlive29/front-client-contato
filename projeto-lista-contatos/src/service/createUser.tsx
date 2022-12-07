import {api} from '../utils/urls'

export interface PostUser{
    name        :string
    phone       :string
    email       :string
    password    :string
    date        :string
}
export interface ResposnePost{
    name        :string
    email       :string
    phone       :string
    password    :string
    date        :string
    id          :string

}

export async function postUser(dataPost:PostUser):Promise<ResposnePost> {

    const {data} = await api.post('users',dataPost)

    console.log(data)

    return data
    
}