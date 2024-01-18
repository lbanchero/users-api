import "reflect-metadata";
import { Request, Response, NextFunction } from 'express';
import UserController from "../../src/controllers/userController";
import UserService from "../../src/services/userService";
import IUser from "../../src/models/interfaces/IUser";
import { ObjectId } from 'mongodb';

jest.mock('../../src/services/userService', () => {
    return {
        default: jest.fn().mockImplementation(() => ({
            getAll: jest.fn(),
            create: jest.fn()
        }))
    };
});

jest.mock('../../src/repositories/userRepository', () => {
    return jest.fn().mockImplementation(() => ({
        getAllUsers: jest.fn(),
        checkUserExistsByEmail: jest.fn(),
        createUser: jest.fn()
    }));
});

describe('UserController', () => {
    let userController: UserController;
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: NextFunction = jest.fn();
    let mockUserService: jest.Mocked<UserService>;

    beforeEach(() => {
        const mockedUserService = jest.requireMock('../../src/services/userService').default;
        mockUserService = new mockedUserService() as jest.Mocked<UserService>;

        userController = new UserController(mockUserService);
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
    });

    describe('getAllUsers', () => {
        it('should return all users', async () => {
            // Arrange
            const mockUsers = [{
                _id: new ObjectId(),
                email: 'leonardobanchero94@gmail.com',
                createdAt: new Date(),
            }] as IUser[];

            mockUserService.getAll.mockResolvedValue(mockUsers);
            mockRequest.query = { created: 'desc' };

            // Act
            await userController.getAllUsers(mockRequest as Request, mockResponse as Response, nextFunction);

            // Assert
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.send).toHaveBeenCalledWith(mockUsers);
        });
    });

    describe('createUser', () => {
        it('should create a user and return the created user', async () => {
            // Arrange
            const mockUser = {
                _id: new ObjectId(),
                email: 'leonardobanchero94@gmail.com',
                createdAt: new Date(),
            } as IUser;

            mockUserService.create.mockResolvedValue(mockUser);
            mockRequest.body = { email: 'test@example.com' };

            // Act
            await userController.createUser(mockRequest as Request, mockResponse as Response, nextFunction);

            // Assert
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.send).toHaveBeenCalledWith(mockUser);
        });
    });
});