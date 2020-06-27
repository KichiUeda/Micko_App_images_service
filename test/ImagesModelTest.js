const Images = require('../database/imagesModel');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sampleData = require('../database/sampleDatas/imageServiceSample')

describe('Images model should save a document', () => {

  var data = sampleData[0];

  it('save a document in mongoDB using image model', () => {
    expect(data).to.deep.equal(data)
  })

})