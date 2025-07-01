const bcrypt = require('bcryptjs');
import mongoose from 'mongoose';

const { Schema, model } = mongoose; // Destructure Schema and model from mongoose

const likesReactionsSchema = new Schema({
  // Reference to the user who performed the action
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // 'User' assumes you have a User model defined elsewhere
    required: true,
  },

  // Reference to the item being liked or reacted to (e.g., Post, Comment)
  // We can use a referenceId and a type to handle liking/reacting to different types of content
  referenceId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  referenceType: {
    type: String,
    enum: ['Post', 'Comment'], // Specify the types of documents that can be reacted to
    required: true,
  },

  // Type of reaction (e.g., 'like', 'heart', 'laugh')
  reactionType: {
    type: String,
    required: true,
  },

  // Timestamp for when the like/reaction occurred
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Mongoose model based on the schema
const LikesReactions = model('LikesReactions', likesReactionsSchema);

export default LikesReactions; // Export the model for use in other parts of your application