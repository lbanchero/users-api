import "reflect-metadata"
import { UserDto } from "../../src/dtos/userDto";
import IUser from "../../src/models/interfaces/IUser";
import UserService from "../../src/services/userService";
import { StatusError } from "../../src/utils/statusError";
import { ObjectId } from 'mongodb';

// Mock IUserRepository
const mockUserRepository: {
  getAllUsers: jest.Mock;
  checkUserExistsByEmail: jest.Mock;
  createUser: jest.Mock;
} = {
  getAllUsers: jest.fn(),
  checkUserExistsByEmail: jest.fn(),
  createUser: jest.fn(async (user) => ({
    ...user,
    _id: new ObjectId(),
  })),
};

const userService = new UserService(mockUserRepository);

describe('UserService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAll', () => {
    it('should return an array of UserDto objects', async () => {
      // Arrange
      const mockUsers = [{
        _id: new ObjectId(),
        email: 'leonardobanchero94@gmail.com',
        createdAt: new Date(),
      }] as IUser[];

      mockUserRepository.getAllUsers.mockResolvedValue(mockUsers);

      // Act
      const result = await userService.getAll();

      // Assert
      expect(result).toEqual(mockUsers.map((user) => new UserDto(user)));
      expect(mockUserRepository.getAllUsers).toHaveBeenCalledTimes(1);
    });
  });

  describe('create', () => {
    it('should create a new user and return a UserDto', async () => {
      // Arrange
      const email = 'leonardobanchero94@gmail.com';
      mockUserRepository.checkUserExistsByEmail.mockResolvedValue(false);

      // Act
      const result = await userService.create(email);

      // Assert
      expect(result).toBeInstanceOf(UserDto);
      expect(mockUserRepository.checkUserExistsByEmail).toHaveBeenCalledWith(email);
      expect(mockUserRepository.createUser).toHaveBeenCalledTimes(1);
    });

    it('should throw an StatusError if a user with the same email already exists', async () => {
      // Arrange
      const email = 'leonardobanchero94@gmail.com';
      mockUserRepository.checkUserExistsByEmail.mockResolvedValue(true);

      // Act & Assert
      await expect(userService.create(email)).rejects.toThrow(StatusError);
      expect(mockUserRepository.checkUserExistsByEmail).toHaveBeenCalledWith(email);
      expect(mockUserRepository.createUser).not.toHaveBeenCalled();
    });
  });
});