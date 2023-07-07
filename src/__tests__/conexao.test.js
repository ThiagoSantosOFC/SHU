import { connect, disconnect } from '../utils/mongo.config';

describe('MongoDB connection', () => {
  let db;

  beforeAll(async () => {
    db = await connect();
  });

  afterAll(async () => {
    await disconnect();
  });

  it('should connect to MongoDB', () => {
    expect(db).toBeDefined();
  });

  it('should close the connection', async () => {
    await disconnect();
    expect(db.connection.readyState).toBe(0);
  });
});
