
let currentLanguage = "en"; // Langue par défaut

function switchLanguage() {
  if (currentLanguage === "en") {
    currentLanguage = "fr";
    updateNavbar(dict_navbar_francais);
    updateAbout(dict_about_francais);
    updateFacts(dict_facts_francais);
    updateSkills(dict_skills_french);
    updateResume(dict_resume_french);
  } else {
    currentLanguage = "en";
    updateNavbar(dict_navbar_anglais);
    updateAbout(dict_about_anglais);
    updateFacts(dict_facts_anglais);
    updateSkills(dict_skills_english);
    updateResume(dict_resume_english);
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
function updateFacts(factsDict) {
  document.getElementById("facts-title").innerText = factsDict.title;
  document.getElementById("facts-intro").innerText = factsDict.intro;
  document.getElementById("facts-happy-clients").innerText = factsDict.happy_clients;
  document.getElementById("facts-projects").innerText = factsDict.projects;
  document.getElementById("facts-rest-hours").innerText = factsDict.rest_hours;
  document.getElementById("facts-certificates").innerText = factsDict.certificates;
}
function updateSkills(skillsDict) {
  document.getElementById("skills-title").innerText = skillsDict.title;
  document.getElementById("skills-description").innerText = skillsDict.description;
}
function updateResume(resumeDict) {
  document.getElementById("resume-title").innerText = resumeDict.title;
  document.getElementById("resume-quote").innerText = resumeDict.quote;
  document.getElementById("resume-summary-title").innerText = resumeDict.summaryTitle;
  document.getElementById("resume-summary-text").innerText = resumeDict.summaryText;

  document.getElementById("resume-contact-location").innerText = resumeDict.contact.location;
  document.getElementById("resume-contact-phone").innerText = resumeDict.contact.phone;
  document.getElementById("resume-contact-email").innerText = resumeDict.contact.email;

  document.getElementById("education-title").innerHTML = resumeDict.education[0].title;
  document.getElementById("education-establishment").innerHTML = resumeDict.education[0].establishment;
}


