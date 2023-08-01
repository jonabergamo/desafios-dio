import { UserService } from "./UserService";
jest.mock("../repositores/UserRepository");
const mockUserRepository = require("../repositores/UserRepository");

describe("UserService", () => {
  const userService = new UserService(mockUserRepository);

  it("Deve adicionar um novo usuário", async () => {
    mockUserRepository.createUser = jest.fn().mockImplementation(() => {
      Promise.resolve({
        id_user: "123456",
        name: "Jona",
        email: "jona@teste.com",
        password: "123456",
      });
    });
    const response = await userService.createUser(
      "Jona",
      "jonathanbergamo@gmail.com",
      "123456"
    );
    expect(mockUserRepository.createUser).toHaveBeenCalled();
    expect(response).toMatchObject({
      id_user: "123456",
      name: "Jona",
      email: "jona@teste.com",
      password: "123456",
    });
  });
});
