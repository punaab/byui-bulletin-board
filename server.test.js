const request = require('supertest');
const express = require('express');
const app = require('./server');

describe('Server Tests', () => {
  test('GET / should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  test('GET /api/events should return events array', async () => {
    const response = await request(app).get('/api/events');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('GET /api/events should return events with correct structure', async () => {
    const response = await request(app).get('/api/events');
    expect(response.status).toBe(200);
    
    const event = response.body[0];
    expect(event).toHaveProperty('id');
    expect(event).toHaveProperty('title');
    expect(event).toHaveProperty('date');
  });
}); 