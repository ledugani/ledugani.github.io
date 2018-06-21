const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = fancyArray => {
  let domString = '';
  fancyArray.forEach((blog, index) => {
    domString += `<div id="${blog.id}" class="card">`;
    domString += `<h2 class="card-title">${blog.title}</h2>`;
    domString += `<p>${blog.date}</p>`;
    domString += `<p id="blogposts">${blog.post}</p>`;
    domString += `</div>`;
  });
  printToDom(domString, 'my-blogs');
};

const startApplication = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
  myRequest.addEventListener('error', executeThisCodeIfXHRFails);
  myRequest.open('GET', '/db/blogs.json');
  myRequest.send();
};

function executeThisCodeIfXHRFails () {
  console.log('something broke');
};

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  buildDomString(data.blogs);
};

startApplication();
