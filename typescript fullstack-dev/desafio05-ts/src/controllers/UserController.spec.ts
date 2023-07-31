import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { makeMockRequest } from "../__mocks__/mockResquest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request } from "express";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
  };

  const userController = new UserController(mockUserService as UserService);

  it("Deve adicionar um novo usuário", () => {
    const mockRequest = {
      body: {
        name: "Jona",
        email: "jonabergamo@gmail.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário criado",
    });
  });

  it("Deve preencher o campo nome", () => {
    const mockResquest = {
      body: {
        email: "jonabergamo@gmail.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockResquest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request! Name obrigatório",
    });
  });
  it("Deve preencher o campo email", () => {
    const mockResquest = {
      body: {
        name: "Jona",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockResquest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request! Email obrigatório",
    });
  });
});
