import bcrypt from 'bcrypt';
import { User } from '../models/User.js';

export const ChangePasswordMutation = {
  async changePassword(_, { email, currentPassword, newPassword }) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }

    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) {
      throw new Error('Incorrect current password');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.update({ password: hashedPassword });

    return 'Password changed successfully';
  }
};