import styled from "styled-components";

export const MainContainer = styled.main`
  background-color      : #202020;
  height                : 500px;
  width                 : 350px;
  border                : var(--detailcolor) 4px solid;
  border-radius         : 20px;
  box-shadow            : 0px 0px 15px 12px var(--detailcolor);
  display               : flex;
  flex-direction        : column;
  align-items           : center;
  justify-content       : flex-start;
  padding               : 30px 10px;

  
`;

export const HeaderContainer = styled.div`
    height              : 50px;
    width               : 90%;
    color               : var(--textTop);
    font-family         : 'Didot';
    font-size           : 20px;
    border-radius       : 5px;

`

export const ButtonCamps = styled.div`
  height                : 50px;
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
  background-color      : var(--blueop);
  border                : none;
  border-radius         : 5px;
  font-size             : 16px;
  :hover{
    background-color    : var(--hoverbutton);
    transition          : .3s;
    color               : white;
  }
`