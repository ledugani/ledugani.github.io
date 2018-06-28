/* Firebase Configuration */
let fireBaseConfig = {};

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
};

const getConfig = () => {
  return fireBaseConfig;
};

// Get Blogs

const viewAllBlogs = () => {
  return new Promise((resolve, reject) => {
    const allBlogsArray = [];
    $.ajax({
      method: 'GET',
      url: `https://personal-site-128be.firebaseio.com/blogs.json`,
    })
      .done((allBlogsObj) => {
        if (allBlogsObj !== null) {
          Object.keys(allBlogsObj).forEach((fbkey) => {
            allBlogsObj[fbkey].id = fbkey;
            allBlogsArray.push(allBlogsObj[fbkey]);
          });
        }
        resolve(allBlogsArray);
      })
      .fail((errrorrr) => {
        reject(errrorrr);
      });
  });
};

// Get Projects
const viewProjects = () => {
  return new Promise((resolve, reject) => {
    const myProjectsArray = [];
    $.ajax({
      method: 'GET',
      url: `https://personal-site-128be.firebaseio.com/projects/projects.json`,
    })
      .done((myProjectsObj) => {
        if (myProjectsObj !== null) {
          Object.keys(myProjectsObj).forEach((fbkey) => {
            myProjectsObj[fbkey].id = fbkey;
            myProjectsArray.push(myProjectsObj[fbkey]);
          });
        }
        resolve(myProjectsArray);
      })
      .fail((errr) => {
        reject(errr);
      });
  });
};

module.exports = {
  setConfig,
  getConfig,
  viewAllBlogs,
  viewProjects,
};
