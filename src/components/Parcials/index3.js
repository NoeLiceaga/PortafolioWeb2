import React, { Component } from "react";
import { useState, useEffect } from "react";
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/svg-4.svg'
import Icon5 from '../../images/svg-5.svg'
import Icon6 from '../../images/svg-6.svg'
import Icon7 from '../../images/svg-7.svg'
import Icon8 from '../../images/svg-8.svg'
import {
  ParcialsCard,
  ParcialsContainer,
  ParcialsH1,
  ParcialsH2,
  ParcialsIcon,
  ParcialsP,
  ParcialsWrapper,
} from "./ParcialsElements";
let lugar
const Parcial3 = () => {
  const [clicked, setClicked] = useState(false);
  const changeRoute = (a) =>{
    lugar = parseInt(a)
  }

  return (
      <ParcialsContainer id="Parcial2"> 
        <ParcialsH1>Parcial 3</ParcialsH1>
        <ParcialsWrapper>
            <ParcialsCard>
                <ParcialsIcon src={Icon1}/>
                <ParcialsH2>Contador Visitas</ParcialsH2>
                <ParcialsP href= "http://prograweb2upslp.online/noeliceaga/Parcial3/cookies/individual.html" target="_blank">Link</ParcialsP>
            </ParcialsCard>
            <ParcialsCard>
                <ParcialsIcon src={Icon2}/>
                <ParcialsH2>Contador Individual</ParcialsH2>
                <ParcialsP href= "http://prograweb2upslp.online/noeliceaga/Parcial3/cookies/cookie.html" target="_blank">Link</ParcialsP>
            </ParcialsCard>
            <ParcialsCard>
                <ParcialsIcon src={Icon2}/>
                <ParcialsH2>Inicio de Sesion</ParcialsH2>
                <ParcialsP href= "http://prograweb2upslp.online/noeliceaga/Parcial3/cookies/login.html" target="_blank">Link</ParcialsP>
            </ParcialsCard>
            <ParcialsCard>
                <ParcialsIcon src={Icon4}/>
                <ParcialsH2>Iniciar con Sesiones</ParcialsH2>
                <ParcialsP href= "http://prograweb2upslp.online/noeliceaga/Parcial3/sesiones/login.html" target="_blank">Link</ParcialsP>
            </ParcialsCard>
            <ParcialsCard>
                <ParcialsIcon src={Icon3}/>
                <ParcialsH2>ContadorVisitas:Sesion</ParcialsH2>
                <ParcialsP href= "http://prograweb2upslp.online/noeliceaga/Parcial3/sesiones/contador_sesiones.php" target="_blank">Link</ParcialsP>
            </ParcialsCard>
            <ParcialsCard>
                <ParcialsIcon src={Icon4}/>
                <ParcialsH2>Reiniciador de Visitas</ParcialsH2>
                <ParcialsP href= "http://prograweb2upslp.online/noeliceaga/Parcial3/sesiones/reiniciaCont.php" target="_blank">Link</ParcialsP>
            </ParcialsCard>
            <ParcialsCard>
                <ParcialsIcon src={Icon5}/>
                <ParcialsH2>Crea Captcha</ParcialsH2>
                <ParcialsP href= "http://prograweb2upslp.online/noeliceaga/Parcial3/captcha/creaCaptcha.php" target="_blank">Link</ParcialsP>
            </ParcialsCard>
            <ParcialsCard>
                <ParcialsIcon src={Icon7}/>
                <ParcialsH2>Valida Captcha</ParcialsH2>
                <ParcialsP href= "http://prograweb2upslp.online/noeliceaga/Parcial3/captcha/form.php" target="_blank">Link</ParcialsP>
            </ParcialsCard>
            <ParcialsCard>
                <ParcialsIcon src={Icon8}/>
                <ParcialsH2>Exposicion</ParcialsH2>
                <ParcialsP href= "https://view.genial.ly/619c346156355d0dcbd807c7/presentation-data-breach" target="_blank">Link</ParcialsP>
            </ParcialsCard>
        </ParcialsWrapper>
      </ParcialsContainer>
  );
};

export default  Parcial3;
