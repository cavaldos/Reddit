import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
  photoURL: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
  uid :{
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  }
});

const User = mongoose.model("User", userSchema);
export default User
