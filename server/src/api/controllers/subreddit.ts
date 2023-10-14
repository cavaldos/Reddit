import { SubredditValidator } from '../validators/subreddit';
import { z } from 'zod';
import { db } from '../../config/database';
const subredditController = {
    create: async (req, res) => {
        try{

            const body = await req.json();
            const {name} = SubredditValidator.parse(body);
            const subredditExists = await db.subreddit.findFirst({
                where:{
                    name
                }
            });
            if(subredditExists){
                return res.status(409).json({message:'Subreddit already exists'});
            }
            const subreddit = await db.subreddit.create({
                data :{
                    name, creatorId: req.body.userId,
                }
            });
            res.status(201).json({name: subreddit.name});
        }catch(error){
            if(error instanceof z.ZodError){
                return res.status(400).json({error: error.message});
            }
            res.status(500).json({message:  'Could not post to subreddit at this time. Please try later'});
        }
    },
    vote: async (req, res) =>{
        
    },
    search: async(req, res) =>{
        
    }


}
module.exports = subredditController;
