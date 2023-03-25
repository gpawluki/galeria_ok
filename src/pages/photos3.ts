const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string) =>
    `../assets/images/portfolio/projekty${id}`;

const unsplashPhotos = [
    {id: "/zabawka/IMG_4728.JPG", width: 894,  height: 956, title: "Zabawka", description: "Drewno"},
    {id: "/zabawka/IMG_4727.JPG", width: 894,  height: 956, title: "Zabawka", description: "Drewno"},

    // {id: "1X2D9R-pY2alNhER2JRQOJsfi_8Is5VfF", width: 965, height: 1037, title: "dddada", description: "Gips  ", main_id: 0}, //des
    // des
];

const getMeta = (url: string, cb) => {
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
