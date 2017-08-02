var friendData = require('../data/friends.js');

module.exports = function(app) {

  var user = [];

  app.get('/api/friends', function (req, res) {
    res.json(friendData);
    friendData.forEach(function(data) {
      var name = data.name
      var answer = data.answers
      user.push(name, answer);
      console.log(user);
    })
  });
  app.post('/api/friends', function (req, res) {
    // var answers = req.body['answers[]'];
    // var name = req.body.name;
    // var photo = req.body.photo;
    console.log(req.body);
    friendData.push(req.body);
    res.json(friendData);

  });

}