// display the list of friends
var friendData = require ("../data/friends.js");

module.exports = function(app) {

app.get("/api/friends", function(req,res){
    return res.json(friendData);
});

//AJAX call to receive newfriend scores
//return the new friend   
app.post("/api/friends", function(req,res){
    var newFriendScores = req.body.scores;
    var matchIndex=0;
    var matchTotal =0;
    var scoreTotal=0;
    var friendMatch;
    var addTotal;
    
    // Loop through possible friends
    for (var i= 0; i < friendData.length; i++){
        scoreTotal=0;
       
        console.log(friendData[i].name);
            for(var j = 0; j < newFriendScores.length; j++){
            // loop through the array scores 
            
            addTotal = (parseInt(friendData[i].scores[j])) - parseInt(newFriendScores[j]);
            scoreTotal += Math.abs(addTotal);    
           
            
        }
        
        
        // Move the first score total into the matchTotal 
        // This is so that the the scores can be compared
        if (i === 0){
            matchTotal=scoreTotal;
        }

        // check to see if the next friend score is the lowest/closest.
        // if yes, that means this record is a closer match.
        // save the index of current friend        
        if (matchTotal>=scoreTotal) {
            matchTotal = scoreTotal;
            matchIndex = i;
                // console.log(matchIndex + "match Index");
                // console.log ("i just MATCHED " + friendData[i]);
                // console.log(matchTotal +" this is Match total");
                // console.log(scoreTotal + " the score total");
        } 
        
        
    }
        // Send matched friend back 
       friendMatch= friendData[matchIndex];
       res.json(friendMatch);

       //add new friend to list    
       friendData.push(req.body);     
});

};