
import { useState } from "react";
import ceramika from "../assets/images/portfolio/rzezba/ceramika/IMG_8868.jpg"
import design from "../assets/images/portfolio/projekty/siedzisko/Untitled_Artwork2.png"
import glowa from "../assets/images/portfolio/rzezba/IMG_8481.JPG"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components'
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import Home from "./home"

const PhotosStyles = styled.div`
  .carousel-image {
    height: 85vh;
    width: 100%;
    object-fit: fill;
  }
`;

const HomeStyles = styled.div`
    align-content: center;
    justify-content: center;
    display:flex;
`;

const CategoryPhotos = () => {
    return (
        <PhotosStyles>
            <Carousel interval={3000} swipeable={false} animationHandler='fade' transitionTime={2500} infiniteLoop={true} showArrows={false} autoPlay={true} showIndicators={false} showStatus={false} showThumbs={false}>
                    <img className="carousel-image" src={glowa} alt="ddd"/>
                    <img className="carousel-image" src={ceramika} alt="ddd"/>
                    <img className="carousel-image" src={design} alt="ddd"/>
            </Carousel>
            <HomeStyles>
                <Home/>
            </HomeStyles>
        </PhotosStyles>
    );
};

export default CategoryPhotos;