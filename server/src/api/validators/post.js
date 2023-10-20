import * as z from "zod";

const PostValidator = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters long",
    })
    .max(128, {
      message: "Title must be less than 128 characters long",
    }),
  subredditId: z.string(),
  content: z.any(),
});

export { PostValidator };
