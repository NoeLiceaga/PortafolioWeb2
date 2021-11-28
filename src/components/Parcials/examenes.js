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
import Icon9 from '../../images/svg-9.svg'
import Icon10 from '../../images/svg-10.svg'
import {
  ParcialsCard,
  ParcialsContainer,
  ParcialsH1,
  ParcialsH2,
  ParcialsIcon,
  ParcialsP,
  ParcialsWrapper,
} from "./ParcialsElements";

const redirectLinks = [
  "http://mantuan-meats.000webhostapp.com/Parcial1/primero.htm",
  "http://mantuan-meats.000webhostapp.com/Parcial1/ejercicio2.htm",
  "http://mantuan-meats.000webhostapp.com/Parcial1/ahorcado.htm",
  "http://mantuan-meats.000webhostapp.com/Parcial1/diagnostico/index.htm",
  "http://mantuan-meats.000webhostapp.com/Parcial1/diagnostico/diagnosticoSol.htm",
  "http://mantuan-meats.000webhostapp.com/Parcial1/ejercicioDom.htm",
  "http://mantuan-meats.000webhostapp.com/Parcial1/RFC/index.htm",
  "http://mantuan-meats.000webhostapp.com/Parcial1/tabla/index.htm",
  "http://mantuan-meats.000webhostapp.com/Parcial1/documentos/cuenta.pdf",
  "http://mantuan-meats.000webhostapp.com/Parcial1/documentos/vacunacion.pdf",
  "http://mantuan-meats.000webhostapp.com/Parcial1/documentos/facturas.pdf",
  "http://mantuan-meats.000webhostapp.com/Parcial1/documentos/futbol.pdf"
]
let lugar
const Examen = () => {

  return (
      <ParcialsContainer id="examenes">
        <ParcialsH1>EXAMENES</ParcialsH1>
        <ParcialsWrapper>
            <ParcialsCard>
                <ParcialsIcon src={Icon1}/>
                <ParcialsH2>PARCIAL 1</ParcialsH2>
                <ParcialsP href="">Link</ParcialsP>
            </ParcialsCard>
            <ParcialsCard>
                <ParcialsIcon src={Icon2}/>
                <ParcialsH2>PARCIAL 2</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/exp2/form.php">Link</ParcialsP>
            </ParcialsCard>
        </ParcialsWrapper>
      </ParcialsContainer>
  );
};

export default  Examen;
