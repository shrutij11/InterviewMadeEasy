var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next){
  res.render('about', { title: 'InterviewMadeEasy - a platform for sharing code.' });
});
router.route('/contact')
.get( function(req, res, next){
  res.render('contact', { title: 'InterviewMadeEasy - a platform for sharing code.' });
})
.post(function(req, res, next){
  res.render('thank', { title: 'InterviewMadeEasy - a platform for sharing code.' })
})

module.exports = router;
 