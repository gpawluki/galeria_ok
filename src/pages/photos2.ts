const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string) =>
    `https://drive.google.com/uc?export=view&id=${id}`;
    
const unsplashPhotos = [
    {id: "13pwKqagCIAON9DB583qk1rttPyx_GDVz", width: 558, height: 836, title: "Rzeźba", description: "Gips"}, //rze
    {id: "14OPceA5SZgzUWGxbkiQ0VlNk_GAYssZD", width: 742, height: 680, title: "Rzeźba", description: "Gips"}, //rze
    {id: "1xWd_wikDpnyLELcCsRtrz90XSehYLW38", width: 797, height: 642, title: "Rzeźba", description: "Gips"}, //rze
    {id: "1lbUMu_Ylzz7eOGeBww1qdfVcdQd5zjK3", width: 512, height: 404, title: "Rzeźba", description: "Gips"}, //rze
    {id: "1NL5nGh19YPyBNJGKvevdtdHtddx83TjX", width: 392, height: 698, title: "Rzeźba", description: "Gips"}, //rze
];

const getMeta = (url: string, cb) => {
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
