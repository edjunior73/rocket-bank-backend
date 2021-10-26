import { Module } from '@nestjs/common'
import { UserController } from './controllers'
import { UserService } from './services'
import { UserRepository } from './repositories'

@Module({
	controllers: [UserController],
	providers: [UserService, UserRepository]
})
export class UserModule {}
