const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');
  const body = document.querySelector('.body');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    openIcon.classList.toggle('disable');
    closeIcon.classList.toggle('disable');
    body.classList.toggle('disable-overflow');
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
// disable animation on page load:
// https://stackoverflow.com/questions/22222810/disable-css-transitions-on-page-load-only
document.body.classList.remove('preload');

navSlide();
selectLanguage();

const set404Url = () => {
  const oldUrl = document.getElementById('old-site-link');
  if (oldUrl) {
    const url = window.location.href;
    const paramsString = url.substring(url.lastIndexOf('quarteera.de') + 12);
    let oldUrlText = "http://old.quarteera.de" + paramsString;
    oldUrl.setAttribute("href", oldUrlText);
    oldUrl.innerHTML = oldUrlText;
  }
};

function initCollapsible() {
  const coll = document.querySelectorAll(".collapsible");
  //console.log("init collapse", coll)
  coll.forEach(item => item.addEventListener("click", function () {
    this.classList.toggle("collapsible-active");
    const content = this.nextElementSibling;
    //console.log("Click collapse", content.style.maxHeight, content.scrollHeight, content.offsetHeight)
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 18 + "px";
    }
  }));
}

const init = () => {
  set404Url();
  initCollapsible();
}

window.onload = init;