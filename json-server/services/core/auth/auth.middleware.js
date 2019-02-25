const express = require('express');
const router = express.Router();

module.exports = (server) => {
	router.post('/auth/login', (req, res) => {
		const users = server.db.getState().users;
    const matchedUser = users.find(user => user.login === req.body.login);

		if (!matchedUser) {
			res.status(401).send('Wrong username');
		} else if (matchedUser.password === req.body.password) {
			res.json({token: matchedUser.token});
		} else {
			res.status(401).send('Wrong password');
		}
	});

	router.post('/auth/userinfo', (req, res) => {
		const users = server.db.getState().users;
    const matchedUser = users.find(user => user.token === req.body.token);

		if (!matchedUser) {
			res.status(401).send('Unauthorized');
		} else {
			res.json(matchedUser);
		}
	});

	return router;
};
