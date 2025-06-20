import LikesReactions from './Model/LikesReactions';
const newLike = new LikesReactions({
  user: userId, // User's ObjectId
  referenceId: postId, // Post's ObjectId
  referenceType: 'Post',
  reactionType: 'like',
});

await newLike.save();