const z = require("zod");
const { PostValidator } = require("../validators/post");
const db = require('../../config/database');
const postController =
{
    read: async(req, res) =>{
        const url = new URL(req.url);
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
            const { limit, page, subredditName } = z
              .object({
                limit: z.string(),
                page: z.string(),
                subredditName: z.string().nullish().optional(),
              })
              .parse({
                subredditName: url.searchParams.get('subredditName'),
                limit: url.searchParams.get('limit'),
                page: url.searchParams.get('page'),
              });
        
            let whereClause = {};
        
            if (subredditName) {
              whereClause = {
                subreddit: {
                  name: subredditName,
                },
              }
            } else if (req.body.userId) {
              whereClause = {
                subreddit: {
                  id: {
                    in: followedCommunitiesIds,
                  },
                },
              }
            }
        
            const posts = await db.post.findMany({
              take: parseInt(limit),
              skip: (parseInt(page) - 1) * parseInt(limit),
              orderBy: {
                createdAt: 'desc',
              },
              include: {
                subreddit: true,
                votes: true,
                author: true,
                comments: true,
              },
              where: whereClause,
            });
            res.status(200).json(posts);
          } catch (error) {
            res.status(500).json({message: 'Cannot fetch post '});
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
                }
            });
            if (!subscription) {
                return res.status(403).json({ message: 'Subscribe to post' });
            }
            const post = await db.post.create({
                data: {
                    title, content, authorId: req.body.userId, subredditId
                }
            });
            res.status(201).json({post});
        } catch (error) {
            if(error instanceof z.ZodError){
                return res.status(400).json({error: error.message});
            }
            return res.status(500).json({message: 'Could not post to subreddit at this time. Please try later'});
        }
    },
    vote: async(req, res) =>{

    },

}
module.exports = postController;
