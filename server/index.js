const express = require('express');
const sampleData = require('../database/sampleDatas/imageServiceSample.js')


const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded())

//console.log(__dirname + '/public/lib')

app.get('/api/:productId', (req, res) => {
  var param_id = parseInt(req.params.productId);
  var {product_id, carousel_images, carousel_videos, description_images, description_gifs, thumbnail, cover_image} = sampleData.find(data => data.product_id === param_id);
  var type = req.query.type;

  if (!type && param_id === product_id) {
    res.send({product_id, carousel_images, carousel_videos, description_images, description_gifs, thumbnail, cover_image});
  }

  if (type === 'carousel_images') {
    res.send({
      product_id,
      carousel_images
    })
  }

  if (type === 'carousel_videos') {
    res.send({
      product_id,
      carousel_videos
    })
  }

  if (type === 'thumbnail') {
    res.send(thumbnail)
  }

  if (type === 'cover') {
    res.send(cover_image);
  }

  if (type === 'description_images') {
    res.send({
      product_id,
      description_images
    })
  }

  if (type === 'description_gifs') {
    res.send({
      product_id,
      description_gifs
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
app.listen(port, () => {
  console.log(`Server Live listening on port ${port}`);
});