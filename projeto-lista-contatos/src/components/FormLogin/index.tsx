import { ButtonFormsEnvio, Error, FormLoginCamp } from "./styled"
import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver}from '@hookform/resolvers/yup'
import { LoginUser, Postlogin } from "../../service/loginUser";

interface FormLoginProps{
    setForm:Function;
    setlogado:Function;
  }

const FormLogin=({setForm,setlogado}:FormLoginProps) =>{
    
  const formSchema = yup.object().shape({
   
    email     :yup.string().required('Campo obrigatório'),
    password  :yup.string().required('Campo obrigatório')
   
  })
  const {register,handleSubmit, formState:{ errors}}=useForm<Postlogin>({resolver:yupResolver(formSchema)})

  const handleSubmitPost =async (data:Postlogin)=>{
    console.log(data)

    const token = await LoginUser(data)

    localStorage.setItem("token",token.token)

    
    setlogado(true)
    setForm(true)
  }

    return (
       
    <FormLoginCamp onSubmit={(handleSubmit(handleSubmitPost))}>
        <h2>Faça seu login</h2>
        
        <label htmlFor="">Insira seu e-mail:</label>
        <input type="text"  {...register('email')}/>
        <Error>{errors.email?.message}</Error>

        <label htmlFor="">Insira sua senha:</label>
        <input type="password"  {...register('password')}/>
        <Error>{errors.password?.message}</Error>

        <ButtonFormsEnvio>Logar</ButtonFormsEnvio>


    </FormLoginCamp>

    )
}

export default FormLogin