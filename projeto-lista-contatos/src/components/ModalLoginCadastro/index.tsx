import { useState } from "react"
import { HeaderContainer, MainContainer, ButtonCamps, ButtonForms } from "./styled"
import FormCadastro from "../FormCadastro"
import FormLogin from "../FormLogin"

const ModalLoginCadastro=() =>{
    const [form, setForm]= useState<boolean>(true)
    
    return (
       
    <MainContainer>
        <HeaderContainer>AGENDA DE CLIENTES</HeaderContainer>
        
        <ButtonCamps>
            
            <ButtonForms>Login</ButtonForms>
            
            <ButtonForms>Cadastro</ButtonForms>

        </ButtonCamps>

        {form === true ? (<FormLogin/>) : (<FormCadastro/>)}
    </MainContainer>

    )
}

export default ModalLoginCadastro