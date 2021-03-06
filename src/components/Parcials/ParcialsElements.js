import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const ParcialsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const ParcialsContainer2 = styled.div`
    height: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #8102A8;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`
export const ParcialsWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    margin-top: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width:1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media screen and (max-width:480px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ParcialsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 200px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width:1000px) {
        max-height: 150px;
    }
`

export const ParcialsIcon = styled.img`
    height: 120px;
    width: 130px;
    margin-bottom: 10px;

    @media screen and (max-width:1000px) {
        height: 90px;
        width: 90px;
    }
`

export const ParcialsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 20px;

    @media screen and (max-width: 400px){
        font-size: 2rem;
    }
`

export const ParcialsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ParcialsP = styled.a`
    color: #8102A8;
    justify-content: center;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`