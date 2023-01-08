import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: false },
  course: { type: String, required: false },
  cuisine: { type: String, required: false },
  serves: { type: String, required: true },
  ingredients: { type: String, required: false },
  instructions: { type: String, required: false },
  tags: { type: Array, required: false },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
