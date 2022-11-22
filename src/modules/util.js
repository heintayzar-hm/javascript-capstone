import logo from '../logo.png';
import bg from '../bg.jpg';

const imgHelper = () => {
  const logoImg = document.querySelector('.logo');
  const myIcon = new Image();
  myIcon.src = logo;
  logoImg.appendChild(myIcon);

  const bgImg = document.querySelector('.bg');
  const myBg = new Image();
  myBg.src = bg;
  bgImg.appendChild(myBg);
};

export default imgHelper;