const api = require('./api');
const events = require('./events');

describe('API Tests', () => {
  test('events function should return events array', () => {
    const req = {};
    const res = {
      json: jest.fn()
    };
    
    api.events(req, res);
    expect(res.json).toHaveBeenCalledWith(events);
  });

  test('event function should return specific event', () => {
    const req = {
      param: {
        eventId: 0
      }
    };
    const res = {
      json: jest.fn()
    };
    
    api.event(req, res);
    expect(res.json).toHaveBeenCalledWith(events[0]);
  });
}); 