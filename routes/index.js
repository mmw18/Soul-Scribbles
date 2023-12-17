// Importing express and all api routes
const router = require('express').Router();
const apiRoutes = require('./api');
// Setting '/api' as the base path for all API routes
router.use('/api', apiRoutes);
// Handling any incorrect routes
router.use((req, res) => res.status(404).send('Route not found'));
// Exporting routes
module.exports = router;
