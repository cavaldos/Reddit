<<<<<<< HEAD
const z = require("zod");
=======
import * as z from 'zod';
>>>>>>> khanh

const CommentValidator = z.object({
  postId: z.string(),
  text: z.string(),
<<<<<<< HEAD
  replyToId: z.string().optional()
})


module.exports = { CommentValidator };
=======
  replyToId: z.string().optional(),
});

export { CommentValidator };
>>>>>>> khanh
