const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((results) => {
        resolve(results);
      })
      .fail((eror) => {
        reject(eror);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      firebaseApi.setConfig(results);
      firebase.initializeApp(results);
      // firebase
      //   .auth();
    })
    .catch((errrrror) => {
      console.error('could not retrieve keys', errrrror);
    });
};

module.exports = {
  apiKeys,
  retrieveKeys,
};
