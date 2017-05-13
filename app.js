var video = document.querySelector("video");
var ctrl = document.querySelector(".ctrl");
var progressBar = document.querySelector(".progressBar");
var progressVal = document.querySelector(".progressVal");
var buttonPlay = document.querySelector(".button-play");
var buttonPlayImg = document.querySelector(".button-play img");
var volume = document.querySelector("#volume");
var rate = document.querySelector("#rate");
var jumps = document.querySelectorAll(".jump"); 

video.addEventListener("click", handleClick);
video.addEventListener("mouseover", handleMouseOver);
video.addEventListener("mouseout", handleMouseOut);
ctrl.addEventListener("mouseover", handleMouseOver);
ctrl.addEventListener("mouseout", handleMouseOut);
video.addEventListener("timeupdate", updateProgress);
progressBar.addEventListener("click", handleProgress);
buttonPlay.addEventListener("click", handleClick);
volume.addEventListener("click", handleAudio);
rate.addEventListener("click", handleRate);
jumps.forEach(function(item) { 
	item.addEventListener("click", handleJump);
});

function handleClick() {
	var method = video.paused ? "play" : "pause";
	var src = video.paused ? "pause.png" : "play.png";
	video[method]();
	buttonPlayImg.src = src;
}

function updateProgress() {
	var wid = progressBar.offsetWidth;
	progressVal.style.width = video.currentTime/video.duration*wid+"px";
}

function handleMouseOver() {
	ctrl.style.top = "-49px";
	ctrl.style.height = "50px"
}

function handleMouseOut() {
	ctrl.style.top = "-4px"; 
	ctrl.style.height = "5px"
}

function handleProgress(event) {
	var value = event.offsetX/this.offsetWidth;
	video.currentTime = value * video.duration;
}

function handleAudio() {
	var value = volume.value;
	video.volume = value;
}

function handleRate() {
	var value = rate.value;
	video.playbackRate = value;
}

function handleJump() {
	var value = parseInt(this.dataset.jump);
	video.currentTime += value;
}