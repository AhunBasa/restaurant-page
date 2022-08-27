import github from './images/github.svg';

export function footerElement() {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  const icon = new Image();
  icon.src = github;
  
  const ahun = document.createElement('p');
  ahun.insertAdjacentText('afterbegin', 'Made by AhunBasa')
 
  const myLink = document.createElement('a')
  myLink.href = 'https://github.com/AhunBasa/';
  myLink.insertAdjacentElement('beforeend', icon)
  
  
  const div = document.createElement('div');
  div.append(ahun, myLink);

  const text = `<p>Photo by <a href="http://www.pexels.com/photo/served-table-decorated-with-candles-and-flowers-6479583/">Tara Winstead </a>    Icons form <a href="https://materialdesignicons.com/">materialdesignicons.com</a></p>`
  
  footer.append(div);
  footer.insertAdjacentHTML('beforeend', text);

  return footer;
}