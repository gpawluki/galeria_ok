import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import {MdMenu, MdClose} from 'react-icons/md'

const NavMenuStyles = styled.div`
    position:fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 98%;
        text-align: center;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: .3s ease background-color;
            &:hover {
                background-color: var(--deep_black);
            }
        }
        a{
            display: inline-block;
            font-family: 'RobotMono Regular';
            padding: 1rem 1rem;
            font-size: 2 rem;
            color: var(--gray-1);
            outline: none;
        }
        .active {
            color: var(--white);
        }
    }
    .mobile-menu-icon{
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline: none;
        *{
            pointer-events: none;
        }
    }
    .closeNavIcon{
        display: none;
    }
    @media only screen and (max-width: 980px){
        padding: 0;
        .hide-item{
            transform: translateY(calc(-100% - var(--top)));
        }
        .mobile-menu-icon{
            display: block;
        }
        .navItems{
            --top: 1rem;
            transition: 0.3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top); 

            .closeNavIcon{
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 1rem;
            }
        }

    }
`;

export default function NavMenu(){
    const [showNav, SetShowNav] = useState(false);
    return(
        <NavMenuStyles>
            <div className="mobile-menu-icon"
                onClick={() => SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}
                            >
                <MdMenu/> 
            </div>
            <ul className={!showNav ? 'navItems hide-item': 'navItems'}>
                <div className="closeNavIcon" 
                onClick={() => SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}
                >
                    <MdClose/>
                </div>
                <li>
                    <NavLink to="/"
                            onClick={() => SetShowNav(!showNav)}
                            role="button"
                            onKeyDown={() => SetShowNav(!showNav)}
                            tabIndex={0}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/malarstwo"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >
                    Malarstwo
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/rzezba"
                            onClick={() => SetShowNav(!showNav)}
                            role="button"
                            onKeyDown={() => SetShowNav(!showNav)}
                            tabIndex={0}
                    >
                    Rzeźba
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/design"
                            onClick={() => SetShowNav(!showNav)}
                            role="button"
                            onKeyDown={() => SetShowNav(!showNav)}
                            tabIndex={0}
                    >
                    Design
                    </NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    )
}