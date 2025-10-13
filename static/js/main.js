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

function pick_svg() {
    // Array of SVG file paths (adjust paths to match your Hugo static folder structure)
    const svgFiles = [
        '/images/couples/img_1.svg',
        '/images/couples/img_2.svg',
        '/images/couples/img_3.svg',
        '/images/couples/img_4.svg',
        '/images/couples/img_5.svg'
    ];

    // Pick a random SVG
    const randomSvg = svgFiles[Math.floor(Math.random() * svgFiles.length)];

    // Create an img element or fetch and insert inline
    const container = document.getElementById('random-svg-container');

    if (container) {
        fetch(randomSvg)
            .then(response => response.text())
            .then(svgContent => {
                container.innerHTML = svgContent;
            })
            .catch(error => console.error('Error loading SVG:', error));

    }
}


const loadAnalytics = () => {
    function gtag(arguments) {
        console.log("gtag", arguments, window.dataLayer)
        window.dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', gtag);
    gtag('consent', 'default', {
        'analytics_storage': 'granted'
    });
    gtag('event', 'page_view_consent', {'page_details': 'Quarteera Cookie Consent'});
};


const consentCookie = () => {
    const banner = document.getElementById("cookie-consent-banner");
    const acceptBtn = document.getElementById("cookie-consent-accept");
    const declineBtn = document.getElementById("cookie-consent-decline");

    if (!localStorage.getItem("cookieConsent")) {
        banner.style.display = "block";
    }

    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        banner.style.display = "none";
        loadAnalytics()
    });

    declineBtn.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "declined");
        banner.style.display = "none";
    });
}

navSlide();
selectLanguage();

document.addEventListener("DOMContentLoaded", consentCookie);

const set404Url = () => {
    const oldUrl = document.getElementById('old-site-link');
    if (oldUrl) {
        const url = window.location.href;
        const paramsString = url.substring(url.lastIndexOf('quarteera.de') + 12);
        let oldUrlText = "https://old.quarteera.de" + paramsString;
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
    pick_svg();
    set404Url();
    initCollapsible();
}

window.onload = init;