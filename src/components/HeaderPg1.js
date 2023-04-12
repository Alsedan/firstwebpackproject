import React from "react";
import styled from "styled-components";
import fundobloco01 from "../assets/fundobloco01.jpg"

const Imagebloco01 = styled.img`
width: 100%;
height: 700px;
position: relative;
margin: none;
background-size: cover;
background-image: url(${fundobloco01});
`
const Headerconst = styled.div `
background-color:rgba(45,102,171,0.9);
display:flex;
position:absolute;
width:100%;
height:60px;
align-items: center;
justify-content: flex-end;
`
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
            <Imagebloco01></Imagebloco01>
            <Headernavbaritens>Produtos</Headernavbaritens>
            <Headernavbaritens>Suporte</Headernavbaritens>
            <Headernavbaritens>Sobre a kaleb</Headernavbaritens>
            <Headerbutton>Contrate agora</Headerbutton>
         </Headerconst>
    );
}