/* eslint camelcase: 0 */

/* CSS Stuff */

/* Sticky navbar */

window.onscroll = () => {
  myFunction();
};

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

const myFunction = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

/* Change Active State */

// Experiment
$(document).ready(function () {
  $(document).on('scroll', onScroll);

  // smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off('scroll');

    $('a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    let target = this.hash;
    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top + 2,
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on('scroll', onScroll);
    });
  });
});

function onScroll () {
  const scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
    const currLink = $(this);
    const refElement = $(currLink.attr('href'));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menu-center ul li a').removeClass('active');
      currLink.addClass('active');
    }
    else {
      currLink.removeClass('active');
    }
  });
}

/* Print to Page */
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
    domString += `<div id='${blog.id}' class='card'>`;
    domString += `<h2 class='card-title'>${blog.title}</h2>`;
    domString += `<p>${blog.date}</p>`;
    domString += `<p id='blogposts'>${blog.post}</p>`;
    domString += `</div>`;
  });
  printToDom(domString, 'my-blogs');
};

module.exports = {
  buildBlogsDomString,
  buildProjectsDomString,
};
