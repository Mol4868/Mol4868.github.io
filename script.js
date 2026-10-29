const cat = document.querySelector('#cat');
const catchangebutton = document.querySelector('#CatChanger');

if (cat && catchangebutton) {
  catchangebutton.addEventListener('click', () => {
    cat.src = 'images/Maine_Coon_Cat.jpg';
  });
}
