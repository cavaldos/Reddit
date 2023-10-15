const { SubredditValidator, SubredditSubscriptionValidator } = require('../validators/subreddit');
const z = require('zod');
const db = require('../../config/database');


const subredditController = {
    create: async (req, res) => {
        try {
            //const name = body.name;
            const { name } = SubredditValidator.parse(req.body);
            const subredditExists = await db.subreddit.findFirst({
                where: {
                    name
                }
            });

            if (subredditExists) {
                return res.status(409).json({ message: 'Subreddit already exists' });
            }
            const subreddit = await db.subreddit.create({
                data: {
                    name, creatorId: req.body.userId,
                }
            });

            await db.subscription.create({
                data: {
                    userId: req.body.userId,
                    subredditId: subreddit.id,
                },
            })
            res.status(201).json({ subreddit });
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({ error: error.message });
            }
            res.status(500).json({ message: 'Could not post to subreddit at this time. Please try later' });
        }
    },
    vote: async (req, res) => {

    },
    search: async (req, res) => {
        const q = req.query.q;
        if (!q) return res.status(400).json({ message: "Invalid query" });

        const results = await db.subreddit.findMany({
            where: {
                name: {
                    startsWith: q,
                },
            },
            include: {
                _count: true,
                
            },
            take: 5,
        })
        res.status(200).json(results);
    },
    subscribe: async (req, res) => {
        try {

            const { subredditId } = SubredditSubscriptionValidator.parse(req.body);
            const subscriptionExists = await db.subscription.findFirst({
                where: {
                    subredditId,
                    userId: req.body.userId
                }
            })
            if (subscriptionExists) {
                return res.status(400).json({ message: "Already subscribed" });
            }
            await db.subscription.create({
                data: {
                    subredditId,
                    userId: session.user.id,
                },
            });
            res.status(201).json({subredditId});
        } catch (error) {
            if(error instanceof z.ZodError){
                return res.status(400).json({error : error.message});
            }
            return res.status(500).json({message:  'Could not subscribe to subreddit at this time. Please try later'});
        }
    }, 
    unsubscribe: async (req, res) =>{
        try{
            const { subredditId } = SubredditSubscriptionValidator.parse(req.body);
            const subscriptionExists = await db.subscription.findFirst({
                where: {
                  subredditId,
                  userId: req.body.userId,
                },
              })
          
              if (!subscriptionExists) {
                return res.status(400).json({message: 'Not subscribed yet'});

              }
          
    
              await db.subscription.delete({
                where: {
                  userId_subredditId: {
                    subredditId,
                    userId: session.user.id,
                  },
                },
              })
          
             res.status(200).json({message: "Ok"});
        }catch(error){
            if(error instanceof z.ZodError){
                return res.status(400).json({error : error.message});
            }
            return res.status(500).json({message:  'Could not subscribe to subreddit at this time. Please try later'});

        }   
    }
}
module.exports = subredditController;
