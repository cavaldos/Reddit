const z = require("zod");

const SubredditValidator = z.object({
  name: z.string().min(3).max(21),
})

const SubredditSubscriptionValidator = z.object({
  subredditId: z.string(),
})

module.exports = {
  SubredditValidator,
  SubredditSubscriptionValidator
}



