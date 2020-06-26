const express = require('express');
const sampleData = require('../database/sampleDatas/imageServiceSample.js')


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded())

//console.log(__dirname + '/public/lib')

app.get('/:productId', (req, res) => {
  var product_id = parseInt(req.params.productId);
  var data = sampleData.find(data => data.product_id === product_id);
  var type = req.query.type;

  if (!type && product_id === data.product_id) {
    res.send(data);
  }

  if (type === 'carousel_images') {
    res.send({
      product_id: data.product_id,
      carousel_images: data.carousel_images
    })
  }

  if (type === 'carousel_videos') {
    res.send({
      product_id: data.product_id,
      carousel_videos: data.carousel_videos
    })
  }

  if (type === 'thumbnail') {
    res.send(data.thumbnail)
  }

  if (type === 'cover') {
    res.send(data.cover_image);
  }

  if (type === 'description_images') {
    res.send({
      product_id: data.product_id,
      description_images: data.description_images
    })
  }

  if (type === 'description_gifs') {
    res.send({
      product_id: data.product_id,
      description_gifs: data.description_gifs
    })
  }
})

/*
Queries
{ type: 'carousel_images' }
Params
{ productId: '123' }
*/

var port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server Live listening on port ${port}`);