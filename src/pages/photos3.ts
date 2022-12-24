const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string) =>
    `https://drive.google.com/uc?export=view&id=${id}`;

const unsplashPhotos = [
    {id: "1QB_yPZ6232vvJ1WTum9W6U6Owz8aK9wQ", width: 894,  height: 956, title: "Rzeźba", description: "Gips  "}, // des
    {id: "1X2D9R-pY2alNhER2JRQOJsfi_8Is5VfF", width: 965, height: 1037, title: "Rzeźba", description: "Gips  "}, //des
    {id: "11Gq3QHGu8CzaAUkXAk1Q11w2WtK8qnNW", width: 1048,height: 1097, title: "Rzeźba", description: "Gips  "}, //des
    {id: "1uJ6UbO9PJ-RBqGekV7ZLJI7PpGia1KSm", width: 957,  height: 506, title: "Rzeźba", description: "Gips  "}, //des
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
        console.log(photo.height)
        // console.log(img.naturalWidth, img.naturalHeight);
      });
      console.log(photo.height)
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;
    // console.log(photo.height)



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
