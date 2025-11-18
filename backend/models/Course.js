const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, default: 0 },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lessons: [
    {
      title: String,
      content: String,
      videoUrl: String
    }
  ]
}, { timestamps: true });
module.exports = mongoose.model('Course', CourseSchema);
