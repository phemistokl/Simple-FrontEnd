(function(window) {
	var canvas = document.getElementById("canvas_int");
	var ctx = canvas.getContext("2d");
	var al = 0;
	var start = 2.6;
	var cw = ctx.canvas.width;
	var ch = ctx.canvas.height;
	var diff;
	function progressSim() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
		ctx.clearRect(0, 0, cw, ch);
		ctx.lineWidth = 25;
		ctx.strokeStyle = "#5d7fa9";
		ctx.beginPath();
		ctx.arc(cw / 2, ch / 2, 225, start, diff / 10 + start, false);
		ctx.stroke();

		if (al >= 9) {
			clearTimeout(sim);
			// Сюда добавь то, что должно быть дальше!
			sim = setInterval(progressSim2, 50);
		}
		al++;
	}

	function progressSim2() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
		ctx.lineWidth = 25;
		ctx.strokeStyle = "#9bcaed";
		ctx.beginPath();
		ctx.arc(cw / 2, ch / 2, 225, 3.1, diff / 10 + start, false);
		ctx.stroke();

		if (al >= 67) {
			clearTimeout(sim);
			// Сюда добавь то, что должно быть дальше!
			sim = setInterval(progressSim3, 50);
		}
		al++;
	}

	function progressSim3() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
		ctx.lineWidth = 25;
		ctx.strokeStyle = "#459ac6";
		ctx.beginPath();
		ctx.arc(cw / 2, ch / 2, 225, 6.8, diff / 10 + start, false);
		ctx.stroke();

		if (al >= 75) {
			clearTimeout(sim);
			// Сюда добавь то, что должно быть дальше!
			sim = setInterval(progressSim4, 50);
		}
		al++;
	}

	function progressSim4() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
		ctx.lineWidth = 25;
		ctx.strokeStyle = "#7e9eae";
		ctx.beginPath();
		ctx.arc(cw / 2, ch / 2, 225, 7.3, diff / 10 + start, false);
		ctx.stroke();

		if (al >= 76) {
			clearTimeout(sim);
			// Сюда добавь то, что должно быть дальше!
			sim = setInterval(progressSim5, 50);
		}
		al++;
	}

	function progressSim5() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
		ctx.lineWidth = 25;
		ctx.strokeStyle = "#459ac6";
		ctx.beginPath();
		ctx.arc(cw / 2, ch / 2, 225, 7.36, diff / 10 + start, false);
		ctx.stroke();

		if (al >= 84) {
			clearTimeout(sim);
			// Сюда добавь то, что должно быть дальше!
			sim = setInterval(progressSim6, 50);
		}
		al++;
	}

	function progressSim6() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
		ctx.lineWidth = 25;
		ctx.strokeStyle = "#3080a9";
		ctx.beginPath();
		ctx.arc(cw / 2, ch / 2, 225, 89.5, diff / 10 + start, false);
		ctx.stroke();

		if (al >= 92) {
			clearTimeout(sim);
			// Сюда добавь то, что должно быть дальше!
			sim = setInterval(progressSim7, 50);
			
		}
		al++;
	}

	function progressSim7() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
		ctx.lineWidth = 25;
		ctx.strokeStyle = "#ffffff";
		ctx.beginPath();
		ctx.arc(cw / 2, ch / 2, 255, 90.1, diff / 10 + start, false);
		ctx.stroke();

		if (al >= 108) {
			clearTimeout(sim);
			// Сюда добавь то, что должно быть дальше!
			sim = setInterval(progressSim8, 50);
		}
		al++;
	}

	function progressSim8() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
		ctx.lineWidth = 25;
		ctx.strokeStyle = "#0267af";
		ctx.beginPath();
		ctx.arc(cw / 2, ch / 2, 255, 109.9, diff / 10 + start, false);
		ctx.stroke();

		if (al >= 126) {
			clearTimeout(sim);
			// Сюда добавь то, что должно быть дальше!
			sim = setInterval(progressSim9, 50);
		}
		al++;
	}

	function progressSim9() {
		diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
		ctx.lineWidth = 25;
		ctx.strokeStyle = "#1a4791";
		ctx.beginPath();
		ctx.arc(cw / 2, ch / 2, 255, 111, diff / 10 + start, false);
		ctx.stroke();

		if (al >= 134) {
			clearTimeout(sim);
			// Сюда добавь то, что должно быть дальше!
			//sim = setInterval(progressSim4, 50);
		}
		al++;
	}

	var sim = setInterval(progressSim, 50);
})(this);