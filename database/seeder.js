const Image = require('./imagesModel.js');

var categories = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'sports', 'technics', 'transport'];

var urlGenerator = (width, height, categories) => {
  var randomizer = Math.floor((Math.random() * categories.length));
  return `http://lorempixel.com/${width}/${height}/${categories[randomizer]}`
}

var imagesGenerator = (width, height, amount) => {
  var generatedImages = [];
  for (var i = 0; i < amount; i++) {
    generatedImages.push(urlGenerator(200, 400, categories));
  }
  return generatedImages;
}

var saveImages = (amount) => {
  var carouselImagesCount = Math.floor((Math.random() * 10) + 6);
  var carouselVideosCount = Math.floor((Math.random() * 3));
  var descriptionImagesCount = Math.floor((Math.random() * 5));
  var descriptionGifsCount = Math.floor((Math.random() * 5));

  for (var i = 0; i < amount; i++){
    var carousel_images = imagesGenerator(400, 400, carouselImagesCount),
    carousel_videos = imagesGenerator(400, 400, carouselVideosCount),
    description_images = imagesGenerator(400, 800, descriptionImagesCount),
    description_gifs = imagesGenerator(400, 800, descriptionGifsCount),
    thumbnail = imagesGenerator(128,128),
    cover_image = imagesGenerator(128,128);

    Image.create({
      carousel_images,
      carousel_videos,
      description_images,
      description_gifs,
      thumbnail,
      cover_image
    }, (err, document) => {
      if (err) {console.log(err)};

    })

  }
}