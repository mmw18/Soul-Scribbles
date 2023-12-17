// Importing Schema and model from mongoose 
const { Schema, model } = require('mongoose');
// IMporting reaction schema (reaction.js)
const reactionSchema = require('./reaction');  

// Schema to create the Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toDateString(), //Getter to format the date
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], //Array of the reactions
  },
/* To include any virtuals when converting document to JSON, ensure any getters
defined are applied, and preventing the automatic creation of an additional 'id' feild */
  {
    toJSON: {
      virtuals: true,
      getters: true, 
    },
    id: false, 
  }
);

// Virtual property that will get the number of reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Creating Thought model using schema^
const Thought = model('Thought', thoughtSchema);

// Exporting model to be used elsewhere
module.exports = Thought;
