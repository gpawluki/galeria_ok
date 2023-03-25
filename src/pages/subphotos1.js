const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

import ludekst from "../assets/images/portfolio/malarstwo/IMG_4604.JPG"
import ludek from "../assets/images/portfolio/malarstwo/IMG_4605.JPG"
import gluty from "../assets/images/portfolio/malarstwo/IMG_4606.JPG"
import portret from "../assets/images/portfolio/malarstwo/IMG_4607.JPG"
import buzie from "../assets/images/portfolio/malarstwo/IMG_4608.JPG"
import dziady from "../assets/images/portfolio/malarstwo/IMG_4610.JPG"
import baba from "../assets/images/portfolio/malarstwo/IMG_4612.JPG"
import babska from "../assets/images/portfolio/malarstwo/IMG_4613.JPG"





const unsplashLink = (id) =>
    `${id}`;

const subPhotos = [
    // {id: face, width: 300,  height: 300, title: "", description: "", main_id: 0},
    {id: babska, width: 300,  height: 300, title: "", description: "", main_id: 1},
    // {id: toalet, width: 300,  height: 300, title: "", description: "", main_id: 2},
    // {id: diabel, width: 300,  height: 300, title: "", description: "", main_id: 3},
    // {id: kon, width: 300,  height: 300, title: "", description: "", main_id: 4},
    {id: baba, width: 300,  height: 300, title: "", description: "", main_id: 5},
    {id: dziady, width: 300,  height: 300, title: "", description: "", main_id: 6},
    {id: ludek, width: 300,  height: 300, title: "", description: "", main_id: 7},
    {id: ludekst, width: 300,  height: 300, title: "", description: "", main_id: 8},
    {id: gluty, width: 300,  height: 300, title: "", description: "", main_id: 9},
    {id: buzie, width: 300,  height: 300, title: "", description: "", main_id: 10},
    // {id: malpa, width: 300,  height: 300, title: "", description: "", main_id: 11},
    // {id: papieros, width: 300,  height: 300, title: "", description: "", main_id: 12},
    // {id: placz, width: 300,  height: 300, title: "", description: "", main_id: 13},
];

const getMeta = (url, cb) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (err) => cb(err);
    img.src = url;
  };

const sub_photos3 = subPhotos.map((photo) => {
    // Use like:
     getMeta(unsplashLink(photo.id), (err, img) => {
      photo.height = img.naturalHeight
    });
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;
  
  return {
      src: unsplashLink(photo.id),
      width,
      height,
      title: photo.title,
      description: photo.description,
      main_id: photo.main_id,
      images: breakpoints.map((breakpoint) => {
          const height = Math.round((photo.height / photo.width) * breakpoint);
          return {
              src: unsplashLink(photo.id),
              width: breakpoint,
              height,
          };
      }),
  };
});

export default sub_photos3;
