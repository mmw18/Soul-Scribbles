// Importing express and made routes to variables and exporting them to be used al
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
// Routes defined in userRoutes can be accessed through /users
router.use('/users', userRoutes);
// Routes defined in thoughtRoutes can be accessed through /thoughts
router.use('/thoughts', thoughtRoutes);
// Exporting routes
module.exports = router;
