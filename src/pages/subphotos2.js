const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
import glowa2 from "../assets/images/portfolio/rzezba/IMG_8482.JPG"
import glowa3 from "../assets/images/portfolio/rzezba/IMG_8484.JPG"
import glowa4 from "../assets/images/portfolio/rzezba/IMG_8487.JPG"

import clown2 from "../assets/images/portfolio/rzezba/ddddd.jpg"

import autoportret2 from "../assets/images/portfolio/rzezba/autoportet/444D4A81-56CD-4AEF-A7E2-D08C45747CE1.jpg"
import autoportret3 from "../assets/images/portfolio/rzezba/autoportet/IMG_8466.JPG"
import autoportret4 from "../assets/images/portfolio/rzezba/autoportet/IMG_1028.jpeg"

import bizu2 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 24.png"
import bizu3 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 18.jpg"
import bizu4 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 16.jpg"
import bizu5 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 16.png"
import bizu6 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 21.png"
import bizu7 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 23.png"
import bizu8 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 17.jpg"
import bizu9 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 20.png"
import bizu10 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 15.jpg"
import bizu11 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 22.png"
import bizu12 from "../assets/images/portfolio/rzezba/bizu/Untitled_Artwork 13.jpg"

import ceramika2 from "../assets/images/portfolio/rzezba/ceramika/Untitled_Artwork 2.jpg"
import ceramika3 from "../assets/images/portfolio/rzezba/ceramika/IMG_8827.jpg"
import ceramika4 from "../assets/images/portfolio/rzezba/ceramika/IMG_8849.jpg"
import ceramika5 from "../assets/images/portfolio/rzezba/ceramika/IMG_8843.jpg"
import ceramika6 from "../assets/images/portfolio/rzezba/ceramika/IMG_8874.jpg"
import ceramika7 from "../assets/images/portfolio/rzezba/ceramika/IMG_8829.jpg"
import ceramika8 from "../assets/images/portfolio/rzezba/ceramika/IMG_8839.jpg"

import sztucce2 from "../assets/images/portfolio/rzezba/sztucce/Untitled_Artwork 9.jpg"
import sztucce3 from "../assets/images/portfolio/rzezba/sztucce/Untitled_Artwork 12.jpg"
import sztucce4 from "../assets/images/portfolio/rzezba/sztucce/Untitled_Artwork 7.jpg"
import sztucce5 from "../assets/images/portfolio/rzezba/sztucce/Untitled_Artwork 10.jpg"
import sztucce6 from "../assets/images/portfolio/rzezba/sztucce/IMG_9844.JPG"
import sztucce7 from "../assets/images/portfolio/rzezba/sztucce/Untitled_Artwork 11.jpg"
import sztucce8 from "../assets/images/portfolio/rzezba/sztucce/IMG_9837.JPG"

import totem2 from "../assets/images/portfolio/rzezba/totem/IMG_9762.JPG"
import totem3 from "../assets/images/portfolio/rzezba/totem/IMG_9768.JPG"
import totem4 from "../assets/images/portfolio/rzezba/totem/IMG_9782.JPG"
import totem5 from "../assets/images/portfolio/rzezba/totem/IMG_9772.JPG"
import totem6 from "../assets/images/portfolio/rzezba/totem/Untitled_Artwork 12.png"
import totem7 from "../assets/images/portfolio/rzezba/totem/IMG_9786.JPG"
import totem8 from "../assets/images/portfolio/rzezba/totem/IMG_9760.JPG"








const unsplashLink = (id) =>
    `${id}`;

const subPhotos = [
    {id: glowa2, width: 300,  height: 300, title: "Głowa", description: "Modelina", main_id: 0},
    {id: glowa3, width: 300,  height: 300, title: "Głowa", description: "Modelina", main_id: 0},
    {id: glowa4, width: 300,  height: 300, title: "Głowa", description: "Modelina", main_id: 0},

    {id: clown2, width: 300,  height: 300, title: "Clown", description: "Modelina", main_id: 1},

    {id: bizu2 , width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu3 , width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu4 , width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu5 , width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu6 , width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu7 , width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu8 , width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu9 , width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu10, width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu11, width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},
    {id: bizu12, width: 300,  height: 300, title: "Biżuteria", description: "", main_id: 2},

    {id: ceramika2, width: 300,  height: 300, title: "Ceramika", description: "Porcelanowe bąble", main_id: 3},
    {id: ceramika3, width: 300,  height: 300, title: "Ceramika", description: "Porcelanowe bąble", main_id: 3},
    {id: ceramika4, width: 300,  height: 300, title: "Ceramika", description: "Porcelanowe bąble", main_id: 3},
    {id: ceramika5, width: 300,  height: 300, title: "Ceramika", description: "Porcelanowe bąble", main_id: 3},
    {id: ceramika6, width: 300,  height: 300, title: "Ceramika", description: "Porcelanowe bąble", main_id: 3},
    {id: ceramika7, width: 300,  height: 300, title: "Ceramika", description: "Porcelanowe bąble", main_id: 3},
    {id: ceramika8, width: 300,  height: 300, title: "Ceramika", description: "Porcelanowe bąble", main_id: 3},

    {id: autoportret2, width: 300,  height: 300, title: "Autoportret", description: "Odlew gipsowy z woskiem oraz obraz", main_id: 4},
    {id: autoportret3, width: 300,  height: 300, title: "Autoportret", description: "Odlew gipsowy z woskiem oraz obraz", main_id: 4},
    {id: autoportret4, width: 300,  height: 300, title: "Autoportret", description: "Odlew gipsowy z woskiem oraz obraz", main_id: 4},

    {id: totem2, width: 300,  height: 300, title: "Totem", description: "", main_id: 5},
    {id: totem3, width: 300,  height: 300, title: "Totem", description: "", main_id: 5},
    {id: totem4, width: 300,  height: 300, title: "Totem", description: "", main_id: 5},
    {id: totem5, width: 300,  height: 300, title: "Totem", description: "", main_id: 5},
    {id: totem6, width: 300,  height: 300, title: "Totem", description: "", main_id: 5},
    {id: totem7, width: 300,  height: 300, title: "Totem", description: "", main_id: 5},
    {id: totem8, width: 300,  height: 300, title: "Totem", description: "", main_id: 5},

    {id: sztucce2, width: 300,  height: 300, title: "Zastawa obiadowa", description: "Furia", main_id: 6},
    {id: sztucce3, width: 300,  height: 300, title: "Zastawa obiadowa", description: "Furia", main_id: 6},
    {id: sztucce4, width: 300,  height: 300, title: "Zastawa obiadowa", description: "Furia", main_id: 6},
    {id: sztucce5, width: 300,  height: 300, title: "Zastawa obiadowa", description: "Furia", main_id: 6},
    {id: sztucce6, width: 300,  height: 300, title: "Zastawa obiadowa", description: "Furia", main_id: 6},
    {id: sztucce7, width: 300,  height: 300, title: "Zastawa obiadowa", description: "Furia", main_id: 6},
    {id: sztucce8, width: 300,  height: 300, title: "Zastawa obiadowa", description: "Furia", main_id: 6},


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
