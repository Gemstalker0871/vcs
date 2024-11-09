import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  name: String, // Optional, for group chats
  isGroup: {
    type: Boolean,
    default: false,
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: true,
});

export default mongoose.models.Chat || mongoose.model('Chat', ChatSchema);