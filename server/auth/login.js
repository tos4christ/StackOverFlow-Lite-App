import express from 'express';
const router = express.Router();

// Users can login to the app with valid email/password
// Users cannot login to the app with a blank or missing email
// Users cannot login to the app with a blank or incorrect password


// Validate User data here
const validateUserData = (user) => {
	// do stuff
	const validUser = typeof user.email === 'string' && user.email.replace(' ','').length > 1 && typeof user.password === 'string' && user.email.replace(' ','').length >= 6;
	return validUser;
}

// Create route to handle login request
router.post('/', (req, res) => {
	res.json({
		message: 'check'
	});
});

export default router;