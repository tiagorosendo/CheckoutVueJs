var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/sales', function(req, res) {

  let config = {
    headers: {
      "MerchantId": 'A0BE879C-D2C1-486B-BA0A-04B6D4D7028E',
      "MerchantKey": 'LJGZZMVQUZHCMNSVYDEEHMDDJXEXOFNSYPTJUZRS'
    }
  };

  axios.post('https://apisandbox.cieloecommerce.cielo.com.br/1/sales', req.body, config).then((response) => {
    res.status(201);
    res.json(response.data);
  }).catch((response) => {
    console.log(response);
    res.status(500).send(response.data);
  });
});

module.exports = router;
