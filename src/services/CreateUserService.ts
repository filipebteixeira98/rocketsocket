import { injectable } from 'tsyringe';

import { User } from '../schemas/User';

interface CreateUserDTO {
  socket_id: string;
  name: string;
  email: string;
  avatar: string;
}

@injectable()
class CreateUserService {
  public async execute({ socket_id, name, email, avatar }: CreateUserDTO) {
    const userAlreadyExists = await User.findOne({ email }).exec();

    if (userAlreadyExists) {
      const user = await User.findOneAndUpdate(
        {
          _id: userAlreadyExists._id,
        },
        {
          $set: { socket_id, name, avatar },
        }
      );

      return user;
    } else {
      const user = await User.create({
        socket_id,
        name,
        email,
        avatar,
      });

      return user;
    }
  }
}

export { CreateUserService };
