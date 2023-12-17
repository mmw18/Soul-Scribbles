// Importing Schema and model from mongoose 
const { Schema, model } = require('mongoose');

// Declaring Schema definition for user(s)
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address'],
      max_length: 100,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
/*   To include any virtuals when converting document to JSON and ensure any getters
that are possibly defined/added later are applied */
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

/* Virtual property that is not stored in DB but is calculated in real time everytime the 
 friendCount property is accessed */
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Creating user model using Schema^
const User = model('User', userSchema);

// Exporting model to be used elsewhere
module.exports = User;
