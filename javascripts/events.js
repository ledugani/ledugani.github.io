const dom = require('./dom');
const firebaseApi = require('./firebaseApi');

/* Blogs Event */

const getAllBlogsEvent = () => {
  firebaseApi.viewAllBlogs()
    .then((blogsArray) => {
      dom.buildBlogsDomString(blogsArray);
    })
    .catch((eror) => {
      console.error('trouble building blogs dom:', eror);
    });
};

/* Projects Event */

const getProjectsEvent = () => {
  firebaseApi.viewProjects()
    .then((projectsArray) => {
      dom.buildProjectsDomString(projectsArray);
    })
    .catch((erorr) => {
      console.error('trouble building projects dom:', erorr);
    });
};

const initializer = () => {
  getAllBlogsEvent();
  getProjectsEvent();
};

module.exports = {
  initializer,
};
