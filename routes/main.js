const express = require('express');
const router = express.Router();

// export all routes files here
router.use('/example', require('./example'));

module.exports = router;