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
    const { token } = await userService.login(req);

    res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const username = req.body.username;
    const result = await userService.get(username);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
};

export default {
  register,
  login,
  get
};
