import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { SocialIcon } from 'react-social-icons';

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import './page.css';
import photos4 from "./photos4";
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



const PhotosStyles = styled.div`
    margin-top: 3rem;
`;
const slides = photos4.map(({ src, key, width, height, images }) => ({
    src,
    key,
    width,
    height,
    srcSet: images?.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height
    }))
  }));

const Page5 = () => {
    const [index, setIndex] = useState(-1);

    return (
        <HomeDiv>

        <>
            <PhotosStyles>
                <div>
                    <h3>Fotografia </h3>
                </div>
                <PhotoAlbum
        layout="rows"
        photos={photos4}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </PhotosStyles>
    </>
                <span className="line">
                <h2><span>moje social media</span></h2>
            </span>
            <div className="social">
        <SocialIcon bgColor="#e68a00" url="https://instagram.com/chelbiv"/>
        <SocialIcon url="https://instagram.com/chelbiv"/>

        </div>
        </HomeDiv>
    );
};

export default Page5;
