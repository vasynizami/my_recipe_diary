import Recipe from '../models/recipe.js';

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    console.log(recipes);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const recipe = req.body;

  const newRecipe = new Recipe(recipe);

  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};