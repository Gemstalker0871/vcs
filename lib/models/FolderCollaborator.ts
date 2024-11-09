import mongoose from 'mongoose';

const FolderCollaboratorSchema = new mongoose.Schema({
  folderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Folder',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  role: {
    type: String,
    enum: ['VIEWER', 'EDITOR', 'ADMIN'],
    default: 'VIEWER',
  },
}, {
  timestamps: true,
});

// Compound index to ensure unique folder-user combinations
FolderCollaboratorSchema.index({ folderId: 1, userId: 1 }, { unique: true });

export default mongoose.models.FolderCollaborator || mongoose.model('FolderCollaborator', FolderCollaboratorSchema);