import { response } from "express";
import { PostValidator } from "../validators/post";
import { z } from "zod";
const postController =
{
    read: async(req, res) =>{

    },
    create: async (req, res) => {
        try {
            const body = await req.json();
            const { title, content, subredditId } = PostValidator.parse(body);
            const subscription = await db.subscription.findFirst({
                where: {
                    subredditId,
                    userId: req.body.userId,
                }
            });
            if (!subscription) {
                return res.status(403).json({ message: 'Subscribe to post' });
            }
            await db.post.create({
                data: {
                    title, content, authorId: req.body.userId, subredditId
                }
            });
            res.status(201).json({ message: 'Ok' });
        } catch (error) {
            if(error instanceof z.ZodError){
                return res.status(400).json({error: error.message});
            }
            return res.status(500).json({message: 'Could not post to subreddit at this time. Please try later'});
        }
    },
    vote: async(req, res) =>{

    },
    subscribe: async (req, res) =>{

    },
    unsubscribe: async(req, res)=>{

    }

}
module.exports = postController;
