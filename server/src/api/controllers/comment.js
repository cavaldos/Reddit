const { CommentValidator } = require("../validators/comment");
const { CommentVoteValidator } = require("../validators/vote");
const { z } = require('zod');
const db = require('../../config/database');
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
      res.status(500).json({ message: error.message });
    }
  },
  vote: async (req, res) => {
    const userId = req.body.userId;
    try {
      const { commentId, voteType } = CommentVoteValidator.parse(req.body);
      const existingVote = await db.commentVote.findFirst({
        where: {
          userId,
          commentId,
        },
      });
      if (existingVote) {
        if (existingVote.type === voteType) {
          await db.commentVote.delete({
            where: {
              userId_commentId: {
                commentId,
                userId,
              },
            },
          })
          return new Response('OK');
        } else {
          await db.commentVote.update({
            where: {
              userId_commentId: {
                commentId,
                userId: userId,
              },
            },
            data: {
              type: voteType,
            },
          })
          return new Response('OK');
        }
      }
      await db.commentVote.create({
        data: {
          type: voteType,
          userId,
          commentId,
        },
      });


      res.status(200).json({ message: "Ok" });
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        res.stauts(400).json({ error: error.message });
      }
      res.status(400).json({ error: 'Could not post to subreddit at this time. Please try later' });

    }
  }
}
module.exports = commentController;
