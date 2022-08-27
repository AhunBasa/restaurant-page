import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contactPage";

export function navBar() {
  const container = document.getElementById('content');

  const nav = document.createElement('div');
  nav.classList.add('nav');
  container.appendChild(nav);

  const homeTab = document.createElement('div');
  homeTab.classList.add('tab');
  homeTab.textContent = 'Home';
  homeTab.addEventListener('click', homePage);
  nav.appendChild(homeTab);

  const menuTab = document.createElement('div');
  menuTab.classList.add('tab');
  menuTab.textContent = 'Menu';
  menuTab.addEventListener('click', menuPage);
  nav.appendChild(menuTab);

  const contactTab = document.createElement('div');
  contactTab.classList.add('tab');
  contactTab.textContent = 'Contact us';
  contactTab.addEventListener('click', contactPage);
  nav.appendChild(contactTab);

  

}