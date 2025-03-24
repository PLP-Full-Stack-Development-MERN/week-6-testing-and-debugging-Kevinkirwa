const Bug = require('../models/Bug');

// Create new bug
exports.createBug = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required.' });
    }
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (error) {
    next(error);
  }
};

// Get all bugs
exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find({});
    res.status(200).json(bugs);
  } catch (error) {
    next(error);
  }
};

// Update bug by id
exports.updateBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findByIdAndUpdate(id, req.body, { new: true });
    if (!bug) {
      return res.status(404).json({ message: 'Bug not found.' });
    }
    res.status(200).json(bug);
  } catch (error) {
    next(error);
  }
};

// Delete bug by id
exports.deleteBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findByIdAndDelete(id);
    if (!bug) {
      return res.status(404).json({ message: 'Bug not found.' });
    }
    res.status(200).json({ message: 'Bug deleted successfully.' });
  } catch (error) {
    next(error);
  }
};
