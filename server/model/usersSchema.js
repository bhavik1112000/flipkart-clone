import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 30
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 30
  },
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    index: true,
    lowercase: true

  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  }

})

const user = mongoose.model('user', usersSchema)

export default user;