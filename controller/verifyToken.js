const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	const token = req.header('auth-token')

	if(!token) {
		res.json({
			'message':'ACCES DENIED'
		})
	}

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET)
		req.user = verified
		next()
	} catch (err) {
		res.json({
			'error': err
		})
	}
}