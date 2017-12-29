var friendOptions = require("../data/friend.js");

module.exports = function(app) {
		app.get("/api/friends", function(req, res) {
			res.json(friendOptions);
		});

		app.post("/api/friends", function(req ,res) {
			var newFriend = req.body;

			function sum(array) {
					var result = 0;
					for (var i = 0; i < array.length; i++) {
							result += parseInt(array[i]);
					};
					return result;
			};

			var NFtotal = sum(newFriend.scores);
			var friendDiff = [];

			for (var i = 0; i < friendOptions.length; i++) {
					var totalDifference = Math.abs(NFtotal - sum(friendOptions[i].scores));
					friendDiff.push(totalDifference);
			}

			function indexofSmallest(array) {
				var lowestNum = 0;
				for (var i = 1; i < array.length; i++) {
						if (array[i] < array[lowestNum]) lowestNum = i;
				}
				return lowestNum;
			}

			var match = indexofSmallest(friendDiff);

			console.log(match);
			console.log(NFtotal);
			console.log(friendDiff);
			friendOptions.push(newFriend);
		});
}