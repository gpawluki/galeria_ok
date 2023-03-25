const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
import rys1 from "../assets/images/portfolio/rysunek/IMG_6898.jpeg"
import rys2 from "../assets/images/portfolio/rysunek/IMG_7986.jpeg"
import rys3 from "../assets/images/portfolio/rysunek/IMG_7985.jpeg"
import rys4 from "../assets/images/portfolio/rysunek/IMG_7987.jpeg"
import rys5 from "../assets/images/portfolio/rysunek/IMG_7988.jpeg"
import rys6 from "../assets/images/portfolio/rysunek/IMG_6195.png"
import rys7 from "../assets/images/portfolio/rysunek/IMG_6101.jpg"
import rys8 from "../assets/images/portfolio/rysunek/IMG_7998.jpeg"


const unsplashLink = (id) =>
    `${id}`;


const unsplashPhotos = [
    {id: rys1, width: 300,  height: 400, title: "", description: ""},
    {id: rys2, width: 300,  height: 400, title: "", description: ""},
    {id: rys3, width: 300,  height: 400, title: "", description: ""},
    {id: rys4, width: 300,  height: 400, title: "", description: ""},
    {id: rys5, width: 300,  height: 400, title: "", description: ""},
    {id: rys6, width: 300,  height: 400, title: "", description: ""},
    {id: rys7, width: 300,  height: 400, title: "", description: ""},
    {id: rys8, width: 300,  height: 400, title: "", description: ""},

];

const getMeta = (url, cb) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (err) => cb(err);
    img.src = url;
  };
  
const photos5 = unsplashPhotos.map((photo) => {
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

export default photos5;
