import { User } from "../models/User.js";

export const UpdateImageProfileUrl = {
  async updateImageProfileUrl(parent, { loginImageProfileUrl }, req) {
    await User.update(
      { image: loginImageProfileUrl },
      {
        where: {
          id: req.userInfo.id,
        },
      }
    );
    return loginImageProfileUrl;
  },
};
