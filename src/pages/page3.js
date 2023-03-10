import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import './page.css';
import photos3 from "./photos3";
import sub_photos3 from "./subphotos3";
import styled from 'styled-components'


const PhotosStyles = styled.div`
    margin-top: 3rem;
`;

function getSubphotos(photos_map, index){
    const subphotos = [];
    subphotos.push(photos3[index]);

    for(let key of photos_map){
        key['main_id']  == index ? subphotos.push(key) : console.log("duppa"); 
    }
    return subphotos;
}

const Page3 = () => {
    const [index, setIndex] = useState(-1);
    const slides = getSubphotos(sub_photos3, index);

    return (
        <>
            <PhotosStyles>
                <div>
                    <h3>Design </h3>
                </div>
                <PhotoAlbum photos={photos3} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

                <Lightbox
                    slides={slides}
                    open={index >= 0}
                    index={0}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
                />
            </PhotosStyles>
        </>
    );
};

export default Page3;
