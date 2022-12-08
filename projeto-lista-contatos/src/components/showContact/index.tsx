import { useEffect } from "react";
import { getContacts, ResponseGetPost } from "../../service/getContact";
import { MainContainer } from "../ModalLoginCadastro/styled";
import { Textalert,CardContact } from "./styled";

interface ListContactProps {
  list: ResponseGetPost[] | undefined;
  setDataList: Function
}

const ListContact = ({ list,setDataList }: ListContactProps) => {
  const getContactButton = async () => {
    
    const dataList = await getContacts();
    await setDataList(dataList);
  };

  return (
    <MainContainer>
    {list === undefined ?
    (<Textalert onClick={()=> getContactButton()}>Buscar Cadastros</Textalert>)
    :
    (list?.map((dado:ResponseGetPost)=>
    
    {return(
      <CardContact key={dado.id}>
        <div>Email:{dado.email}</div>
        <div>Nome: {dado.name}</div>
        <div>Telefone: {dado.phone}</div>

              </CardContact>
    )}
      
    ))}
    
    </MainContainer>
  );
};

export default ListContact;
