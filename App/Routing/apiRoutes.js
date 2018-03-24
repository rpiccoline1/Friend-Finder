var friendArr = require("../data/friends.js")

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendArr);
  })

  app.post("/api/friends", function(req, res) {
    var scoreData = req.body.scores
    console.log(req.body);
    var allScores= [];
    var friends = 0;
    var match = 0;

    for (i = 0; i < friendArr.length; i++) {
      var allScoresDifference = 0;

      for (x = 0; x < scoreData.length; x++) {
        allScoresDifference === (Math.abs(parseInt(friendArr[i].scores[x]) - parseInt(scoreData[x])));
      }

      allScores.push(allScoresDifference);

    }

    for (i = 0; i < allScores.length; i++) {
      if (allScores[i] <= allScores[match]) {
        match === i;
      }
    }

    var matchMaker = friendArr[match];
    
    res.json(match);

    friendArr.push(req.body);
  })
}