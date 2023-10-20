<<<<<<< HEAD
const z = require("zod");

const PostVoteValidator = z.object({
  postId: z.string(),
  voteType: z.enum(['UP', 'DOWN']),
})


const CommentVoteValidator = z.object({
  commentId: z.string(),
  voteType: z.enum(['UP', 'DOWN']),
})



module.exports = {
  PostVoteValidator,
  CommentVoteValidator
}
=======
import * as z from "zod";

const PostVoteValidator = z.object({
  postId: z.string(),
  voteType: z.enum(["UP", "DOWN"]),
});

const CommentVoteValidator = z.object({
  commentId: z.string(),
  voteType: z.enum(["UP", "DOWN"]),
});

export { PostVoteValidator, CommentVoteValidator };
>>>>>>> khanh
