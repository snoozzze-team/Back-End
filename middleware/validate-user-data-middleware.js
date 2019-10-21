function validateUserData(req, res, next) {
    const userData = req.body;
    if (!userData.email) {
        res.status(400).json({ errorMessage: 'missing required email field' });
    } else if (!userData.password) {
        res.status(400).json({ errorMessage: 'missing required password field' });
    } else {
        console.log('user validated');
        next();
    }
}

module.exports = validateUserData;