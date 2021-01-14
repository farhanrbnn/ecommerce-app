const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	const token = req.headers('auth-token')

	if(!token) {
		res.json({
			'message':'You Need to Login First'
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