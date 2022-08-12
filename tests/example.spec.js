var request = require('supertest');

describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../index');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /example', function testSlash(done) {
  request(server)
    .get('/example')    
    .expect(200, done);
  });  
});
