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
  ParcialsContainer2,
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
const Parcial2 = () => {
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
      <ParcialsContainer2 id="Parcial2"> 
        <ParcialsH1>Parcial 2</ParcialsH1>
        <ParcialsWrapper>
            <ParcialsCard>
                <ParcialsIcon src={Icon1}/>
                <ParcialsH2>Investigacion PHP</ParcialsH2>
                <ParcialsP href= "http://prograweb2upslp.online/noeliceaga/Parcial2/InvestigacionPHP.pdf" target="_blank">Link</ParcialsP>
            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon2}/>
                <ParcialsH2>Hola Mundo</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/holamundo.php">Link</ParcialsP>

            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon3}/>
                <ParcialsH2>Variables</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/variable.php">Link</ParcialsP>
            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon4}/>
                <ParcialsH2>Concatenacion</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/concatenacion.php">Link</ParcialsP>
            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon5}/>
                <ParcialsH2>Saltos de linea</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/saltoslinea.php">Link</ParcialsP>
            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon6}/>
                <ParcialsH2>Arreglos</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/arreglo.php">Link</ParcialsP>
            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon7}/>
                <ParcialsH2>Mes actual</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/arreglo2.php">Link</ParcialsP>
            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon8}/>
                <ParcialsH2>Obtener IVA</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/iva.php">Link</ParcialsP>
            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon9}/>
                <ParcialsH2>Redondeo</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/round.php">Link</ParcialsP>
            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon10}/>
                <ParcialsH2>Date</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/date.php">Link</ParcialsP>
            </ParcialsCard>
            
            <ParcialsCard>
                <ParcialsIcon src={Icon1}/>
                <ParcialsH2>Asociativas</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/arrayAsoc.php">Link</ParcialsP>
            </ParcialsCard>
            
            <ParcialsCard>
                <ParcialsIcon src={Icon2}/>
                <ParcialsH2>Saludo v1</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/formulario.php">Link</ParcialsP>
            </ParcialsCard>
            
            <ParcialsCard>
                <ParcialsIcon src={Icon3}/>
                <ParcialsH2>Saludo v2</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/formulario2.php">Link</ParcialsP>
            </ParcialsCard>
            
            <ParcialsCard>
                <ParcialsIcon src={Icon4}/>
                <ParcialsH2>Anagramas</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/formularioAnagrama.php">Link</ParcialsP>
            </ParcialsCard>
            
            <ParcialsCard>
                <ParcialsIcon src={Icon5}/>
                <ParcialsH2>Isset</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/saludo3.html">Link</ParcialsP>
            </ParcialsCard>

            <ParcialsCard>
                <ParcialsIcon src={Icon6}/>
                <ParcialsH2>Datos del Alumno</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/DATOS/EJ_FORMULARIO.htm">Link</ParcialsP>
            </ParcialsCard>
            
            <ParcialsCard>
                <ParcialsIcon src={Icon7}/>
                <ParcialsH2>Cancion</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/cancion.php">Link</ParcialsP>
            </ParcialsCard>
            
            <ParcialsCard>
                <ParcialsIcon src={Icon8}/>
                <ParcialsH2>Grafica</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/encuesta/encuesta.htm">Link</ParcialsP>
            </ParcialsCard>
            
            <ParcialsCard>
                <ParcialsIcon src={Icon9}/>
                <ParcialsH2>Mensaje</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/mensaje.php">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon10}/>
                <ParcialsH2>Promedio</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/promedio.php">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon1}/>
                <ParcialsH2>E-mail</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/correo/correo.htm">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon2}/>
                <ParcialsH2>Calificaciones</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/phpcalif/calif.php">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon3}/>
                <ParcialsH2>Altas</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/bd_php/" target="_blank">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon4}/>
                <ParcialsH2>Bajas</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/bd_php/" target="_blank">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon5}/>
                <ParcialsH2>Consultas</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/bd_php/" target="_blank">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon6}/>
                <ParcialsH2>Modificaciones</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/bd_php/" target="_blank">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon7}/>
                <ParcialsH2>Detalle Factura</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/bd_php/" target="_blank">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon8}/>
                <ParcialsH2>Mi primer Pdf</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/bd_php/primerpdf.php" target="_blank">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon9}/>
                <ParcialsH2>Modificacion</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/bd_php/primerpdf_pie.php" target="_blank">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon10}/>
                <ParcialsH2>Lista Clientes</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/bd_php/pdf_bd.php" target="_blank">Link</ParcialsP>
            </ParcialsCard>
                        
            <ParcialsCard>
                <ParcialsIcon src={Icon1}/>
                <ParcialsH2>Detalle PDF</ParcialsH2>
                <ParcialsP href="https://prograweb2upslp.online/noeliceaga/Parcial2/bd_php/ejercicioReporte.php" target="_blank">Link</ParcialsP>
            </ParcialsCard>
        </ParcialsWrapper>
      </ParcialsContainer2>
  );
};

export default  Parcial2;
