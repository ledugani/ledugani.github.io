let fireBaseConfig = {};

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
};

const getConfig = () => {
  return fireBaseConfig;
};

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    const allBlogsArray = [];
    $.ajax({
      method: 'GET',
      url: 'https://personal-site-128be.firebaseio.com/blogs.json',
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

module.exports = {
  setConfig,
  getConfig,
  getAllBlogs,
};
