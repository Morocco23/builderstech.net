// Automatically set the current year in the footer
window.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const splash = document.getElementById("splash");
  const main   = document.getElementById("main");

  // Wait 4 seconds, then fade out splash
  setTimeout(() => {
    splash.classList.add("hidden");

    // After fade (0.5s), remove splash and show main
    splash.addEventListener("transitionend", () => {
      splash.remove();
      main.style.display = "block";
    });
  }, 4000);
});

var menuClick = false;

function toggleMenu(icon) {
    icon.classList.toggle("active");
    const links = document.querySelectorAll(".nav-div a");
  links.forEach(link => link.classList.toggle("show"));
  const body = document.querySelectorAll("body");
  body.forEach(link => link.classList.toggle("show"));

  // Blur everything except these
  const excludedSelectors = [".nav-div a", ".menu-icon span", ".hero .logo"];
  const excludedElements = [];

  excludedSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => excludedElements.push(el));
  });

  // Blur all elements except excluded
  const allElements = document.querySelectorAll("body *");

  allElements.forEach(el => {
    const isExcluded = excludedElements.some(ex => ex === el || ex.contains(el) || el.contains(ex));
    if (!isExcluded) {
      el.classList.toggle("blur");
    }
  });
  menuClick = !menuClick;
}

// Function 
function triggerMenuClickIfWide() {
  if (window.innerWidth > 780) {
    const menuIcon = document.querySelector('.menu-icon');
    if (menuClick) {
      menuIcon.click();
      menuClick = false; // Reset the menu click state
    }
  }
}

function navTp() {
  const menuIcon = document.querySelector('.menu-icon');
  if (menuClick) {
      menuIcon.click();
      menuClick = false; // Reset the menu click state
  }
}

window.addEventListener('resize', triggerMenuClickIfWide);

window.addEventListener("hashchange", function() {
  history.replaceState(null, null, ' ');
}, false);

