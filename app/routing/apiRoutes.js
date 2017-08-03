var friendData = require('../data/friends.js');

module.exports = function(app) {

  // var user = [];

  app.get('/api/friends', function (req, res) {
    res.json(friendData);
    // friendData.forEach(function(data) {
    //   var name = data.name
    //   var answer = data.answers
    //   user.push(name, answer);
    //   console.log(user);
    //   return user;
    // })
  });

  app.post('/api/friends', function (req, res) {
    friendData.push(req.body);
    // console.log(friendData);
    // console.log(req.body);
    var answers = req.body;
    var differenceArray = [];
    for (var j = 0; j < friendData.length; j++) {
      var difference = 0;
      for (var i = 0; i < answers.length; i++){
        difference += Math.abs( parseInt(friendData[j].answers[i]) - parseInt(answers[i]) );
      }
      differenceArray.push(difference);
    };

    var index = 0;
    var value = differenceArray[0];
    for (var x = 0; x < differenceArray.length; x++) {
      if (differenceArray[x] < value) {
        value = differenceArray[x];
        index = x;
      }
    }
    res.json(friendData[index]);
  });

}
