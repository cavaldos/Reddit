const z = require("zod");

const CommentValidator = z.object({
  postId: z.string(),
  text: z.string(),
  replyToId: z.string().optional()
})


module.exports = { CommentValidator };