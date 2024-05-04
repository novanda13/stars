import {
  loginSchema,
  registerUserValidation
} from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const existingUserCount = await prismaClient.user.count({
    where: { username: user.username }
  });

  if (existingUserCount > 0) {
    throw new ResponseError(400, "Username already exists");
  }

  user.password = await bcrypt.hash(user.password, 10); // Hash password securely

  const result = await prismaClient.user.create({
    data: user,
    select: { id: true, username: true, name: true } // Return only essential fields
  });

  return result;
};

const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const login = async (request) => {
  const loginRequest = validate(loginSchema, request.body);

  const user = await prismaClient.user.findUnique({
    where: {
      username: loginRequest.username
    },
    select: {
      id: true,
      username: true,
      password: true
    }
  });

  if (!user) {
    throw new ResponseError(401, "Invalid credentials");
  }

  const passwordIsValid = await comparePasswords(
    loginRequest.password,
    user.password
  );

  if (!passwordIsValid) {
    throw new ResponseError(401, "Invalid credentials");
  }

  // Generate JWT payload
  const payload = { userId: user.id };

  // Sign the JWT token
  const token = jwt.sign(payload, jwtSecret, { expiresIn: "24h" }); // Expires in 24 hours

  return { token };
};

export default { register, login };
