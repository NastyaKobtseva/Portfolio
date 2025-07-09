const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section, index) => {
  if (!section.closest("header") && !section.closest("footer")) {
    section.classList.add("section-animate");

    if (index === 0) {
      setTimeout(() => {
        section.classList.add("first-visible");
      }, 200);
    } else {
      observer.observe(section);
    }
  }
});
// burger menu
const menu = document.querySelector(".navigation");
const menuItems = document.querySelectorAll(".menu__link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showNavigation")) {
    menu.classList.remove("showNavigation");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showNavigation");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


// lang 
let currentLanguage = 'en';

function switchLanguage(lang) {
  currentLanguage = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });

  document.querySelectorAll('[data-en][data-uk]').forEach(element => {
    const html = element.getAttribute('data-' + lang);
    if (html) {
      element.innerHTML = html; 
    }
  });

  document.documentElement.setAttribute('lang', lang);
  console.log('Language switched to:', lang);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function () {
      const lang = this.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  switchLanguage(currentLanguage);
});