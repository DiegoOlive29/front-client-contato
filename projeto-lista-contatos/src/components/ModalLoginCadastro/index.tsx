import { useState } from "react";
import {
  HeaderContainer,
  MainContainer,
  ButtonCamps,
  ButtonForms,
} from "./styled";
import FormCadastro from "../FormCadastro";
import FormLogin from "../FormLogin";
import FormContact from "../CadastroContact";
import ListContact from "../showContact";
import { ResponseGetPost } from "../../service/getContact";

const ModalLoginCadastro = () => {
  const [form, setForm] = useState<boolean>(false);
  const [logado, setlogado] = useState<boolean>(false);
  const [contact, setcontact] = useState<boolean>(false);
  const [list, setDataList] = useState<ResponseGetPost[] | undefined>();

  return (
    <>
      {logado === true ? (
        <MainContainer>
          <HeaderContainer>AGENDA DE CLIENTES</HeaderContainer>

          <ButtonCamps>
            <ButtonForms onClick={() => setcontact(false)}>
              Cadastrar
            </ButtonForms>

            <ButtonForms onClick={() => setcontact(true)}>Listar</ButtonForms>
          </ButtonCamps>
          {contact === true ? (
            <ListContact setDataList={setDataList} list={list} />
          ) : (
            <FormContact setcontact={setcontact} setDataList={setDataList} />
          )}
        </MainContainer>
      ) : (
        <MainContainer>
          <HeaderContainer>AGENDA DE CLIENTES</HeaderContainer>

          <ButtonCamps>
            <ButtonForms onClick={() => setForm(true)}>Login</ButtonForms>

            <ButtonForms onClick={() => setForm(false)}>Cadastro</ButtonForms>
          </ButtonCamps>

          {form === true ? (
            <FormLogin setlogado={setlogado} setForm={setForm} />
          ) : (
            <FormCadastro setForm={setForm} />
          )}
        </MainContainer>
      )}
    </>
  );
};

export default ModalLoginCadastro;
