import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    // Call the user service login function
    const { token } = await userService.login(req);

    // Send successful login response with the JWT token
    res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};

export default {
  register,
  login
};
