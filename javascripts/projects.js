const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = fancyArray => {
  let domString = "";
  fancyArray.forEach((project, index) => {
    domString += "<div class='card'>"
    domString += `<img src='${project.image}' alt='project screenshot' class='profile-image'>`
    domString += `<h2>${project.id}</h2>`
    domString += `<p>${project.description}</p>`
    domString += `<a href='${project.githubUrl}'>Click Here</a>`
    domString += "</div>";
  });
  printToDom(domString, 'my-projects');
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "/db/projects.json");
  myRequest.send();
}

function executeThisCodeIfXHRFails () {
  console.log("something broke")
}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  buildDomString(data.projects);
}

startApplication();