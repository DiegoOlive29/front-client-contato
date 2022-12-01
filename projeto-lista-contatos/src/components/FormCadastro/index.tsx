import { ButtonFormsEnvio, FormCadastroCamp } from "./styled"

const FormCadastro=() =>{
    
    return (
       
        <FormCadastroCamp onSubmit={()=>console.log("oi")}>
        <h2>Faça seu login</h2>
        
        <label htmlFor="">Insira seu e-mail:</label>
        <input type="text" />

        <label htmlFor="">Insira seu nome:</label>
        <input type="text" />

        <label htmlFor="">Insira sua senha:</label>
        <input type="text" />

        <label htmlFor="">Insira sua Data de nascimento:</label>
        <input type="text" />

        <ButtonFormsEnvio>Cadastro</ButtonFormsEnvio>


    </FormCadastroCamp>

    )
}

export default FormCadastro