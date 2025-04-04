
let currentLanguage = "en"; // Langue par défaut

function switchLanguage() {
  if (currentLanguage === "en") {
    currentLanguage = "fr";
    updateNavbar(dict_navbar_francais);
  } else {
    currentLanguage = "en";
    updateNavbar(dict_navbar_anglais);
  }
}

function updateNavbar(navDict) {
  document.getElementById("nav-home").innerText = navDict.home;
  document.getElementById("nav-about").innerText = navDict.about;
  document.getElementById("nav-resume").innerText = navDict.resume;
  document.getElementById("nav-portfolio").innerText = navDict.portfolio;
  document.getElementById("nav-services").innerText = navDict.services;
  document.getElementById("nav-contact").innerText = navDict.contact;
}
