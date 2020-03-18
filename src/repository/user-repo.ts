import { injectable } from "inversify";

@injectable()
export class UserRepo {
  async createUser(email: string) {
    console.log(`creating user with email: ${email}`);
    return 0;
  }
}
