const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
import dziady from "../assets/images/portfolio/malarstwo/IMG_8456.JPG"
import diabel from "../assets/images/portfolio/malarstwo/IMG_9983.jpeg"
import ludek from "../assets/images/portfolio/malarstwo/IMG_8480.JPG"
import ludekst from "../assets/images/portfolio/malarstwo/IMG_8475.JPG"
import gluty from "../assets/images/portfolio/malarstwo/IMG_8471.JPG"
import buzie from "../assets/images/portfolio/malarstwo/IMG_8463.JPG"
import toalet from "../assets/images/portfolio/malarstwo/IMG_8458.JPG"
import baba from "../assets/images/portfolio/malarstwo/IMG_8453.JPG"
import babska from "../assets/images/portfolio/malarstwo/IMG_8451.JPG"
import malpa from "../assets/images/portfolio/malarstwo/IMG_6136.png"
import placz from "../assets/images/portfolio/malarstwo/IMG_6135.jpg"
import face from "../assets/images/portfolio/malarstwo/IMG_0162.jpg"
import papieros from "../assets/images/portfolio/malarstwo/IMG_0003.JPG"
import kon from "../assets/images/portfolio/malarstwo/IMG_9890.jpg"


const unsplashLink = (id) =>
    `${id}`;


const unsplashPhotos = [
    {id: face, width: 300,  height: 300, title: "", description: ""},
    {id: babska, width: 300,  height: 300, title: "", description: ""},
    {id: toalet, width: 300,  height: 300, title: "", description: ""},
    {id: diabel, width: 300,  height: 300, title: "", description: ""},
    {id: kon, width: 300,  height: 300, title: "", description: ""},
    {id: baba, width: 300,  height: 300, title: "", description: ""},
    {id: dziady, width: 300,  height: 300, title: "", description: ""},
    {id: ludek, width: 300,  height: 300, title: "", description: ""},
    {id: ludekst, width: 300,  height: 300, title: "", description: ""},
    {id: gluty, width: 300,  height: 300, title: "", description: ""},
    {id: buzie, width: 300,  height: 300, title: "", description: ""},
    {id: malpa, width: 300,  height: 300, title: "", description: ""},
    {id: papieros, width: 300,  height: 300, title: "", description: ""},
    {id: placz, width: 300,  height: 300, title: "", description: ""},

    // {id: "1X2D9R-pY2alNhER2JRQOJsfi_8Is5VfF", width: 965, height: 1037, title: "dddada", description: "Gips  ", main_id: 0}, //des
    // des
];

const getMeta = (url, cb) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (err) => cb(err);
    img.src = url;
  };
  
const photos3 = unsplashPhotos.map((photo) => {
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

export default photos3;
