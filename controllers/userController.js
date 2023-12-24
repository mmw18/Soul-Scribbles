const User = require('../models/user');

// Exporting, to be used in routing elsewhere
module.exports = {
    // Geting all users
    async getUsers(req, res) {
        try {
            const users = await User.find().populate('thoughts').populate('friends');
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Getting a single user by their id
    async getSingleUser(req, res) {
        try {
            const user = await User.findById(req.params.userId).populate('thoughts').populate('friends');
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Creating a new user
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Updating a user by their id
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
            if (!updatedUser) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(updatedUser);
        } catch (err) {
            if (err.name === 'CastError') {
                res.status(400).json({ message: 'Invalid user id format' });
            } else {
                res.status(500).json(err);
            }
        }
    },

    // Deleting a user by their id
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.userId);
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json({ message: 'User deleted successfully!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Adding a friend to a user's friend list
    async addFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Removing a friend from a user's friend list
    async removeFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

