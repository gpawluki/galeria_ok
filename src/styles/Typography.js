import { createGlobalStyle } from 'styled-components';
import EBGaramond from '../assets/fonts/static/EBGaramond-Regular.ttf'
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
// import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Consolas';
    /* src: url(${RobotoMonoRegular}); */
    font-style: normal;
  }
  @font-face {
    font-family: 'Consolas';
    src: url(${EBGaramond});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  html{
    font-family: 'Consolas';
    color: var(--gray-1);
  }
  *{
    font-family: 'Consolas';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Consolas'
  }
`;

export default Typography;
