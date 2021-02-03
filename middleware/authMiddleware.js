const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
	const token = req.cookies.jwt

	if (token) {
		jwt.verify(token, 'sadasdwdqwdqwddq', (err, decodedToken) =>{
			if (err) {
				res.json({
					'message': 'you need to login'
				})
			} else {
				next()
			}
		})
	} else {
		res.json({
			'message': 'you need to login'
		})
	}
}