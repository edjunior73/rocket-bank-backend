export interface CreateUserInput {
	name: string
	birthday: Date
	city: string
	state: string
	zipCode: string
}

export interface UpdateUserInput {
	name?: string
	birthday?: Date
	city?: string
	state?: string
	zipCode?: string
}
