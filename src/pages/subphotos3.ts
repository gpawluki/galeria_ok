const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string) =>
    `../assets/images/portfolio/projekty${id}`;

const subPhotos = [
    // {id: "1QB_yPZ6232vvJ1WTum9W6U6Owz8aK9wQ", width: 894,  height: 956, title: "Rzeźba", description: "Gips  ", main_id: 0}, // des
    {id: "/zabawka/IMG_4728.JPG", width: 1048,height: 1097, title: "ppppr", description: "Gips  ", main_id: 0}, //des
    {id: "/zabawka/IMG_4727.JPG", width: 957,  height: 506, title: "dddd", description: "Gips  ", main_id: 0}, //des
];

const getMeta = (url: string, cb) => {
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
