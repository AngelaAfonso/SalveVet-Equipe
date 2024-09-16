import React, { useState } from 'react';
import style from "./Footer.css";
import logo from "../img/logo.svg";
import insta from "../img/insta.svg";
import facebook from "../img/facebook.svg";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="address-section">
                <img src={logo}></img>
                <p>Rua Baker 221B, sala 304 - Centro, Londres - UK,  NW1 6XE<br></br>
                    CNPJ: 12345678000199<br></br>
                    CRMV: 98765<br></br>
                </p>
            </div>
            <div className="articles-section">
                <ul>
                    <li>Guia de Uso da Plataforma</li>
                    <li>Sou Veterinário</li>
                    <li>Política de Privacidade</li>
                    <li>Central de Ajuda</li>
                </ul>
            </div>
            <div className="social-media-section">
                <img src={insta}></img>
                <img src={facebook}></img>
            </div>
        </div>
    );
}

export default Footer;