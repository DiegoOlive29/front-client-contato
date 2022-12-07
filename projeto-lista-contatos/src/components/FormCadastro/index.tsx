import { useForm } from "react-hook-form";
import * as yup from "yup"
import { ButtonFormsEnvio,Error, FormCadastroCamp } from "./styled";
import {yupResolver}from '@hookform/resolvers/yup'
import { postUser, PostUser } from "../../service/createUser";

interface CadastroFormProps{
  setForm:Function;
}

const FormCadastro = ({setForm}:CadastroFormProps) => {
  const formSchema = yup.object().shape({
    name      :yup.string().required('Campo obrigatório'),
    email     :yup.string().required('Campo obrigatório'),
    password  :yup.string().required('Campo obrigatório'),
    phone     :yup.string().required('Campo obrigatório'),
    date      :yup.string().required('Campo obrigatório')
  })
  const {register,handleSubmit, formState:{ errors}}=useForm<PostUser>({resolver:yupResolver(formSchema)})

  const handleSubmitPost =async (data:PostUser)=>{

    const user = postUser(data)

  
    setForm(true)
  }


  return (
    <FormCadastroCamp onSubmit={handleSubmit(handleSubmitPost)}>
      <h2>Faça seu cadastro</h2>

      <label htmlFor="">Insira seu nome:</label>
      <input type="text"  {...register('name')}/>
      <Error>{errors.name?.message}</Error>


      <label htmlFor="">Insira seu e-mail:</label>
      <input type="text"  {...register('email')}/>
      <Error>{errors.email?.message}</Error>

      <label htmlFor="">Insira sua senha:</label>
      <input type="text"  {...register('password')}/>
      <Error>{errors.password?.message}</Error>

      <label htmlFor="">Insira seu telefone:</label>
      <input type="text"  {...register('phone')}/>
      <Error>{errors.phone?.message}</Error>

      <label htmlFor="">Insira sua Data de nascimento:</label>
      <input type="date"  {...register('date')}/>
      <Error>{errors.date?.message}</Error>

      <ButtonFormsEnvio>Cadastro</ButtonFormsEnvio>
    </FormCadastroCamp>
  );
};

export default FormCadastro;
