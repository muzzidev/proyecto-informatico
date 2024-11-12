const UserSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String
})