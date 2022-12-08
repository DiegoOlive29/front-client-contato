import styled from "styled-components"

export const Textalert = styled.button`
 
 height                : 35px;
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
export const CardContact = styled.div`
    display             : flex;
    flex-direction      : column;
    width               : 90%;
    border              : 2px solid var(--whitetext);
    border-radius       : 5px;
    align-items         : flex-start;
    justify-content     : center;
    padding             : 5px;
    gap                 : 5px;


`

