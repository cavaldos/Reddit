const { CommentValidator } = require("../validators/comment");

const commentController = {
  comment: async (req, res) => {
    try {

      const { postId, text, replyToId } = CommentValidator.parse(req.body);
      await db.comment.create({
        data: {
          text,
          postId,
          authorId: req.body.userId,
          replyToId,
        },
      });
      res.status(200).json({ message: "Ok" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ message: 'Could not post to subreddit at this time. Please try later'});
    }
  },
  vote: async (req, res) => {

  }
}
module.exports = commentController;
