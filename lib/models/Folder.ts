import mongoose from 'mongoose';

const FolderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Folder || mongoose.model('Folder', FolderSchema);