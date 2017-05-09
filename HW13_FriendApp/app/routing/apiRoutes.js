
var users = require("../data/friends.js");


module.exports = function (app) {
	app.get('/api/users', function (req, res) {
    return res.json(users);
  });

  app.get('/api/users/:name', function(req, res) {
        var chosen = req.params.name;
        console.log(chosen);
 //everything above this is correct
        for (var i = 0; i < users.length; i++) {
            if(chosen === users[i].name) {
                return res.json(users[i]);
            }
        }
 
        return res.send("No users found");
    });


app.post('/api/new', function(req, res) {
        var newcharacter = req.body;
        newcharacter.name = newcharacter.name.replace(/\s+/g, "").toLowerCase();
 
        console.log(newcharacter);
        users.push(newcharacter);
 
        res.json(newcharacter);
});

}