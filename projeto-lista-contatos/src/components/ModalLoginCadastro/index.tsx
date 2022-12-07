import { useState } from "react"
import { HeaderContainer, MainContainer, ButtonCamps, ButtonForms } from "./styled"
import FormCadastro from "../FormCadastro"
import FormLogin from "../FormLogin"

const ModalLoginCadastro=() =>{
    const [form, setForm]= useState<boolean>(false)
    
    return (
       
    <MainContainer>
        <HeaderContainer>AGENDA DE CLIENTES</HeaderContainer>
        
        <ButtonCamps>
            
            <ButtonForms onClick={()=> setForm(true)}>Login</ButtonForms>
            
            <ButtonForms onClick={()=> setForm(false)}>Cadastro</ButtonForms>

        </ButtonCamps>

        {form === true ? (<FormLogin/>) : (<FormCadastro setForm={setForm}/>)}
    </MainContainer>

    )
}

export default ModalLoginCadastro