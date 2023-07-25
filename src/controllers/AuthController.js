const AuthRepository = require('../repositories/AuthRepository')
const jwt = require('jsonwebtoken')

class AuthController {

	async login(req, res) {

		const { username, password } = req.body

		if(!username) return res.status(400).json({error: 'Nome do usuário é requerido'})
		if(!password) return res.status(400).json({error: 'Senha é requerida'})

		const user = await AuthRepository.findUserByName(username)

		if(!user) return res.status(404).json({error: "Usuário ou senha incorreta"})

		if(username === user.username && password === user.password) {
			const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: "5m"})

			return res.json({ token })
		}

		res.status(401).json({ error: "Credenciais inválidas"})

	}

	async verify(req, res){

		const { token } = req.body

		if(!token) return res.sendStatus(401)

		jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
			if(err) {
				res.status(403).json({error: 'Token inválido'})
			}else {
				res.json({ message: 'Token válido', decoded})
			}
		})

	}

}

module.exports = new AuthController()
