import { ApiProperty } from '@nestjs/swagger'
import { IsString, Length, IsOptional, IsDate } from 'class-validator'
import { IsCEP } from 'brazilian-class-validator'
import { Transform, Type } from 'class-transformer'
import { IsPastDate } from '@common/validators'

export class UpdateUserDto {
	@IsOptional()
	@IsString()
	@ApiProperty()
	name?: string

	@IsOptional()
	@Type(() => Date)
	@IsDate()
	@IsPastDate({ message: 'You must provide a valid birthday' })
	@ApiProperty()
	birthday?: Date

	@IsOptional()
	@IsString()
	@ApiProperty()
	city?: string

	@IsOptional()
	@IsString()
	@Length(2, 2)
	@ApiProperty({ example: 'SP' })
	state?: string

	@IsOptional()
	@IsString()
	@IsCEP()
	@ApiProperty({ example: '00000000' })
	@Transform(({ value }) => value.match(/\d+/g)?.join(''))
	zipCode?: string
}
