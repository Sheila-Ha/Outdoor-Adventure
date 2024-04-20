import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';

export const ChangeEmailMutation = {
    async changeEmail(_, { newEmail }, req) {
        const user = await User.findOne( { where: { id: req.userInfo.id } });
        
        if (!user) {
            throw new Error('User not found');
        }

        if (!isValidEmail(newEmail)) {
            throw new Error("Invalid email format.");
        }

        await user.update({ email: newEmail });

        return 'Email updated successfully';
    }
};

function isValidEmail(email) {
    return email.includes('@');
};
