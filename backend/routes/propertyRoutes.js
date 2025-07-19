const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

router.get('/', async (req, res) => {
    const property = await Property.findOne();
    res.json(property);
});

module.exports = router;
