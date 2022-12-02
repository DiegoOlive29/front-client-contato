import styled from "styled-components"

export const FormCadastroCamp = styled.form`
        display             : flex;
        flex-direction      : column;
        width               : 100%;
        height              : 50%;
        align-items         : center;
        
        margin-top          : 10px;

    label{
        margin-top          : 10px;
        display             : flex;
        align-items         : flex-start;
        width               : 70%;
        font-size           : 14px;
    }
    input{
        margin-bottom       : 10px;
        display             : flex;
        align-items         : flex-start;
        width               : 70%;
        height              : 30px;
        border-radius       : 5px;
        border              : none;
        margin-top          : 5px;
        :hover{
            border          : solid 2px var(--hoverbutton);
        }
    } 
  
`
export const ButtonFormsEnvio =styled.button`
        height                : 35px;
        width                 : 100px;
        padding               : 5px;
        background-color      : var(--orangeDetail);
        border                : none;
        border-radius         : 15px;
        font-size             : 16px;
        color                 : var(--whitetext);
        margin-top            : 10px;
        :hover{
            transition          : .3s;
            background-color    : var(--hoverbutton);

        }
`