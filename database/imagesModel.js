const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3001/images',  {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', () => {
  console.log('connection error');
})
db.once('open', () => {
  console.log('connected to mongodb')
})

const images = new mongoose.Schema({
  carousel_images: [String],
  carousel_videos: [String],
  description_images: [String],
  description_gifs: [String],
  thumbnail: String,
  cover_image: String
})

const Images = mongoose.model('Images', images);

module.exports = Images;