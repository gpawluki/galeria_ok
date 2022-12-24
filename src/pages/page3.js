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

const slides = photos3.map(({ src, width, height, title, description, images }) => ({
    src,
    width,
    height,
    title: title,
    description: description,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));

const Page3 = () => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <div>
                <h3>Design</h3>
            </div>
            <div>
                <PhotoAlbum photos={photos3} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

                <Lightbox
                    slides={slides}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
                />
            </div>
        </>
    );
};

export default Page3;
