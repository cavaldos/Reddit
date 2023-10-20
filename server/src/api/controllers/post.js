import z from "zod";
import { PostValidator } from "../validators/post.js";
import { PostVoteValidator } from "../validators/vote.js";
import db from "../../config/database.js";
import querystring from "querystring";
const postController = {
  read: async (req, res) => {
    const queryParams = querystring.parse(req.url.replace(/^.*\?/, ""));
    const page = queryParams.page === undefined ? 1 : queryParams.page;
    const limit = queryParams.limit === undefined ? 1 : queryParams.limit;
    const subredditName = queryParams.subredditName ?? 1;
    let followedCommunitiesIds = [];
    if (req.body.userId) {
      const followedCommunities = await db.subscription.findMany({
        where: {
          userId: req.body.userId,
        },
        include: {
          subreddit: true,
        },
      });
      followedCommunitiesIds = followedCommunities.map(
        (sub) => sub.subreddit.id
      );
    }

    try {
      let whereClause = {};

      if (subredditName) {
        whereClause = {
          subreddit: {
            name: subredditName,
          },
        };
      } else if (req.body.userId) {
        whereClause = {
          subreddit: {
            id: {
              in: followedCommunitiesIds,
            },
          },
        };
      }

      const posts = await db.post.findMany({
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
        orderBy: {
          createdAt: "desc",
        },
        include: {
          subreddit: true,
          votes: true,
          author: true,
          comments: true,
        },
        where: whereClause,
      });
      posts.forEach((post) => {
        post.author.password = "-";
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      //const body = await req.json();
      const { title, content, subredditId } = PostValidator.parse(req.body);
      const subscription = await db.subscription.findFirst({
        where: {
          subredditId,
          userId: req.body.userId,
        },
      });
      if (!subscription) {
        return res.status(403).json({ message: "Subscribe to post" });
      }
      const post = await db.post.create({
        data: {
          title,
          content,
          authorId: req.body.userId,
          subredditId,
        },
      });
      res.status(201).json({ post });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({
        message: "Could not post to subreddit at this time. Please try later",
      });
    }
  },
  vote: async (req, res) => {
    try {
      const { postId, voteType } = PostVoteValidator.parse(req.body);
      const voteExists = await db.vote.findFirst({
        where: {
          userId: req.body.userId,
          postId,
        },
      });
      const post = await db.post.findUnique({
        where: {
          id: postId,
        },
        include: {
          author: true,
          votes: true,
        },
      });
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      if (voteExists) {
        if (voteExists.type === voteType) {
          await db.vote.delete({
            where: {
              userId_postId: {
                postId,
                userId: req.body.userId,
              },
            },
          });
          return res.status(200).json({ essage: "Ok" });
        }
        await db.vote.update({
          where: {
            userId_postId: {
              postId,
              userId: req.body.userId,
            },
          },
          data: {
            type: voteType,
          },
        });
        const votesAmt = post.votes.reduce((acc, vote) => {
          if (vote.type === "UP") return acc + 1;
          if (vote.type === "DOWN") return acc - 1;
          return acc;
        }, 0);

        return res.status(200).json({ voteCount: votesAmt });
      }
      await db.vote.create({
        data: {
          type: voteType,
          userId: req.body.userId,
          postId,
        },
      });
      const votesAmt = post.votes.reduce((acc, vote) => {
        if (vote.type === "UP") return acc + 1;
        if (vote.type === "DOWN") return acc - 1;
        return acc;
      }, 0);

      return res.status(200).json({ voteCount: votesAmt });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({
        message: "Could not post to subreddit at this time. Please try later",
      });
    }
  },
};
export default postController;