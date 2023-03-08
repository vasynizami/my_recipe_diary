import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: false },
  course: { type: Array, required: false },
  cuisine: { type: Array, required: false },
  serves: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: false },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
