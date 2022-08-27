import { clearDOM } from "./clearDOM";
import { footerElement } from "./footer";
import myMenorah from './images/menorah.svg';
import star from './images/star-david.svg';

export function homePage() {
  
  const container = clearDOM();
  

  const home = document.createElement('div');
  home.classList.add('page', 'home');
  
  const menorah = new Image();
  const starDavid = new Image();
  menorah.src = myMenorah;
  starDavid.src = star;

  const div = document.createElement('div');
  
  const h1 = document.createElement('h1');
  h1.textContent = '7:40';
  div.append(menorah, h1, starDavid);
  
  const p = document.createElement('p');
  p.textContent = 'Kosher restaurant';
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Welcome';

  const p2 = document.createElement('p');
  p2.textContent = `The restaurant is open to everyone, regardless of nationality and religion.`;

  home.append(div, p, h2, p2)
  container.append(home, footerElement());
}