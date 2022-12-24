import React from 'react';
// import { useNav } from '../customHooks/useNav';
import './page.css';
import PText from "../component/ptext"
import Button from "../component/Button"
import ButtonIg from "../component/ButtonIg"

import styled from 'styled-components'

const HeroStyles = styled.div`
    .nisio{
        height: 80vh;
        min-height: 800px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .nisio__heading{
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        span{
            display: inline-block;
            width: 100%;
        }
        .nisio__name{
            font-size: 7rem;
            font-family: "Montserrat Semibold";
            color: var(--gray-1);
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

        }
    }
    .nisio__img {
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--white)
    }
    .nisio__info{
        margin-top: -18rem;
    }
    @media only screen and (max-width: 980px){
        .nisio__heading{
            font-size: 2rem;
            margin-bottom: -6.5rem;
            position: relative;
            .nisio__name{
                font-size: 5rem;
                font-family: "Montserrat Semibold";
                color: var(--white);
                
            }
        }
        
    }
`;

const Home = () => {
	return (
    <HeroStyles>
        <div className="nisio">
            <div className="container">
                <h1 className="nisio__heading">
                    <span>Nisio</span>
                    <span className="nisio__name">Antonina Kacperska</span>
                </h1>
                <div className="nisio__img">
                    <img src='https://drive.google.com/uc?export=view&id=1KLOBgZGPeNrs4juar6rfm0Oh5IqA4OZU'
                        alt='ddd'
                    />
                </div>
                <div className="nisio__info">
                    <PText>Nisio robi design Nisio robi design Nii</PText>
                    <Button btnLink="/malarstwo" btnText="Moje prace"
                            outline={false} text={true}/>
                </div>
            </div>
            
        </div>
        <ButtonIg btnLink="https://www.instagram.com/chelbiv" outline={true}/>
    </HeroStyles>
	);
};

export default Home;
