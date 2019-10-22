function validateSleepData(req, res, next) {
    const sleepData = req.body;
    if (!sleepData.dateTimeFrom) {
        res.status(400).json({ errorMessage: 'missing required dateTimeFrom field' });
    } else if (!sleepData.dateTimeTo) {
        res.status(400).json({ errorMessage: 'missing required dateTimeTo field' });
    } else if (!sleepData.feels) {
        res.status(400).json({ errorMessage: 'missing required feels field' });
    } else if (!sleepData.notes) {
        sleepData.notes = 'none';
    } else {
        console.log('sleep data validated');
        next();
    }
}

module.exports = validateSleepData;