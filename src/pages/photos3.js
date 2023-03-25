const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
import zabawka from "../assets/images/portfolio/projekty/zabawka/IMG_9850.jpeg"
import siedzisko from "../assets/images/portfolio/projekty/siedzisko/Untitled_Artwork5.jpg"
import scenografia from "../assets/images/portfolio/projekty/scenografia/przestrzen/1.png"
import stand from "../assets/images/portfolio/projekty/scenografia/stand/IMG_9443.JPG"
import wizualizacje from "../assets/images/portfolio/projekty/scenografia/wizualizacje/Zrzut ekranu 2023-02-17 o 11.58.47.png"
import przestrzen from "../assets/images/portfolio/projekty/projekt_przestrzeni/IMG_9959.JPG"
import krzeslo from "../assets/images/portfolio/projekty/projekt_krzeslo/IMG_8761.jpeg"
import druk from "../assets/images/portfolio/projekty/druk_3d/IMG_2145.jpg"

const unsplashLink = (id) =>
    `${id}`;


const unsplashPhotos = [
    {id: siedzisko, width: 300,  height: 300, title: "Siedzisko", description: "PCV"},
    {id: krzeslo, width: 300,  height: 300, title: "Krzesło", description: "Wykonane jedynie z odpowiednio wyciętego drewna, bez kleju"},
    {id: przestrzen, width: 300,  height: 300, title: "Projekt przestrzeni 3x3", description: "Drewno"},
    {id: scenografia, width: 300,  height: 300, title: "Scenografia", description: "Makieta"},
    {id: stand, width: 300,  height: 300, title: "Scenografia", description: "Stand"},
    {id: wizualizacje, width: 300,  height: 300, title: "Scenografia", description: "Wizualizacja"},
    {id: druk, width: 300,  height: 300, title: "Druk 3D", description: ""},
    {id: zabawka, width: 300,  height: 300, title: "Zabawka", description: "Drewno"},

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
