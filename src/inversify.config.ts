import "reflect-metadata";
import { Container } from "inversify";
import TYPES from "./types";

const container = new Container();

import { UserRepo } from "./repository/user-repo";
import { UserService } from "./service/user-service";

container.bind<UserRepo>(TYPES.UserRepository).to(UserRepo);
container.bind<UserService>(TYPES.UserService).to(UserService);

export default container;
