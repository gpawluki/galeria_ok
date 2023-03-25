import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import {MdMenu, MdClose} from 'react-icons/md'

const NavDiv = styled.div`

    .line{
            display:block; 
            margin-bottom:4vh;
            font-family: 'EB Garamond', sans-serif;

    }
    .line h2{
            font-family: 'EB Garamond', sans-serif;
            font-weight: normal;
            font-size: 1.5rem;
            text-align:center; 
            border-bottom:1px solid var(--gray-1); 
            position:relative; 
    }
    .line h2 span { 
            background-color: var(--dark-bg); 
            font-family: 'EB Garamond', sans-serif;

            position: relative; 
            top: 10px; 
            padding: 0 10px;
    }
`;

const NavMenuStyles = styled.div`
    /* position:sticky; */
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    display: flex;
    
    p{
        font-family: 'Shrikhand', sans-serif;

        width: 40%;
        font-size: 3.5rem;
        margin-left: 5vw;
        font-weight: normal;
    }
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 70%;
        text-align: center;
        li{
            display: inline-block;
            border-radius: 8px;
            padding: 2rem;
            padding-top: 0rem;
            padding-bottom: 0rem;
            transition: .3s ease background-color;
            &:hover {
                background-color: var(--deep_black);
            }
        }
        a{
            display: inline-block;
            font-family: 'EB Garamond', sans-serif;
            font-size: 2rem;

            padding: 1rem 1rem;
            color: var(--gray-1);
            outline: none;

            /* Add margin-top to move the text down */
            /* margin-top: 20px; */
        }
        .active {
            color: var(--white);
        }
    }

    /* Add the bottom border with border lines */
    .nav-border {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: -20px;
        &:before,
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            border-top: 2px solid #fff;
            top: 50%;
        }
        &:before {
            right: 100%;
            margin-right: 15px;
        }
        &:after {
            left: 100%;
            margin-left: 15px;
        }
    }
    @media only screen and (max-width: 980px){
        display: block;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;

        p{
            font-family: 'Shrikhand', sans-serif;

            width: 100%;
            text-align: center;
            align-items: center;
            justify-content: center;
            position: center;
            margin-left: auto;
            margin-right: auto 
        }
    }
`;

export default function NavMenu(){
    const [showNav, SetShowNav] = useState(false);
    return(
        <NavDiv>

        <NavMenuStyles>
            <p>Antonina Kacperska</p>
            <ul className={!showNav ? 'navItems hide-item': 'navItems'}>
                <li>
                    <NavLink to="/"
                            onClick={() => SetShowNav(!showNav)}
                            role="button"
                            onKeyDown={() => SetShowNav(!showNav)}
                            tabIndex={0}
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >
                    O mnie
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >
                    Kontakt
                    </NavLink>
                </li>
            </ul>
        </NavMenuStyles>
            <span className="line">
                <h2><span>kategorie</span></h2>
            </span>
        </NavDiv>
    )
}
