<<<<<<< HEAD
const z = require("zod");
const { PostValidator } = require("../validators/post");
const { PostVoteValidator } = require("../validators/vote");
const db = require('../../config/database');
const querystring = require('querystring');
const postController =
{
  read: async (req, res) => {
    const queryParams = querystring.parse(req.url.replace(/^.*\?/, ''));
    const page = queryParams.page === undefined ? 1 : queryParams.page;
    const limit = queryParams.limit === undefined? 1 : queryParams.limit;
    const subredditName = queryParams.subredditName ?? 1;
    let followedCommunitiesIds = [];
    if (req.body.userId) {

      const followedCommunities = await db.subscription.findMany({
        where: {
          userId: req.body.userId
        },
        include: {
          subreddit: true
        }
      })
      followedCommunitiesIds = followedCommunities.map((sub) => sub.subreddit.id);
    }
   
    try {
      
=======
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
>>>>>>> khanh
      let whereClause = {};

      if (subredditName) {
        whereClause = {
          subreddit: {
            name: subredditName,
          },
<<<<<<< HEAD
        }
=======
        };
>>>>>>> khanh
      } else if (req.body.userId) {
        whereClause = {
          subreddit: {
            id: {
              in: followedCommunitiesIds,
            },
          },
<<<<<<< HEAD
        }
=======
        };
>>>>>>> khanh
      }

      const posts = await db.post.findMany({
        take: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
        orderBy: {
<<<<<<< HEAD
          createdAt: 'desc',
=======
          createdAt: "desc",
>>>>>>> khanh
        },
        include: {
          subreddit: true,
          votes: true,
          author: true,
          comments: true,
        },
        where: whereClause,
      });
<<<<<<< HEAD
      posts.forEach(post => {
=======
      posts.forEach((post) => {
>>>>>>> khanh
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
<<<<<<< HEAD
        }
      });
      if (!subscription) {
        return res.status(403).json({ message: 'Subscribe to post' });
      }
      const post = await db.post.create({
        data: {
          title, content, authorId: req.body.userId, subredditId
        }
=======
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
>>>>>>> khanh
      });
      res.status(201).json({ post });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.message });
      }
<<<<<<< HEAD
      return res.status(500).json({ message: 'Could not post to subreddit at this time. Please try later' });
=======
      return res.status(500).json({
        message: "Could not post to subreddit at this time. Please try later",
      });
>>>>>>> khanh
    }
  },
  vote: async (req, res) => {
    try {
<<<<<<< HEAD

=======
>>>>>>> khanh
      const { postId, voteType } = PostVoteValidator.parse(req.body);
      const voteExists = await db.vote.findFirst({
        where: {
          userId: req.body.userId,
<<<<<<< HEAD
          postId
        }
      });
      const post = await db.post.findUnique({
        where: {
          id: postId
        },
        include: {
          author: true,
          votes: true
        }
      });
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
=======
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
>>>>>>> khanh
      }
      if (voteExists) {
        if (voteExists.type === voteType) {
          await db.vote.delete({
            where: {
              userId_postId: {
                postId,
<<<<<<< HEAD
                userId: req.body.userId
              }
            }
          });
          return res.status(200).json({ essage: 'Ok' });
=======
                userId: req.body.userId,
              },
            },
          });
          return res.status(200).json({ essage: "Ok" });
>>>>>>> khanh
        }
        await db.vote.update({
          where: {
            userId_postId: {
              postId,
<<<<<<< HEAD
              userId: req.body.userId
            }
          },
          data: {
            type: voteType
          }
        });
        const votesAmt = post.votes.reduce((acc, vote) => {
          if (vote.type === 'UP') return acc + 1;
          if (vote.type === 'DOWN') return acc - 1;
=======
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
>>>>>>> khanh
          return acc;
        }, 0);

        return res.status(200).json({ voteCount: votesAmt });
      }
      await db.vote.create({
        data: {
          type: voteType,
          userId: req.body.userId,
<<<<<<< HEAD
          postId
        }
      });
      const votesAmt = post.votes.reduce((acc, vote) => {
        if (vote.type === 'UP') return acc + 1;
        if (vote.type === 'DOWN') return acc - 1;
=======
          postId,
        },
      });
      const votesAmt = post.votes.reduce((acc, vote) => {
        if (vote.type === "UP") return acc + 1;
        if (vote.type === "DOWN") return acc - 1;
>>>>>>> khanh
        return acc;
      }, 0);

      return res.status(200).json({ voteCount: votesAmt });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.message });
      }
<<<<<<< HEAD
      res.status(500).json({ message: 'Could not post to subreddit at this time. Please try later' });
    }
  },

}
module.exports = postController;
=======
      res.status(500).json({
        message: "Could not post to subreddit at this time. Please try later",
      });
    }
  },
};
export default postController;
>>>>>>> khanh
