import { User } from '../models/User.js';

export const ChangeEmailMutation = {
  async changeEmail(_, { currentEmail, newEmail }) {
    const user = await User.find(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const valid = await compare(currentEmail, user.email);
    if (!valid) {
      throw new Error('Incorrect current Email');
    }

    await user.update({ password: newEmail });

    return 'Email changed successfully';
  }
};