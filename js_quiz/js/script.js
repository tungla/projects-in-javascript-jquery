function submitAnswers() {
	var total = 5;
	var score = 0;
	var i = 1;
	var q = [];
	
	
	for (i = 1; i <= total; i++ ) {
		if(document.getElementById('q'+i+'a').checked == true) {
			q[i-1] = document.getElementById('q'+i+'a').value;
		}
		if(document.getElementById('q'+i+'b').checked == true) {
			q[i-1] = document.getElementById('q'+i+'b').value;
		}
		if(document.getElementById('q'+i+'c').checked == true) {
			q[i-1] = document.getElementById('q'+i+'c').value;
		}
		if(document.getElementById('q'+i+'d').checked == true) {
			q[i-1] = document.getElementById('q'+i+'d').value;
		}
	}
	
	for(i = 1; i <= total;i++){
		if(q[i-1] == null || q[i-1] == ''){
			alert("You missed question "+ i);
		}
	}
	
	//Set correct answers
	var answers = ["b","a","d","b","d"];
	//Check answers
	if (q[0] == answers[0]) {
		score++;
	}
	if (q[1] == answers[0]) {
		score++;
	}
	if (q[2] == answers[0]) {
		score++;
	}
	if (q[3] == answers[0]) {
		score++;
	}
	if (q[4] == answers[0]) {
		score++;
	}
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>' + score+'</span> out of <span>' + total+'</span></h3>';
	return false;
	
}