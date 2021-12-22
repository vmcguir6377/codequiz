function printHighscore() {
	// either get scores from localstorage or set to empty array
	var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

	// sort highscores by score property in descending order
	highscore.sort(function (a, b) {
		return b.score - a.score;
	});

	highscore.forEach(function (score) {
		// create li tag for each high score
		var liTag = document.createElement("li");
		liTag.textContent = score.initials + " - " + score.score;

		// display on page
		var olEl = document.getElementById("highscore");
		olEl.appendChild(liTag);
	});
}

function clearHighscore() {
	window.localStorage.removeItem("highscore");
	window.location.reload();
}

document.getElementById("clear").onclick = clearHighscore;

// run function when page loads
printHighscore();