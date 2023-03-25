const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
import glowa from "../assets/images/portfolio/rzezba/IMG_8481.JPG"
import clown from "../assets/images/portfolio/rzezba/IMG_8496.JPG"
import autoportret from "../assets/images/portfolio/rzezba/autoportet/A65A1079-A94C-4426-A264-6F57CBC2E92F.jpg"
import bizu from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 19.jpg"
import ceramika from "../assets/images/portfolio/rzezba/ceramika/IMG_8868.jpg"
import sztucce from "../assets/images/portfolio/rzezba/sztucce/Untitled_Artwork 8.jpg"
import totem from "../assets/images/portfolio/rzezba/totem/IMG_9794.JPG"
const unsplashLink = (id) =>
    `${id}`;


const unsplashPhotos = [
    {id: glowa, width: 300,  height: 300, title: "Głowa", description: "Modelina"},
    {id: clown, width: 300,  height: 300, title: "Clown", description: "Modelina"},
    {id: bizu, width: 300,  height: 300, title: "Biżuteria", description: ""},

    {id: ceramika, width: 300,  height: 300, title: "Ceramika", description: "Porcelanowe bąble"},
    {id: autoportret, width: 300,  height: 300, title: "Autoportret", description: "Odlew gipsowy z woskiem oraz obraz"},
    {id: totem, width: 300,  height: 300, title: "Totem", description: ""},

    {id: sztucce, width: 300,  height: 300, title: "Zastawa obiadowa", description: "Furia"},


    // {id: "1X2D9R-pY2alNhER2JRQOJsfi_8Is5VfF", width: 965, height: 1037, title: "dddada", description: "Gips  ", main_id: 0}, //des
    // des
];

const getMeta = (url, cb) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (err) => cb(err);
    img.src = url;
  };
  
const photos2 = unsplashPhotos.map((photo) => {
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

export default photos2;
