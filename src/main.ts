import { ValidationPipe, Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { PORT } from './common/constants/config'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const options = new DocumentBuilder()
		.setTitle('Users example')
		.setVersion('1.0')
		.addTag('user')
		.build()
	const document = SwaggerModule.createDocument(app, options)
	SwaggerModule.setup('api', app, document)
	app.enableCors()
	app.useGlobalPipes(new ValidationPipe({ transform: true }))
	await app.listen(PORT, () => {
		Logger.log(`Server running at: http://localhost:${PORT}`)
	})
}
bootstrap()
