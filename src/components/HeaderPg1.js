import React from "react";
import styled from "styled-components";
import fundobloco01 from "../assets/fundobloco01.jpg"

const Bloco01 = styled.div`
width: 100%;
height: 700px;
background-color: black;
`
const Imagebloco01 = styled.div`
width: 100%;
height: 700px;
position:relative;
top:0px;
margin: none;
background-size: cover;
-webkit-mask-image: linear-gradient(to right, transparent 0%, black 65%);
background-image: url(${fundobloco01});
`
const Headerconst = styled.div `
background-color:rgba(45,102,171,0.9);
display:flex;
position:absolute;
top:0px;
z-index:1;
width:100%;
height:50px;
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
margin-right: 35px;
font-size:15px;
font-family:roboto;
`

const Bloco01phrase = styled.p`
color:#FFFFFF;
font-size: 35px;
margin-top:200px;
margin-left:50px;
position:absolute;
z-index:2;
`
const Bloco01phrase2 = styled.a`
color: #FFFFFF;
width: 450px;
word-break:break-all;
font-size: 20px;
margin-top: 250px;
margin-left: 50px;
position:absolute;
z-index:3;
`

export function Headerstyle() {
    return(
        <Bloco01>
             <Bloco01phrase>Tecnologia ao seu alcance</Bloco01phrase>
             <Bloco01phrase2>Cadastre seus produtos, acelere as suas vendas,
                acompanhe os resultados, escale seu negócio.</Bloco01phrase2>
            <Imagebloco01/>
            <Headerconst>
            <Headernavbaritens>Produtos</Headernavbaritens>
            <Headernavbaritens>Suporte</Headernavbaritens>
            <Headernavbaritens>Sobre a kaleb</Headernavbaritens>
            <Headerbutton>Contrate agora</Headerbutton>
         </Headerconst>
         </Bloco01>
    );
}