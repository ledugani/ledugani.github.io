const dom = require('./dom');
const firebaseApi = require('./firebaseApi');

const getAllBlogsEvent = () => {
  firebaseApi.viewAllBlogs()
    .then((blogsArray) => {
      dom.buildBlogsDomString(blogsArray);
    })
    .catch((eror) => {
      console.error('trouble building blogs dom:', eror);
    });
};

const initializer = () => {
  getAllBlogsEvent();
};

module.exports = {
  initializer,
};
