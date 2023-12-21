const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../controllers/thoughtController');

router.route('/')
  .get(getAllThoughts)
  .post(createThought);

router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;


// // Importing thought.js,user.js, and express
// const router = require('express').Router();
// const Thought = require('../../models/thought'); 
// const User = require('../../models/user'); 

// // GET to get all thoughts
// router.get('/', async (req, res) => {
//     try {
//         const thoughts = await Thought.find();
//         res.json(thoughts);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // GET to get a single thought by its _id
// router.get('/:thoughtId', async (req, res) => {
//     try {
//         const thought = await Thought.findById(req.params.thoughtId);
//         if (!thought) {
//             res.status(404).json({ message: 'No thought found with this id!' });
//             return;
//         }
//         res.json(thought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // POST to create a new thought
// router.post('/', async (req, res) => {
//     try {
//         const newThought = await Thought.create(req.body);
//         await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } });
//         res.json(newThought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // PUT to update a thought by its _id
// router.put('/:thoughtId', async (req, res) => {
//     try {
//         const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
//         if (!updatedThought) {
//             res.status(404).json({ message: 'No thought found with this id!' });
//             return;
//         }
//         res.json(updatedThought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // DELETE to remove a thought by its _id
// router.delete('/:thoughtId', async (req, res) => {
//     try {
//         const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
//         if (!deletedThought) {
//             res.status(404).json({ message: 'No thought found with this id!' });
//             return;
//         }
//         res.json({ message: 'Thought deleted successfully!' });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // POST to create a reaction stored in a single thought's reactions array field
// router.post('/:thoughtId/reactions', async (req, res) => {
//     try {
//         const updatedThought = await Thought.findByIdAndUpdate(
//             req.params.thoughtId,
//             { $push: { reactions: req.body } },
//             { new: true }
//         );
//         if (!updatedThought) {
//             res.status(404).json({ message: 'No thought found with this id!' });
//             return;
//         }
//         res.json(updatedThought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // DELETE to pull and remove a reaction by the reaction's reactionId value
// router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
//     try {
//         const updatedThought = await Thought.findByIdAndUpdate(
//             req.params.thoughtId,
//             { $pull: { reactions: { reactionId: req.params.reactionId } } },
//             { new: true }
//         );
//         if (!updatedThought) {
//             res.status(404).json({ message: 'No thought found with this id!' });
//             return;
//         }
//         res.json(updatedThought);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // Exporting module to be used elsewhere
// module.exports = router;