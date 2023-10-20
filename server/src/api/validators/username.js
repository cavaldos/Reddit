<<<<<<< HEAD
const z = require("zod");
=======
import z from "zod";
>>>>>>> khanh

const UsernameValidator = z.object({
  name: z
    .string()
    .min(3)
    .max(32)
    .regex(/^[a-zA-Z0-9_]+$/),
<<<<<<< HEAD
})

module.exports = {UsernameValidator}
=======
});

export { UsernameValidator };
>>>>>>> khanh
