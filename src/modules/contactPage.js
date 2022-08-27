import { clearDOM } from "./clearDOM";

export function contactPage() {
  
  const container = clearDOM();

  const contact = document.createElement('div');
  contact.classList.add('page', 'contact');
  container.appendChild(contact);

  const address = "<h3>Address:</h3> <p>Jerusalem, Israel</p>";
  const hours = "<h3>Hours</h3> <p>Sunday - Friday: 11 am - 11 pm</p> <p>Closed on Shabbat";
  const contacts = "<h3>Contact us</h3> <p>(222)222-2222</p> <p>mail@mail.com</p>"
  contact.innerHTML = address + hours + contacts;
  
}