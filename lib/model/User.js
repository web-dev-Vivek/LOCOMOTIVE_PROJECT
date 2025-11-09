import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  whatsapp: {
    type: String,
    required: true,
    trim: true,
  },
  skills: [{
    type: String,
    required: true,
    trim: true,
  }],
}, {
  timestamps: true,
});

// Add index for better query performance
UserSchema.index({ rollNo: 1 });

export default mongoose.models.User || mongoose.model("User", UserSchema);
