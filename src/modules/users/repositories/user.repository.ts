import { Injectable } from '@nestjs/common'
import { BaseRepositoryPrisma } from '@common/classes'
import { User } from '../models'
import { CreateUserInput, UpdateUserInput } from '../types'

@Injectable()
export class UserRepository extends BaseRepositoryPrisma<User, 'user'> {
	constructor() {
		super(User, 'user')
	}

	async create(input: CreateUserInput): Promise<User> {
		const user = await this.prismaService.user.create({ data: input })

		return this.format(user)
	}

	async getAll(): Promise<User[]> {
		const users = await this.prismaService.user.findMany()
		return users.map(user => this.format(user))
	}

	async update(id: number, input: UpdateUserInput): Promise<User> {
		const user = await this.prismaService.user.update({ data: input, where: { id } })
		return this.format(user)
	}

	async delete(id: number): Promise<User> {
		const deletedUser = await this.prismaService.user.delete({
			where: { id }
		})
		return this.format(deletedUser)
	}
}
