import React from 'react';
// import { useNav } from '../customHooks/useNav';
import './page.css';
import PText from "../component/ptext"
import Button from "../component/Button"
import nisio from "../assets/images/nisio.png"
import ButtonIg from "../component/ButtonIg"
import { SocialIcon } from 'react-social-icons';

import styled from 'styled-components'

const HomeDiv = styled.div`
    .social{
        display: flex;
        position: center;
        align-items: center;
  justify-content: center;
        margin-left: auto;
    margin-right: auto;
        a{
            position: center;
        align-items: center;
         margin: 1rem; 
    /* margin-right: auto; */ */
        }

    }
    .line{
            display:block; 
            margin-bottom:4vh;
            font-family: 'Consolas', sans-serif;

    }
    .line h2{
            font-family: 'Consolas', sans-serif;
            font-weight: normal;
            font-size: 1.5rem;
            text-align:center; 
            border-bottom:1px solid var(--gray-1); 
            position:relative; 
    }
    .line h2 span { 
            background-color: var(--dark-bg); 
            font-family: 'Consolas', sans-serif;

            position: relative; 
            top: 10px; 
            padding: 0 10px;
    }
`;


const Wrapper = styled.div`
  display: flex;
  margin-top: 5rem;


  // NEW WITHOUT PHOTO
  width: 50vw;
  align-items: center;
  justify: center;
    @media only screen and (max-width: 980px){
    display: block;
    
    }
`;

const Photo = styled.div`
  flex: 1;
  margin-top: 10rem;

  margin-right: 2rem;
  margin-left: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  border-radius: 5%;
  @media only screen and (max-width: 980px){
      margin-bottom: 2rem;
  }
`;

const Text = styled.div`
align-items: center;
  flex: 1;
`;

const Title = styled.h1`
align-items: top;
  justify-content: center;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Consolas', sans-serif;
  /* text-align: center; */
`;

const Description = styled.p`
align-items:center;

  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  height: 100%;
`;

function Home() {
    return (
        <HomeDiv>
            <Wrapper>
                {/* <Photo>
                    <Image src={nisio} alt="Profile pic" />
                </Photo> */}
                <Text>
                    <Title>O MNIE</Title>
                    <Description>
                        Jestem multidyscyplinarną artystką zainteresowaną głównie scenografiami. W swoich pracach lubię wykorzystywać różne materiały.
                        Aktualnie studiuje w School of Form na kierunku Wzornictwo, specjalizując się w projektowaniu. W SoF szczególny nacisk kładziony jest na praktykę, naukę różnych technik i stylów.
                    </Description>
                </Text>
            </Wrapper>
            <span className="line">
                <h2><span>moje social media</span></h2>
            </span>
            <div className="social">
        <SocialIcon bgColor="#e68a00" url="https://instagram.com/chelbiv"/>
        <SocialIcon url="https://instagram.com/chelbiv"/>

        </div>
        </HomeDiv>
    );
  }
  
  export default Home;
