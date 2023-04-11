import React from "react";
import styled from "styled-components";

const Headerconst = styled.div `
background-color:#2d66ab;

display:flex;
width:100%;
height:60px;
align-items: center;
justify-content: flex-end;
`;

const Headernavbaritens = styled.p `
color:#FFFFFF;
margin-right: 45px;
`
const Headerbutton = styled.button`
background: #f58634;
color: #FFFFFF;
align: center;
text-align:center;
height: 35px;
width: 156px;
border: none;
border-radius: 5px;
margin-right: 50px;
`


export function Headerstyle() {
    return(
         <Headerconst>
            <Headernavbaritens>Produtos</Headernavbaritens>
            <Headernavbaritens>Suporte</Headernavbaritens>
            <Headernavbaritens>Sobre a kaleb</Headernavbaritens>
            <Headerbutton>Contrate agora</Headerbutton>
         </Headerconst>
    );
}