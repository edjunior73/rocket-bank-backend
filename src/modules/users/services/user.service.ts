import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { CreateUserInput, UpdateUserInput } from '../types'
import { User } from '../models/user.model'
import { UserRepository } from '../repositories/user.repository'

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async createUser(userInput: CreateUserInput): Promise<User> {
		try {
			const createdUser = await this.userRepository.create(userInput)
			return createdUser
		} catch (error) {
			throw new BadRequestException('an error has ocurred to create this user')
		}
	}

	async getUser(userId: number): Promise<User | null> {
		const user = await this.userRepository.getById(userId)
		return user
	}

	async deleteUser(userId: number): Promise<User> {
		const foundUser = await this.userRepository.existsById(userId)

		if (!foundUser) throw new NotFoundException('user does not exists!')

		try {
			const deletedUser = await this.userRepository.delete(userId)
			return deletedUser
		} catch (error) {
			throw new BadRequestException('an error has ocurred deleting this user')
		}
	}

	async updateUser(userId: number, input: UpdateUserInput): Promise<User> {
		const foundUser = await this.userRepository.existsById(userId)

		if (!foundUser) throw new NotFoundException('user does not exists!')
		let updatedUser
		try {
			updatedUser = this.userRepository.update(userId, input)
		} catch (error) {
			throw new BadRequestException('an error has ocurred updating this user')
		}

		return updatedUser
	}

	async getUsers(): Promise<User[]> {
		return this.userRepository.getAll()
	}
}
