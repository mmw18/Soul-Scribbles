// Importing Schema and model from mongoose 
const { Schema, Types } = require('mongoose');

// Declaring Schema definition for reaction subdocument
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toDateString(), // Getter to format the date
    },
  },
  {
    toJSON: {
      getters: true, // Ensuring any getters defined are applied
    },
    id: false, // Preventing the virtual _id field from being added
  }
);

// Exporting model to be used elsewhere
module.exports = reactionSchema;
