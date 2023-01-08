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

export const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (recipe) {
      return res.json(recipe);
    }
    res.status(404).json({ message: 'Recipe not found!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

export const updateRecipe = async (req, res) => {
  const { id } = req.params;
  await Recipe.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, recipe) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found!' });
      }
      res.status(200).json(recipe);
    }
  );
};

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Recipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Recipe deleted');
    }
    throw new Error('Recipe not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
