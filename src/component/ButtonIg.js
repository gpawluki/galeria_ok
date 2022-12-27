import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {GrInstagram} from 'react-icons/gr'

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button{
        font-size: 5em;
        background-color: ${(props) =>
            props.outline ? 'transparent' : 'var(--gray-1)'};
        padding: 0.7em 0.7em;
        display: inline-block;
        color: ${(props) =>
                props.outline ? 'var(--gray-1)' : 'black'};
    }
    @media only screen and (max-width: 980px){
        /* .button{
            font-size: 4em;
        } */
    }
`;

export default function ButtonIg({ btnLink, outline}) {
  return (
    <ButtonStyle outline={outline}>
        <a  className="button" href={btnLink} target="_blank" rel="noreferrer">
            <GrInstagram />
        </a>
    </ButtonStyle>
  )
}
