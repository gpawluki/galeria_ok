const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
import foto1 from "../assets/images/portfolio/photografiaa/7C0B73B9-2A7E-4615-BBF2-89344E950D99.jpg"
import foto2 from "../assets/images/portfolio/photografiaa/IMG_2067.JPG"
import foto3 from "../assets/images/portfolio/photografiaa/AA833F62-9CB3-4D6F-8661-02C3AFF21BD6.jpg"
import foto4 from "../assets/images/portfolio/photografiaa/IMG_5506.jpg"
import foto5 from "../assets/images/portfolio/photografiaa/IMG_2066.JPG"
import foto6 from "../assets/images/portfolio/photografiaa/IMG_5550.jpg"
import foto7 from "../assets/images/portfolio/photografiaa/IMG_5509.jpeg"
import foto8 from "../assets/images/portfolio/photografiaa/IMG_1889.JPG"
import foto9 from "../assets/images/portfolio/photografiaa/IMG_5560.jpg"
import foto10 from "../assets/images/portfolio/photografiaa/7DE57D28-6DC4-4076-B9D3-0CEF17C99B6B.jpg"
import foto11 from "../assets/images/portfolio/photografiaa/4C527FF8-5C04-4B60-8DF1-DF82951FFBED.jpg"
import foto12 from "../assets/images/portfolio/photografiaa/IMG_5503.jpg"
import foto13 from "../assets/images/portfolio/photografiaa/IMG_1888.JPG"
import foto14 from "../assets/images/portfolio/photografiaa/IMG_5531.jpg"
import foto15 from "../assets/images/portfolio/photografiaa/IMG_5562.jpg"

const unsplashLink = (id) =>
    `${id}`;


const unsplashPhotos = [
    {id: foto1 , width: 300,  height: 400, title: "", description: ""},
    {id: foto2 , width: 300,  height: 400, title: "", description: ""},
    {id: foto3 , width: 300,  height: 400, title: "", description: ""},
    {id: foto4 , width: 300,  height: 400, title: "", description: ""},
    {id: foto5 , width: 300,  height: 400, title: "", description: ""},
    {id: foto6 , width: 300,  height: 400, title: "", description: ""},
    {id: foto7 , width: 300,  height: 400, title: "", description: ""},
    {id: foto8 , width: 300,  height: 400, title: "", description: ""},
    {id: foto9 , width: 300,  height: 400, title: "", description: ""},
    {id: foto10, width: 300,  height: 400, title: "", description: ""},
    {id: foto11, width: 300,  height: 400, title: "", description: ""},
    {id: foto12, width: 300,  height: 400, title: "", description: ""},
    {id: foto13, width: 300,  height: 400, title: "", description: ""},
    {id: foto14, width: 300,  height: 400, title: "", description: ""},
    {id: foto15, width: 300,  height: 400, title: "", description: ""},

    // {id: "1X2D9R-pY2alNhER2JRQOJsfi_8Is5VfF", width: 965, height: 1037, title: "dddada", description: "Gips  ", main_id: 0}, //des
    // des
];

const getMeta = (url, cb) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (err) => cb(err);
    img.src = url;
  };
  
const photos4 = unsplashPhotos.map((photo) => {
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

export default photos4;
