var friendOptions = require("../data/friend.js");

module.exports = function(app) {
		app.get("/api/friend", function(req, res) {
			res.json(friendOptions);
		});

		app.post("/api/friend", function(req ,res) {
			var newFriend = req.body;

			var friendlistDoggo = {
				name: "",
				photo: "",
				dogDifference: 1000

			};

			var friendScores = newFriend.scores;
			var totalDifference = 0;

			for (var i = 0; i < dogs.length; i++) {
				totalDifference = 0;

				for (var w = 0; w < dogs[i].scores[w]; w++) {
					var totalDifference = Math.abs(parseInt(friendScores[w]) - parseInt(dogs[i].scores[w]));

					if (totalDifference <= friendlistDogg.dogDifference) {
						friendlistDoggo.photo = dogs[i].photo;
						friendlistDoggo.name = dogs[i].name;
						friendlistDoggo.dogDifference = totalDifference;

					}
				}
			}

			console.log(friendlistDoggo);
			console.log(totalDifference);
			console.log(friendScores);



			dogs.push(newFriend);

			res.json(friendlistDoggo);

		});
}