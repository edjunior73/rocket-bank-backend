import { Body, Controller, Get, Post, Delete, Param, Patch, ParseIntPipe } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserService } from '../services/user.service'
import { User } from '../models/user.model'
import { CreateUserDto, UpdateUserDto } from '../dto'

@ApiTags('user')
@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@ApiOperation({ summary: '`Create user`' })
	@ApiResponse({
		status: 201,
		type: User
	})
	createUser(@Body() input: CreateUserDto) {
		return this.userService.createUser(input)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete user' })
	@ApiResponse({
		status: 200,
		type: User
	})
	deleteUser(@Param('id', ParseIntPipe) id: number) {
		return this.userService.deleteUser(id)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Edit user' })
	@ApiResponse({
		status: 200,
		type: User
	})
	updateUser(@Param('id', ParseIntPipe) id: number, @Body() input: UpdateUserDto) {
		return this.userService.updateUser(id, input)
	}

	@Get(':id')
	@ApiOperation({ summary: 'Seach user by Id' })
	@ApiResponse({
		status: 200,
		type: User
	})
	getUser(@Param('id', ParseIntPipe) id: number) {
		return this.userService.getUser(id)
	}

	@Get()
	@ApiOperation({ summary: 'List users' })
	@ApiResponse({
		status: 200,
		type: [User]
	})
	getUsers() {
		return this.userService.getUsers()
	}
}
