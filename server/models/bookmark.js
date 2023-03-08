import mongoose from 'mongoose';

const bookmarkSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipe_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true,
  },
  inactive: {
    type: Boolean,
    required: true,
    default: 0,
  },
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

export default Bookmark;
