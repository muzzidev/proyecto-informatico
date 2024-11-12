import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String
})

const User = mongoose.model('User', UserSchema);

export default User;