import supertest from "supertest";
import { web } from "../application/web.js";
import { logger } from "../application/logging.js";
import { createTestUser, getTestUser, removeTestUser } from "./test-utils.js";
import bcrypt from "bcrypt";

describe('GET /ping', () => {
  it('should respond with a pong message', async () => {
    const res = await supertest(web).get('/ping');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'pong');
  });
});
