import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
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



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:95%;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const LeftContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-right: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.p`
  font-size: 1.5rem;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Photo = styled.img`
  max-width: 50vw;
  max-height: 80vh;
`;

function Contact() {
  return (
    <HomeDiv>
        <Container>
        <LeftContainer>
            <Title>Kontakt</Title>
            <ContactInfo>Email: kacperskaantonina@gmail.com</ContactInfo>
            <ContactInfo>Instagram: @chelbiv</ContactInfo>
            <ContactInfo>Instagram: @chelbiv</ContactInfo>
        </LeftContainer>
        <RightContainer>
            <Photo src="https://via.placeholder.com/400x600" alt="Cool photo" />
        </RightContainer>
        </Container>
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

export default Contact;