import {
  getUserValidation,
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

const registerUser = async (request) => {
  const user = validate(registerUserValidation, request);

  const existingUserCount = await prismaClient.user.count({
    where: { username: user.username }
  });

  if (existingUserCount > 0) {
    throw new ResponseError(400, "Username already exists");
  }

  user.password = await bcrypt.hash(user.password, 10);
  const result = await prismaClient.user.create({
    data: user,
    select: { id: true, username: true, name: true }
  });

  return result;
};

const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const login = async (req) => {
  const loginRequest = validate(loginSchema, req.body);

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

  const payload = { userId: user.id };

  const token = jwt.sign(payload, jwtSecret, { expiresIn: "2h" });
  return { token };
};

const getUser = async (request) => {
  const username = validate(getUserValidation, request);

  const user = await prismaClient.user.findMany({
    where: {
      username: {
        contains: username
      }
    },
    select: {
      username: true,
      name: true
    }
  });

  if (!user) {
    throw new ResponseError(404, "User not found");
  }

  console.log(user);

  return user;
};

const deleteUser = async (username) => {
  console.error(username);
  try {
    const deletedUser = await prismaClient.user.delete({
      where: { username }
    });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (username, updateData) => {
  const allowedFields = ["name", "password", "phone", "picture"];

  try {
    if (updateData.password) {
      const hashedPassword = await bcrypt.hash(updateData.password, 10);
      updateData.password = hashedPassword;
    }

    const updateField = Object.keys(updateData)[0];

    if (!allowedFields.includes(updateField)) {
      throw new ResponseError(403, "Field is invalid");
    }

    console.log(updateData);

    const updatedUser = await prismaClient.user.update({
      where: { username },
      data: updateData
    });

    if (!updatedUser) {
      throw new ResponseError(404, "User not found");
    }

    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const blacklist = new Set();

const blacklistToken = (token) => {
  blacklist.add(token);
};

const isTokenBlacklisted = (token) => {
  return blacklist.has(token);
};

const logout = (token) => {
  blacklistToken(token);
};

export default {
  registerUser,
  login,
  getUser,
  deleteUser,
  updateUser,
  logout,
  isTokenBlacklisted
};
