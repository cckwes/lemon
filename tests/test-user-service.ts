import { assert } from "chai";
import sinon from "sinon";

import container from "../src/inversify.config";
import TYPES from "../src/types";
import { UserRepo } from "../src/repository/user-repo";
import { UserService } from "../src/service/user-service";

describe("User Service", () => {
  let createUserStub: sinon.SinonStub;

  beforeEach("container snapshot", () => {
    container.snapshot();
  });

  afterEach("container restore", () => {
    container.restore();
  });

  it("should mock user repo function", async () => {
    createUserStub = sinon.stub();
    container.unbind(TYPES.UserRepository);
    container.bind<UserRepo>(TYPES.UserRepository).toConstantValue({ createUser: createUserStub });

    const userService = container.get<UserService>(TYPES.UserService);
    createUserStub.resolves(1);
    const result = await userService.createUser();

    assert.strictEqual(result, 1);
  });

  it("should not mock user repo function", async () => {
    const userService = container.get<UserService>(TYPES.UserService);
    createUserStub.resolves(1);
    const result = await userService.createUser();

    assert.strictEqual(result, 0);
  });
});
