import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsString, Length } from 'class-validator'
import { IsCEP } from 'brazilian-class-validator'
import { Transform, Type } from 'class-transformer'
import { IsPastDate } from '@common/validators'

export class CreateUserDto {
	@IsString()
	@ApiProperty()
	name: string

	@Type(() => Date)
	@IsDate()
	@IsPastDate({ message: 'You must provide a valid birthday' })
	@ApiProperty()
	birthday: Date

	@IsString()
	@ApiProperty()
	city: string

	@IsString()
	@Length(2, 2)
	@ApiProperty({ example: 'SP' })
	state: string

	@IsString()
	@IsCEP()
	@ApiProperty({ example: '00000000' })
	@Transform(({ value }) => value.match(/\d+/g)?.join(''))
	zipCode: string
}
