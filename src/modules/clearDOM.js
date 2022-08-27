export function clearDOM() {
  const pageRemove = document.querySelector('.page');
  const footer = document.querySelector('.footer');
  
  if (pageRemove) pageRemove.remove();
  
  if (footer) footer.remove();
  
  const container = document.getElementById('content');
  
  return container;
}