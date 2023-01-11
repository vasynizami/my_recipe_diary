import Bookmark from '../models/bookmark.js';

export const getBookmarks = async (req, res) => {
  const { user_id } = req.params;
  try {
    const bookmarks = await Bookmark.find(user_id);
    console.log(bookmarks);
    res.status(200).json(bookmarks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBookmark = async (req, res) => {
  const bookmark = req.body;
  const newBookmark = new Bookmark(bookmark);
  try {
    await newBookmark.save();
    res.status(201).json(newBookmark);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBookmark = async (req, res) => {
  const { id } = req.params;
  await Bookmark.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, recipe) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!bookmark) {
        return res.status(404).json({ message: 'Bookmark not found!' });
      }
      res.status(200).json(bookmark);
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
