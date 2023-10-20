<<<<<<< HEAD
const z = require("zod");

=======
import * as z from "zod";
>>>>>>> khanh

const PostValidator = z.object({
  title: z
    .string()
    .min(3, {
<<<<<<< HEAD
      message: 'Title must be at least 3 characters long',
    })
    .max(128, {
      message: 'Title must be less than 128 characters long',
    }),
  subredditId: z.string(),
  content: z.any(),
})

module.exports = {PostValidator};
=======
      message: "Title must be at least 3 characters long",
    })
    .max(128, {
      message: "Title must be less than 128 characters long",
    }),
  subredditId: z.string(),
  content: z.any(),
});

export { PostValidator };
>>>>>>> khanh
