import express from 'express';
const router = express.Router();

// Users can login to the app with valid email/password
// Users cannot login to the app with a blank or missing email
// Users cannot login to the app with a blank or incorrect password


// Validate User data here
const validUser = (user) => {
	// do stuff
	const validEmail = typeof user.email === 'string' && user.email.replace(' ','').length > 1 
	const validPassword = typeof user.password === 'string' && user.email.replace(' ','').length >= 6;
	return validEmail && validPassword;
}

// Create route to handle login request
router.post('/', (req, res, next) => {
	if(validUser(req.body)){
		res.json({
			message: 'User is valid'
		});
	} else {
		return next(new Error('Invalid User'));
	}
	res.json({
		message: 'login route check'
	});

});

export default router;