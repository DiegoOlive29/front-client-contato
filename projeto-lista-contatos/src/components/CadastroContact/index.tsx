import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ButtonFormsEnvio, Error, FormCadastroCamp } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUser, postContact } from "../../service/createContact";
import { getContacts } from "../../service/getContact";

interface CadastroContactFormProps {
  setcontact: Function;
  setDataList: Function;
}

const FormContact = ({ setcontact, setDataList }: CadastroContactFormProps) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUser>({ resolver: yupResolver(formSchema) });

  const handleSubmitPost = async (data: ContactUser) => {
    postContact(data);
    const dataList = await getContacts();
    
    setDataList(dataList);
  };

  return (
    <FormCadastroCamp onSubmit={handleSubmit(handleSubmitPost)}>
      <h2>Cadastre seu contato</h2>

      <label htmlFor="">Insira o nome do contato:</label>
      <input type="text" {...register("name")} />
      <Error>{errors.name?.message}</Error>

      <label htmlFor="">Insira o email do contato:</label>
      <input type="text" {...register("email")} />
      <Error>{errors.email?.message}</Error>

      <label htmlFor="">Insira o telefone do contato:</label>
      <input type="text" {...register("phone")} />
      <Error>{errors.phone?.message}</Error>

      <ButtonFormsEnvio>Cadastro</ButtonFormsEnvio>
    </FormCadastroCamp>
  );
};

export default FormContact;
