const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // Get a single thought by its _id
  async getThoughtById(req, res) {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // POST to create a new thought
  async createThought(req, res) {
    try {
        const newThought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } });
        res.json(newThought);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // PUT to update a thought by its _id
  async updateThought(req, res) {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (!updatedThought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // DELETE to remove a thought by its _id
  async deleteThought(req, res) {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!deletedThought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json({ message: 'Thought deleted successfully!' });
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // POST to create a reaction stored in a single thought's reactions array field
  async addReaction(req, res) {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true }
        );
        if (!updatedThought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  async removeReaction(req, res) {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        if (!updatedThought) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
  }
};

