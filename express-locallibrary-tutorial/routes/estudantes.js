
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/exercicios', function(req, res, next) {
  res.send('Rota de exercicios');
});

/* GET home page. */
router.get('/provas', function(req, res, next) {
    res.send('Rota de provas');
  });
+
/* GET home page. */
router.get('/notas', function(req, res, next) {
  res.send('Rota de notas');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Rota de estudantes');
  });


module.exports = router;
