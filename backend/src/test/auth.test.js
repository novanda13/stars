import supertest from "supertest";
import { web } from "../application/web.js";
import { logger } from "../application/logging.js";
import { createTestUser, getTestUser, removeTestUser } from "./test-utils.js";
import bcrypt from "bcrypt";

describe("POST /api/users", function () {
  afterEach(async () => {
    await removeTestUser();
  });

  it("should register new user succesfully", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
      role_id: "89c1337c-c29a-445b-a98f-b50055e01b2b",
      phone: "123245678930",
      picture: "https://example.com/picture.jpg"
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.password).toBeUndefined();
  });
});
