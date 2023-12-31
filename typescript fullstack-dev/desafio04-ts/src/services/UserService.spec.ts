import { UserService } from "./UserService";
import { User } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const userService = new UserService(mockDb);

  it("Deve adicionar um novo usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("Jona", "jonathanbergamo@gmail.com");
    expect(mockConsole).toHaveBeenCalledWith("DB atualizado", mockDb);
  });

  it("Deve deletar um usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.deleteUser({
      name: "Joana",
      email: "joana@dio.com",
    });
    expect(mockConsole).toHaveBeenCalledWith("Usuário deletado", mockDb);
  });
});
