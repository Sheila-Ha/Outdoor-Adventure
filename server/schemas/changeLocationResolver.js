// FUTURE DEVELOPMENT TO UPDATE USERS LOCATION

// import { User } from '../models/User.js';

// export const ChangeLocationMutation = {
//   async changeLocation(_, { newLocation }, req) {
//     const user = await User.findOne({id: req.userInfo.id});

//     if (!user) {
//       throw new Error('User not found');
//     }

//     user.location = newLocation;
//     await user.save();

//     return 'Location updated successfully';
//   }
// };
