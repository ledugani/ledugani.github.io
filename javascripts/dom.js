const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildProjectsDomString = projectsArray => {
  let domString = '';
  projectsArray.forEach((project, index) => {
    domString += `<div class='card'>`;
    domString += `<img src='${project.image}' alt='project screenshot' class='profile-image'>`;
    domString += `<h2>${project.id}</h2>`;
    domString += `<p>${project.description}</p>`;
    domString += `<a href='${project.githubUrl}'>Click Here</a>`;
    domString += `</div>`;
  });
  printToDom(domString, 'my-projects');
};

const buildBlogsDomString = blogsArray => {
  let domString = '';
  blogsArray.forEach((blog, index) => {
    domString += `<div id="${blog.id}" class="card">`;
    domString += `<h2 class="card-title">${blog.title}</h2>`;
    domString += `<p>${blog.date}</p>`;
    domString += `<p id="blogposts">${blog.post}</p>`;
    domString += `</div>`;
  });
  printToDom(domString, 'my-blogs');
};

module.exports = {
  buildBlogsDomString,
  buildProjectsDomString,
};
