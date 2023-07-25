class AuthRepository {

	async findUserByName(username) {

		if(username !== "teste") {
			return false
		}

		return ({
			id: 1,
			username: "teste",
			password: 123
		})
	}

}

module.exports = new AuthRepository()
