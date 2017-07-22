// Initializes the `lines` service on path `/lines`
const createService = require('feathers-nedb');
const createModel = require('../../models/lines.model');
const hooks = require('./lines.hooks');
const filters = require('./lines.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'lines',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/lines', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('lines');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
