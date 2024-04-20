import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';
import { where } from 'sequelize';

export const ChangePasswordMutation = {
  async changePassword(_, { currentPassword, newPassword }, req) {
    console.log(req.userInfo.id, 'userid');
    const user = await User.findOne( { where: { id: req.userInfo.id } });
    if (!user) {
      throw new Error('User not found');
    }

    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) {
      throw new Error('Incorrect current password');
    }

    const result = await user.update({ password: newPassword }, { where: { id: req.userInfo.id } });
    return 'Password changed successfully';
  }
};