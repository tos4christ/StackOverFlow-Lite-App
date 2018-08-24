import express from 'express';
const router = express.Router();

// Users can login to the app with valid email/password
// Users cannot login to the app with a blank or missing email
// Users cannot login to the app with a blank or incorrect password

// Validate user data here
const validUser = (user) => {
	// do stuff
	const validUserData = typeof user.email === 'string' && user.email.replace(' ','').length > 1 && typeof user.password === 'string' && user.email.replace(' ','').length >= 6;
	return validUserData;
}

// Create route for login here
router.post('/', (req, res, next) => {
	if(validUser(req.body)){
		res.json({
			message: 'User is valid'
		});
	} else {
		return next(new Error('Invalid User'));
	}
	res.json({
		message: 'signup route check'
	});
});

export default router;