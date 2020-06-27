require('dotenv').config();
const Images = require('./imagesModel.js');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET
});

var randomVideoPackage = (quantity) => {
  var videoPackage = [];
  var max_results = 30
  return new Promise ((resolve,reject) => {
    cloudinary.search
    .expression('folder=videos')
    .max_results(max_results)
    .execute().then(results => {
      var videosArray = results.resources;
      for (var i = 0; i < quantity; i++) {
        var randomPicker = Math.floor(Math.random() * max_results);
        //console.log(videosArray[randomPicker].url);
        videoPackage.push(videosArray[randomPicker].url);
      }
      //console.log(videoPackage);

      resolve(videoPackage);
    })
    .catch(err => {
      reject(err);
    })
  })
}

var randomCoverImages = (quantity) => {
  var coverImages = [];
  var max_results = 60

  return new Promise ((resolve,reject) => {
    cloudinary.search
    .expression('folder=cover_images')
    .max_results(max_results)
    .execute().then(results => {
      var resultsArray = results.resources;
      for (var i = 0; i < quantity; i++) {
        var randomPicker = Math.floor(Math.random() * max_results);
        //console.log(videosArray[randomPicker].url);
        coverImages.push(resultsArray[randomPicker].url);
      }
      //console.log(coverImages);
      resolve(coverImages[0])
    })
    .catch(err => {
      console.log(err);
      reject(err);
    })
  })
}

var randomDescriptionImages = (quantity) => {
  var descriptionImages = [];
  var max_results = 60

  return new Promise((resolve,reject) => {
    cloudinary.search
    .expression('folder=description_images')
    .max_results(max_results)
    .execute().then(results => {
      var resultsArray = results.resources;
      for (var i = 0; i < quantity; i++) {
        var randomPicker = Math.floor(Math.random() * max_results);
        //console.log(videosArray[randomPicker].url);
        descriptionImages.push(resultsArray[randomPicker].url);
      }
      //console.log(descriptionImages);
      resolve(descriptionImages);
    })
    .catch(err => {
      console.log(err);
      reject(err)
    })
  })
}

var randomCarouselImages = (quantity) => {
  var carouselImages = [];
  var max_results = 60

  return new Promise((resolve,reject) => {
    cloudinary.search
    .expression('folder=images_carousel')
    .max_results(max_results)
    .execute().then(results => {
      var resultsArray = results.resources;
      for (var i = 0; i < quantity; i++) {
        var randomPicker = Math.floor(Math.random() * max_results);
        //console.log(videosArray[randomPicker].url);
        carouselImages.push(resultsArray[randomPicker].url);
      }
      //console.log(carouselImages);
      resolve(carouselImages);
    })
    .catch(err => {
      console.log(err);
      reject(carouselImages);
    })
  })
}

for (var i = 0; i < 5; i++) {
  //created 4 random number variables to generate random quantity for each 'randomFunc'
  var randomCarousel = Math.floor(Math.random() * 10);
  var randomVideo = Math.floor(Math.random() * 4);
  var randomDescription = Math.floor(Math.random() * 10);
  var id = 0;

  Promise.all([randomCarouselImages(randomCarousel),randomVideoPackage(randomVideo), randomDescriptionImages(randomDescription), randomCoverImages(1)])
  .then((packages) => {
    console.log(packages);
    var imageDocument = new Images ({
      product_id: id,
      carousel_images: packages[0],
      carousel_videos: packages[1],
      description_images: packages[2],
      description_gifs: packages[1], //still need to figure out using a gif provider to upload gifs to cloud
      thumbnail: packages[3], //cloud provides a way to resize cover_images, will implement this later
      cover_image: packages[3]
    })
    id++;
    imageDocument.save((err, document) => {
      if (err) {console.log(err)}
      console.log("Saved document")
    })
  })
  .catch(err => console.log(err))
}