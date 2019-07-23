// This is where it all goes :)
var videoPosters = document.getElementsByClassName('video-overlay');
var videoPlayer = document.getElementById('video-player');

function toggleVideoPlayer() {
	videoPlayer.setAttribute('src', this.dataset.embed);
	videoPlayer.scrollIntoView({ behavior: 'smooth' });
}

for (var i = 0; i < videoPosters.length; i++) {
  videoPosters[i].addEventListener('click', toggleVideoPlayer, false);
}