// display the list of friends
var friendData = require ("../data/friends.js");

module.exports = function(app) {

app.get("/api/friends", function(req,res){
    return res.json(friendData);
});

app.post("/api/friends", function(req,res){
    var newFriendScores = req.body.scores;
    var matchIndex=0;
    var matchTotal =0;
    var scoreTotal=0;
    var friendMatch;

    for (var i= 0; i < friendData.length; i++){
        
        for(var j = 0; j < newFriendScores.length; j++){
             
            scoreTotal += (Math.abs(parseInt(friendData[i].scores[j])) - parseInt(newFriendScores[j]));
           
        }
        if (matchTotal>= scoreTotal) {
            matchTotal = scoreTotal;
            matchIndex = i;
        }   
    }
       friendMatch =  friendData[matchIndex];
       res.json(friendMatch);


});

};