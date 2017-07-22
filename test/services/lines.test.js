const assert = require('assert');
const app = require('../../src/app');

describe('\'lines\' service', () => {
  it('registered the service', () => {
    const service = app.service('lines');

    assert.ok(service, 'Registered the service');
  });
});
