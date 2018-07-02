var express = require('express');
var router = express.Router();
const db = require('../model/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(db.findAll());
});

/* GEt by id home page. */
router.get('/:id', function(req, res, next) {
  res.send(db.findGradeById(req.params.id));
});


/* POST home page. */
router.post('/', function(req, res, next) {
  req.assert('id', 'Id is required').notEmpty()
  req.assert('id', 'Id should be an integer value').isInt();
  req.assert('id', 'ID should be greater than 0').custom((value) => value > 0);
  req.assert('name', 'Name is required').notEmpty();
  req.assert('course', 'Course is required').notEmpty();
  req.assert('grade', 'Grade should be numeric').isNumeric();
  req.assert('grade', 'Grade should be between 0 and 100').custom((value) => (value <= 100 && value >= 0));

  var errors = req.validationErrors();

  if(errors) res.send({"error" : errors});
  else res.send(db.insertGrade(req.body));
});

/* Delete home page. */
router.delete('/:id', function(req, res, next) {
  res.send(db.removeGrade(req.params.id));
});


/* Update home page. */
router.put('/', function(req, res, next) {
  req.assert('id', 'Id is required').notEmpty()
  req.assert('id', 'Id should be an integer value').isInt();
  req.assert('id', 'ID should be greater than 0').custom((value) => value > 0);
  req.assert('name', 'Name is required').notEmpty();
  req.assert('course', 'Course is required').notEmpty();
  req.assert('grade', 'Grade should be numeric').isNumeric();
  req.assert('grade', 'Grade should be between 0 and 100').custom((value) => (value <= 100 && value >= 0));

  var errors = req.validationErrors();

  if(errors) res.send({"error" : errors});
  else res.send(db.updateGrade(req.body));
});

module.exports = router;
