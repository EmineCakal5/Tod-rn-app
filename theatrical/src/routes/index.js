const todmena = require('./todmena');

module.exports = (app) => {
  app.use('/todmena', todmena);
};
