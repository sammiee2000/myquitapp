var express = require('express');
var router = express.Router();
var Request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('activity-service running on PORT 8091');
});

router.get('/requestNotification', function(req, res, next) {
Request.get("http://localhost:8090/requestNotification", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log(response.body);
});
});
module.exports = router;
