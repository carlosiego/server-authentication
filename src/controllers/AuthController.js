const AuthRepository = require('../repositories/AuthRepository')
const jwt = require('jsonwebtoken')

class AuthController {

	async login(req, res) {

		let { username, password } = req.body
		const secretKey= process.env.SECRET_KEY
		if(!username) return res.status(400).json({error: 'Nome do usúario é requerido'})
		if(!password) return res.status(400).json({error: 'Senha é requerida'})

		const user = await AuthRepository.findUserByName(username)

		if(!user) return res.status(404).json({error: "Usuário ou senha incorreta"})

		if(username === user.username && password === user.password) {
			const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1m"})

			return res.json({ token })
		}

		res.status(401).json({ error: "Credenciais inválidas"})

	}

}

module.exports = new AuthController()
