const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    openIcon.classList.toggle('disable');
    closeIcon.classList.toggle('disable');
  })
}
const selectLanguage = () => {
  const languageSelector = document.querySelector('.desktop-language');
  const popup = document.querySelector('.language-popup');
  const icon = document.querySelector('.language-open');

  languageSelector.addEventListener('click', () => {
    popup.classList.toggle('disable');
    icon.classList.toggle('rotate');
  })
}

navSlide();
selectLanguage();
