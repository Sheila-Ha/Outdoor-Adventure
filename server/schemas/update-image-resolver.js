import { User } from "../models/User.js";

export const UpdateImageProfileUrl = {
  // resolver function for updateImageProfileUrl mutation
  async updateImageProfileUrl(parent, { loginImageProfileUrl }, req) {
    // check if user is logged in
    await User.update(
      { image: loginImageProfileUrl },
      {
        // find the user by id
        where: {
          id: req.userInfo.id,
        },
      }
    );
    return loginImageProfileUrl;
  },
};
