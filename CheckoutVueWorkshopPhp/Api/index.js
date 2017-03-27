var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/sales', function(req, res) {

  let config = {
    headers: {
      "MerchantId": 'B39CABDB-6CE1-4A1E-AD2A-A62E825ABD51',
      "MerchantKey": 'CZ16Gawgyw5QmNRVmtxlPecLvRzNIHOiwkdUsT7N'
    }
  };

  axios.post('https://apihomolog.cieloecommerce.cielo.com.br/1/sales', req.body, config).then((response) => {
    res.status(201);
    res.json(response.data);
  }).catch((response) => {
    res.status(500).send(response.data);
  });
});

module.exports = router;
