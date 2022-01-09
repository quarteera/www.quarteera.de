const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    openIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
  })
}

navSlide();
