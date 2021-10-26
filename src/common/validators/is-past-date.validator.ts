import { isDate, registerDecorator, ValidationOptions } from 'class-validator'

export function isPastDate(value: any): boolean {
	if (!isDate(value)) return false
	return value.getTime() < Date.now()
}

export function IsPastDate(validationOptions?: ValidationOptions) {
	return function (object: Object, propertyName: string) {
		registerDecorator({
			name: 'isPastDate',
			target: object.constructor,
			propertyName,
			constraints: [],
			options: validationOptions,
			validator: {
				validate(value: any) {
					return isPastDate(value)
				}
			}
		})
	}
}
