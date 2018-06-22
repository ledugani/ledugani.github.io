let fireBaseConfig = {};

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
};

const getConfig = () => {
  return fireBaseConfig;
};

module.exports = {
  setConfig,
  getConfig,
};
