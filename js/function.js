
let currentLanguage = "en"; // Langue par défaut

function switchLanguage() {
  if (currentLanguage === "en") {
    currentLanguage = "fr";
    updateNavbar(dict_navbar_francais);
    updateAbout(dict_about_francais);
  } else {
    currentLanguage = "en";
    updateNavbar(dict_navbar_anglais);
    updateAbout(dict_about_anglais);
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
function updateAbout(aboutDict) {
  document.getElementById("about-title").innerText = aboutDict.title;
  document.getElementById("about-intro").innerText = aboutDict.intro;
  document.getElementById("about-role").innerText = aboutDict.role;
  document.getElementById("about-description").innerText = aboutDict.description;
  document.getElementById("about-birthday").innerText = aboutDict.birthday;
  document.getElementById("about-website").innerText = aboutDict.website;
  document.getElementById("about-phone").innerText = aboutDict.phone;
  document.getElementById("about-city").innerText = aboutDict.city;
  document.getElementById("about-age").innerText = aboutDict.age;
  document.getElementById("about-degree").innerText = aboutDict.degree;
  document.getElementById("about-email").innerText = aboutDict.email;
  document.getElementById("about-freelance").innerText = aboutDict.freelance;
  document.getElementById("about-quote").innerText = aboutDict.quote;
}
