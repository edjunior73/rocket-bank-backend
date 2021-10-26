import { ClassSerializerInterceptor, Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { PrismaModule } from './modules/prisma'
import { UserModule } from './modules/users/user.module'

@Module({
	imports: [PrismaModule, UserModule],
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: ClassSerializerInterceptor
		}
	]
})
export class AppModule {}
