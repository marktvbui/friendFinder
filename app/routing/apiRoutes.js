var friendData = require('../data/friends.js');

module.exports = function(app) {

  app.get('/api/friends', function (req, res) {
    res.json(friendData);
  });

  app.post('/api/friends', function (req, res) {
    friendData.push(req.body);
    var answers = req.body;
    var differenceArray = [];
    //looping through each object in the friendsArray
    for (var j = 0; j < friendData.length; j++) {
      var difference = 0;
      // within each friend, we are getting the difference in answer scores
      for (var i = 0; i < answers.length; i++){
        difference += Math.abs( parseInt(friendData[j].answers[i]) - parseInt(answers[i]) );
      }
      // pushing the scores into the differenceArray
      differenceArray.push(difference);
    };

    var index = 0;
    var value = differenceArray[0];
    // looping through array finding the lowest score
    for (var x = 0; x < differenceArray.length; x++) {
      if (differenceArray[x] < value) {
        value = differenceArray[x];
        // assigning index to the lowest score
        index = x;
      }
    }
    // returning the friend with the lowest difference in score
    res.json(friendData[index]);
  });

}
