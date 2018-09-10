var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('notification-service running on PORT 8090');
});

router.get('/requestNotification', function(req, res, next){
  res.send('Notification Sent');
});

module.exports = router;
