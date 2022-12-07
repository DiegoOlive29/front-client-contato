import { useForm } from "react-hook-form";
import * as yup from "yup"
import { ButtonFormsEnvio, FormCadastroCamp } from "./styled";
import {yupResolver}from '@hookform/resolvers/yup'
import { PostUser } from "../../service/createUser";

const FormCadastro = () => {
  const formSchema = yup.object().shape({
    name      :yup.string().required('Campo obrigatório'),
    email     :yup.string().required('Campo obrigatório'),
    password  :yup.string().required('Campo obrigatório'),
    phone     :yup.string().required('Campo obrigatório'),
    date      :yup.string().required('Campo obrigatório')
  })
  const {register,handleSubmit, formState:{ errors}}=useForm<PostUser>({resolver:yupResolver(formSchema)})

  const handleSubmitPost =async (data:PostUser)=>{
    console.log(data)


  }


  return (
    <FormCadastroCamp onSubmit={handleSubmit(handleSubmitPost)}>
      <h2>Faça seu cadastro</h2>

      <label htmlFor="">Insira seu nome:</label>
      <input type="text"  {...register('name')}/>

      <label htmlFor="">Insira seu e-mail:</label>
      <input type="text"  {...register('email')}/>


      <label htmlFor="">Insira sua senha:</label>
      <input type="text"  {...register('password')}/>

      <label htmlFor="">Insira seu telefone:</label>
      <input type="text"  {...register('phone')}/>

      <label htmlFor="">Insira sua Data de nascimento:</label>
      <input type="date"  {...register('date')}/>

      <ButtonFormsEnvio>Cadastro</ButtonFormsEnvio>
    </FormCadastroCamp>
  );
};

export default FormCadastro;
