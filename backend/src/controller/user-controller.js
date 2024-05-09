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
    const updateField = req.body.field;
    const updateValue = req.body.value;

    console.log(req.body.field);

    if (!username) {
      return res.status(400).json({ message: "Missing user information" });
    }

    if (!updateField || !updateValue) {
      return res
        .status(400)
        .json({ message: "Missing field or value to update" });
    }

    const updateData = { field: updateField, value: updateValue };

    const updatedUser = await userService.updateUser(username, updateData);

    if (!updatedUser) {
      return res.status(400).json({ message: "Invalid field for update" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  getUser,
  deleteUser,
  updateUser
};
