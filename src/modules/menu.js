import { clearDOM } from "./clearDOM";

export function menuPage() {
  const container = clearDOM();

  const menu = document.createElement('div');
  menu.classList.add('page', 'menu');
  container.append(menu);
  
  const forshmak = createDish('Forshmak', 20);
  
  const hummus = createDish('Hummus', 15);

  const gefilteFish = createDish('Gefilte Fish', 30);

  const falafel = createDish('Falafel', 20);

  const chicken = createDish('Chicken, Israeli style', 50);

  const kebab =  createDish(`Beef kebab with fresh vegetables
   and tomato sauce`, 55);

  const shtrudel = createDish('Shtrudel', 15);

  menu.append(forshmak, hummus, gefilteFish, falafel, kebab, chicken, shtrudel);

  function createDish(plate, price) {
    const dish = document.createElement('div');
    dish.innerHTML = `<h4>${plate}</h4><p>${price} shekels</p><hr>`
    dish.classList.add('dish');

    return dish;
  }
}