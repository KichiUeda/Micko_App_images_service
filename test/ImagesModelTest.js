const Images = require('../database/imagesModel');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sampleData = require('../database/sampleDatas/imageServiceSample')

describe('Images model should save a document', () => {

  var data = sampleData[0];
  var {product_id, carousel_images, carousel_videos, description_images, description_gifs, thumbnail, cover_image} = sampleData[0];
  var newDocument = new Images ({
    product_id, carousel_images, carousel_videos, description_images, description_gifs, thumbnail, cover_image
  })

  it('save a document in mongoDB using image model', () => {
    Images.deleteMany({}, () => {
      console.log('Deleted all documents from Images collection');

      newDocument.save((err, document) => {
        var {product_id, carousel_images, carousel_videos, description_images, description_gifs, thumbnail, cover_image} = document;

        var documentObj = {product_id, carousel_images, carousel_videos, description_images, description_gifs, thumbnail, cover_image}
        console.log(documentObj);
        expect(data).to.deep.equal(documentObj)
      })
    })
  })

})