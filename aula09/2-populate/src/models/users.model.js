const moongoose = require('mongoose');

const userCollection = 'students';

const userSchema = new moongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  gender: String,
  courses: {
    type: [
      {
        course: {
          type: moongoose.Schema.Types.ObjectId,
          ref: 'courses'
        }
      }
    ],
    default: []
  }
});

userSchema.pre('findOne', function () {
  this.populate('courses.course');
});

userSchema.pre('find', function () {
  this.populate('courses.course');
});

const userModel = moongoose.model(userCollection, userSchema);

module.exports = userModel;