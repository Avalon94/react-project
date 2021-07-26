const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require(../models/User)
const router = Router()

router.post('/register', 
	[
		check('email', 'Incorrect email').isEmail(),
		check('password', 'Minimal length is 6 symbols')
			.isLength({min: 6})
	]
	async (req, res) => {
	try {
		const errors = validationResults(req)
		if (!errors.isEmpty()){
			return res.status(400).json({ errors: errors.array(), message: 'Incorrect data from register'})
		}
		const {email, password} = req.body

		const candidate = await User.findOne({ email })
		
		if (candidate){
			return res.status(400).json({ message: 'User is exsist!' })
		}
		
		const hashedPassword = await bcrypt.hash(password, 12)
		const user = new User({ email, password: hashedPassword })
		await user.save()
		res.status(201).json({ message: 'New user created!'

	} catch(e){
		res.status(500).json({ message: 'Something gone wrong, try again'})
	}
})

router.post('/login', 
	[
		check('email', 'Input a correct email').normalizeEmail().isEmail(),
		check('password', 'input a password').exists()
	],
	async (req, res) => {
	try {
		const errors = validationResults(req)
		if (!errors.isEmpty()){
			return res.status(400).json({ 
				errors: errors.array(), 
				message: 'Incorrect data from auth'
			})
		}

		const {email, password} = req.body

		const user = await User.findOne({ email })
		
		if (user){
			return res.status(400).json({ message: 'User is not found!' })
		}
		

		const isMatch = await bcrypt.compare(password, user.password)

		if (!isMatch) {
			res.status(500).json({ message: 'Something gone wrong, try again'})
		}

		const token = jwt.sign(
			{userId: user.id}, 
			config.get('jwtSecret'),
			{expiresIn: '1h' }
		)
	
		res.json({token, userId: user.id})

	} catch(e){
		res.status(500).json({ message: 'Something gone wrong, try again'})
	}
})

module.expors = router