const lists = require('./lists/lists.service.js');
const lines = require('./lines/lines.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(lists);
  app.configure(lines);
};
