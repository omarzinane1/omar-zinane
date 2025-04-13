let currentLanguage = "en"; // Langue par défaut

function switchLanguage() {
  if (currentLanguage === "en") {
    currentLanguage = "fr";
    updateNavbar(dict_navbar_francais);
    updateAbout(dict_about_francais);
    updateFacts(dict_facts_francais);
    updateSkills(dict_skills_french);
    updateResume(dict_resume_french);
    updateExperience(dict_resume_french);
    updateServices(dict_services_francais);
    updateFooterQuote(dict_footer_francais)
  } else {
    currentLanguage = "en";
    updateNavbar(dict_navbar_anglais);
    updateAbout(dict_about_anglais);
    updateFacts(dict_facts_anglais);
    updateSkills(dict_skills_english);
    updateResume(dict_resume_english);
    updateExperience(dict_resume_english);
    updateServices(dict_services_anglais);
    updateFooterQuote(dict_footer_anglais)
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
  document.getElementById("about-description").innerText =
    aboutDict.description;
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
  document.getElementById("facts-happy-clients").innerText =
    factsDict.happy_clients;
  document.getElementById("facts-projects").innerText = factsDict.projects;
  document.getElementById("facts-rest-hours").innerText = factsDict.rest_hours;
  document.getElementById("facts-certificates").innerText =
    factsDict.certificates;
}
function updateSkills(skillsDict) {
  document.getElementById("skills-title").innerText = skillsDict.title;
  document.getElementById("skills-description").innerText =
    skillsDict.description;
}
function updateResume(resumeDict) {
  document.getElementById("resume-title").innerText = resumeDict.title;
  document.getElementById("resume-quote").innerText = resumeDict.quote;
  document.getElementById("resume-summary-title").innerText =
    resumeDict.summaryTitle;
  document.getElementById("resume-summary-text").innerText =
    resumeDict.summaryText;

  document.getElementById("resume-contact-location").innerText =
    resumeDict.contact.location;
  document.getElementById("resume-contact-phone").innerText =
    resumeDict.contact.phone;
  document.getElementById("resume-contact-email").innerText =
    resumeDict.contact.email;

  document.getElementById("education-title").innerHTML =
    resumeDict.education[0].title1;
  document.getElementById("education-establishment").innerHTML =
    resumeDict.education[0].establishment1;

  document.getElementById("dut").innerHTML = resumeDict.education[1].title2;
  document.getElementById("resume-school").innerHTML =
    resumeDict.education[1].establishment2;
  document.getElementById("resume-dut").innerHTML =
    resumeDict.education[1].description2;

  document.getElementById("LP").innerHTML = resumeDict.education[2].title3;
  document.getElementById("resume-lp").innerHTML =
    resumeDict.education[2].establishment3;
  document.getElementById("resume-isitw").innerHTML =
    resumeDict.education[2].description3;
}
function updateExperience(exp) {
  document.getElementById("headertitle").innerHTML = exp.experience[0].headertitle;

  for (let i = 0; i < 3; i++) {
    document.getElementById(`experience-title-${i}`).innerHTML =
      exp.experience[i][`title${i + 1}`];

    document.getElementById(`experience-period-${i}`).innerHTML =
      exp.experience[i][`period${i + 1}`];

    document.getElementById(`experience-description-${i}`).innerHTML =
      exp.experience[i][`description${i + 1}`];

  }
  
}
function updateServices(dict) {
  document.getElementById("services-title").innerHTML = dict.title;
  document.getElementById("services-description").innerHTML = dict.description;

  dict.services.forEach((service, index) => {
    document.getElementById(`service-title-${index}`).innerHTML = service.title;
    document.getElementById(`service-description-${index}`).innerHTML = service.description;
  });
}
function updateContactMinimal(dict) {
  document.getElementById("contact-phone-title").innerHTML = dict.phoneTitle;
  document.getElementById("contact-success").innerHTML = dict.successMessage;
  document.getElementById("contact-submit").innerHTML = dict.buttonText;
}

function updateFooterQuote(dict) {
  document.getElementById("footer-quote").innerHTML = dict.quote;
}



