const Images = require('../database/imagesModel');
const mongoose = require('mongoose');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Mongoose model set up correctly', () => {
  it('Images should have an instance of Mongoose Schema', () => {
    expect(Images.images).to.be.instanceof(mongoose.Schema);
  });
  console.log(mongoose.model);
  it('Images should have a model', () => {
    expect(Images.Images).to.be.instanceof(Function);
  });
});
