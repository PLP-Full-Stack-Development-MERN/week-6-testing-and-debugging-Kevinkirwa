const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Bug = require('../models/Bug');

describe('Bug API Endpoints', () => {
  beforeAll(async () => {
    // Connect to a test database
    const url = 'mongodb://127.0.0.1/bugtracker_test';
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  let bugId;

  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test Bug', description: 'Test description' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual('Test Bug');
    bugId = res.body._id;
  });

  it('should fetch all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should update a bug', async () => {
    const res = await request(app)
      .put(`/api/bugs/${bugId}`)
      .send({ status: 'in-progress' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('in-progress');
  });

  it('should delete a bug', async () => {
    const res = await request(app).delete(`/api/bugs/${bugId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Bug deleted successfully.');
  });
});
