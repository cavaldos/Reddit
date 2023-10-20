import * as z from "zod";

const SubredditValidator = z.object({
  name: z.string().min(3).max(21),
});

const SubredditSubscriptionValidator = z.object({
  subredditId: z.string(),
});

export { SubredditValidator, SubredditSubscriptionValidator };
