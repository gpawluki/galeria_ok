import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import ceramika from "../assets/images/portfolio/rzezba/ceramika/IMG_8868.jpg"
import malarstwo from "../assets/images/portfolio/malarstwo/IMG_8456.JPG"
import design from "../assets/images/portfolio/projekty/siedzisko/Untitled_Artwork2.png"
import rysunek from "../assets/images/portfolio/rysunek/IMG_6195.png"
import fotografia from "../assets/images/portfolio/photografiaa/IMG_2067.JPG"

import "yet-another-react-lightbox/plugins/thumbnails.css";
import './page.css';
import styled from 'styled-components'

const PhotosStyles = styled.div`
    /* a:hover {
        background-color: yellow;
    } */
    p{
        font-family: "Consolas";
        font-size:1.5rem;
    }
    display: flex;
    flex-direction: row;
    margin-top: 4rem;
    flex-wrap: wrap;
    .container{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 30%;
        margin-bottom: 4rem;
    }
    .break {
        width: 100%;
}
    .imgCont {
    width: 30%;
    float: left;
    padding: 20px;
    margin: 1vw;
    border: 1px solid gray-2;
    border-radius: 25px;
    transition: all 0.4s ease-in-out; /* add a transition effect to all CSS properties */
    }  
    
    .imgCont:hover{
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
                transform: scaleY(1.1);
        transform: scale(1.1);
        transform-origin: center;
    }

    /* .imgCont::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);} */

    .imgCont{
        width: 25vw;
        height: 30vh;
        background-size: 100% 100%;
    }
    #cat1{
        background-image: url(${ceramika});
    }
    #cat2{
        background-image: url(${malarstwo});
    }
    #cat3{
        background-image: url(${design});
    }

    #cat4{
        background-image: url(${rysunek});
    }

    #cat5{
        background-image: url(${fotografia});
    }
    @media only screen and (max-width: 980px){
        display:flex;
        flex-direction: column;
        align-items: center;
  justify-content: center;
        div {
            width: 90%;
            margin-bottom: 5rem;
        }
        .imgCont{
        width: 70vw;
        height: 25vh;
        background-size: 100% 100%;
    }
    }
`;


const CategoryPhotos = () => {

    return (
        <PhotosStyles>  
                <div className="container">   
                    <a href="rzezba">
                        <div id="cat1" className="imgCont">
                        </div>
                    </a>
                    <p>Rzeźba</p>
                </div>
                <div className="container">   
                    <a href="malarstwo">
                        <div id="cat2" className="imgCont">
                        </div>
                    </a>
                    <p>Malarstwo</p>
                </div>
                <div className="container">   
                    <a href="design">
                        <div id="cat3" className="imgCont">
                        </div>
                    </a>
                    <p>Design</p>
                </div>
                <div className="break"></div>
                <div className="container">   
                    <a href="rysunek">
                        <div id="cat4" className="imgCont">
                        </div>
                    </a>
                    <p>Rysunek</p>
                </div>
                <div className="container">   
                    <a href="foto">
                        <div id="cat5" className="imgCont">
                        </div>
                    </a>
                    <p>Fotografia</p>
                </div>
        </PhotosStyles>
    );
};

export default CategoryPhotos;
