const rateLimit = require('express-rate-limit')

const loginLimiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutos
	max: 7,
	message: 'Muitas tentativas de login. Tente novamante mais tarde.'
})

module.exports = loginLimiter
