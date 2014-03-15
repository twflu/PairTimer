/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'PairTimer' });
};

exports.contents = function(req, res){
  res.render('contents/' +  req.params.name);
};


