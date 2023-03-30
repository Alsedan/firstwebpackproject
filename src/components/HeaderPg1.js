import React from "react";
import styled from "styled-components";

const Headerconst = styled.div `
background-color:#2d66ab;
position:relative;
display:flex;
justify-content: space-between;
with:100%;
height:60px;
`;

const Headernavbar = styled.p `
font-size: 14px;
font-family: 'Read';
color:#FFFFFF;
`

export function Headerstyle() {
    return(
         <Headerconst>
            <Headernavbar>Produtos</Headernavbar>
            <Headernavbar>Suporte</Headernavbar>
            <Headernavbar>Sobre a kaleb</Headernavbar>
         </Headerconst>
    );
}