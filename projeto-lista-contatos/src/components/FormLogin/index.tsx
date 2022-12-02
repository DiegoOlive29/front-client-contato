import { ButtonFormsEnvio, FormLoginCamp } from "./styled"

const FormLogin=() =>{
    
    return (
       
    <FormLoginCamp onSubmit={()=>console.log("oi")}>
        <h2>Faça seu login</h2>
        
        <label htmlFor="">Insira seu e-mail:</label>
        <input type="text" />

        <label htmlFor="">Insira sua senha:</label>
        <input type="text" />

        <ButtonFormsEnvio>Logar</ButtonFormsEnvio>


    </FormLoginCamp>

    )
}

export default FormLogin