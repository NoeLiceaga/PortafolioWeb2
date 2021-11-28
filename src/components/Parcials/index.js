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
const Parcials = () => {
  const [clicked, setClicked] = useState(false);
  const changeRoute = (a) =>{
    lugar = parseInt(a)
  }

  useEffect(() => {
    if (clicked) {
      window.location.assign(redirectLinks[lugar]);
    }
  });

  return (
      <ParcialsContainer id="Parcial1">
        <ParcialsH1>Parcial 1</ParcialsH1>
        <ParcialsWrapper>
          <ParcialsCard>
            <ParcialsIcon src={Icon1} />
            <ParcialsH2>Primer For</ParcialsH2>
            <ParcialsP href= "http://mantuan-meats.000webhostapp.com/Parcial1/primero.htm"  target="_blank">Link</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon2} />
            <ParcialsH2>Segundo For</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/ejercicio2.htm"  target="_blank" >Link</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon4} />
            <ParcialsH2>Ahorcado</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/ahorcado.htm"  target="_blank">Link</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon5} />
            <ParcialsH2>Diagnostico</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/diagnostico/index.htm" target="_blank">LInk</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon6} />
            <ParcialsH2>Diagnostico Solucion</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/diagnostico/diagnosticoSol.htm"  target="_blank">Link</ParcialsP>
          </ParcialsCard>


          <ParcialsCard>
            <ParcialsIcon src={Icon7} />
            <ParcialsH2>Ejercicio DOM</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/ejercicioDom.htm" target="_blank">Link</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon8} />
            <ParcialsH2>Ejercicio RFC</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/RFC/index.htm" target="_blank">Link</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon9} />
            <ParcialsH2>Memorama</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/tabla/index.htm" target="_blank">Link</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon10} />
            <ParcialsH2>Modelo E-R Cuenta</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/documentos/cuenta.pdf" target="_blank">Link</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon6} />
            <ParcialsH2>Modelo E-R Vacuna</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/documentos/vacunacion.pdf"  target="_blank">Link</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon7} />
            <ParcialsH2>Modelo E-R Factura</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/documentos/facturas.pdf" target="_blank">Link</ParcialsP>
          </ParcialsCard>

          <ParcialsCard>
            <ParcialsIcon src={Icon8} />
            <ParcialsH2>Modelo E-R Futbol</ParcialsH2>
            <ParcialsP href="http://mantuan-meats.000webhostapp.com/Parcial1/documentos/futbol.pdf"  target="_blank">Link</ParcialsP>
          </ParcialsCard>
        </ParcialsWrapper>
      </ParcialsContainer>
  );
};

export default  Parcials;
