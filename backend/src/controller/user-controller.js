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

const getUser = async (req, res, next) => {
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

const deleteUser = async (req, res, next) => {
  try {
    const username = req.params.username;

    if (!username) {
      return res.status(400).json({ message: "Missing user information" });
    }

    const deletedUser = await userService.deleteUser(username);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const username = req.params.username;

    if (!username) {
      return res.status(400).json({ message: "Missing user information" });
    }

    const updateField = req.body.field;
    const updateValue = req.body.value;

    if (!updateField || !updateValue) {
      return res
        .status(400)
        .json({ message: "Missing field or value to update" });
    }

    const updateData = { [updateField]: updateValue };

    const updatedUser = await userService.updateUser(username, updateData);

    res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "You are not logged in" });
    }

    if (userService.isTokenBlacklisted(token)) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    userService.logout(token);

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  getUser,
  deleteUser,
  updateUser,
  logoutUser
};
