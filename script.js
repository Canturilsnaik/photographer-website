const headerIcon = document.querySelector('.header__icon'),
      overlay = document.querySelector('.overlay'),
      btnToggle = document.querySelector('.checkbox__toggle'),
      bodyLight = document.querySelector('body'),
      headerLight = document.querySelector('.header'),
      iconLight = document.querySelectorAll('.header__icon span'),
      btnLight = document.querySelector('.section--1__btn'),
      menuLight = document.querySelector('.overlay__menu');


headerIcon.addEventListener('click', () => {
  headerIcon.classList.toggle('header__icon--opened');
  overlay.classList.toggle('opened');
});

btnToggle.addEventListener('change', (e) => {
  setLight();
})

function setLight(){
  bodyLight.classList.toggle('light--mode');
  headerLight.classList.toggle('header--light-mode');
  btnLight.classList.toggle('btn--light-mode');
  menuLight.classList.toggle('menu--light-mode');
  overlay.classList.toggle('overlay--light');


  iconLight.forEach(item =>{
    item.classList.toggle('icon--light-mode');
  })
  
}