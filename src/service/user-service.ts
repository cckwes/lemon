import { inject, injectable } from "inversify";

import TYPES from "../types";
import { UserRepo } from "../repository/user-repo";

@injectable()
export class UserService {
  @inject(TYPES.UserRepository)
  private userRepo: UserRepo;

  async createUser() {
    console.log("UserService.createUser");
    return this.userRepo.createUser("abc@gmail.com");
  }
}
