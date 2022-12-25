const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string) =>
    `https://drive.google.com/uc?export=view&id=${id}`;

const unsplashPhotos = [
    {id: "1EOPGMjzABJgyX9iCiUsY7rGj3p7ZH4cm", width: 233, height: 226, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, // m
    {id: "1Hho7IV1JNnejeR9n78fvd5BnhOp69i_P", width: 522, height: 518, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    // {id: "1KLOBgZGPeNrs4juar6rfm0Oh5IqA4OZU", width: 875, height: , title: "Dziad rogaty", description: "50x70 olej na płótnie"1292}, //zdj
    {id: "1MRn9RnMSL2JVBRmYG_9dGacAqESJ-VgZ", width: 663, height: 520, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "1S_w7EjtT0m5Sdt6nK3MzpZ8nlYazP8s_", width: 446, height: 454, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "1ToGJfLwFAY1d1q6rwWghECppQsCPZWuh", width: 590, height: 543, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "1Vi3Ap_gq9zWhT_uS8Uje2loZAUbSaprP", width: 180, height: 257, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "1cP3c5He1UGZfgYsZuVjuQd-G8-TxwFd6", width: 238, height: 234, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "1doZi57zID3S5azSwqioOWKEpUq6OsJ_t", width: 230, height: 239, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "1hTI_V8oaKCGKq8wlH1_vw3aXYsoTAflK", width: 244, height: 328, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "1i1R7_Cn4SSa_syaOqAWdJ0v0r60PHp96", width: 425, height: 427, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "1laaTUbFG9-I43yEa-V1tG8c9VDLMIB9u", width: 180, height: 260, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "12gEjZP1mjB3LC3qCvowzgmD6vy3gutYb", width: 352, height: 518, title: "Dziad rogaty", description: "50x70 olej na płótnie"}, //m
    {id: "1DEzuLHIdNWxqh_3C76-kzVmglzpgK7pw", width: 563, height: 516, title: "Dziad rogaty", description: "50x70 olej na płótnie"} //m
];

const photos1 = unsplashPhotos.map((photo) => {
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

export default photos1;
