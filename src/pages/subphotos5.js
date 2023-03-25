const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];


const unsplashLink = (id) =>
    `${id}`;

const subPhotos = [

];

const getMeta = (url, cb) => {
    const img = new Image();
    img.onload = () => cb(null, img);
    img.onerror = (err) => cb(err);
    img.src = url;
  };

const sub_photos5 = subPhotos.map((photo) => {
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

export default sub_photos5;
