const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const auth = require('../middleware/auth');

// create course
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const course = new Course({ title, description, price, instructor: req.user.id });
    await course.save();
    res.json(course);
  } catch (err) { console.error(err.message); res.status(500).send('Server error'); }
});

// list courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor','name');
    res.json(courses);
  } catch (err) { console.error(err.message); res.status(500).send('Server error'); }
});

// get single course
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor','name');
    if (!course) return res.status(404).json({ msg: 'Course not found' });
    res.json(course);
  } catch (err) { console.error(err.message); res.status(500).send('Server error'); }
});

module.exports = router;
