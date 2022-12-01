import styled from "styled-components";

export const MainContainer = styled.main`
  background: rgb(2,0,36);
  background: linear-gradient(0deg, var(--bodymodal2) 0%, var(--bodymodal1) 50%);
  width                 : 350px;
  border                : var(--detailcolor) 4px solid;
  border-radius         : 20px;
  box-shadow            : 0px 0px 300px 12px var(--textTop);
  display               : flex;
  flex-direction        : column;
  align-items           : center;
  justify-content       : flex-start;
  gap                   : 10px;
  padding-bottom        : 30px;
 
`;

export const HeaderContainer = styled.div`
  background-color      : var(--textTop);
  height                : 60px;
  width                 : 100%;
  color                 : var(--whitetext);
  font-family           : 'Didot';
  font-weight           : bold;
  font-size             : 20px;
  border-radius         : 5px;
  display               : flex;
  align-items           : center;
  justify-content       : center;
  border-radius         : 15px 15px 0px 0px ;
  

  
`

export const ButtonCamps = styled.div`
  height                : 30px;
  width                 : 90%;
  display               : flex;
  flex-direction        : row;
  justify-content       : space-around;
  align-items           : center;
  

`
export const ButtonForms =styled.button`
  height                : 35px;
  width                 : 100px;
  padding               : 5px;
  background-color      : var(--orangeDetail);
  border                : none;
  border-radius         : 15px;
  font-size             : 16px;
  color                 : var(--whitetext);
  
  :hover{
    transition          : .3s;
    background-color    : var(--hoverbutton);

  }
`