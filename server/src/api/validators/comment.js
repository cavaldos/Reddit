import * as z from 'zod';

const CommentValidator = z.object({
  postId: z.string(),
  text: z.string(),
  replyToId: z.string().optional(),
});

export { CommentValidator };