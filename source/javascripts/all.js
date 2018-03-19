// This is where it all goes :)
var pushContainer = document.querySelector('main');
var toggleMenuButton = document.querySelector('.toggle-menu-btn');
var pagePushNav = document.querySelector('.page-push-nav');
var videoPosters = document.getElementsByClassName('video-poster');
var videoPlayer = document.getElementById('video-player');

function toggleMenu() {
  if(pushContainer.classList.contains('open')) {
    pushContainer.classList.remove('open');
  }
  else if(!pushContainer.classList.contains('open')) {
    pushContainer.classList.add('open');
  }
}

function toggleVideoPlayer() {
	videoPlayer.setAttribute('src', this.dataset.embed);
	videoPlayer.scrollIntoView({ behavior: 'smooth' });
}

for (var i = 0; i < videoPosters.length; i++) {
  videoPosters[i].addEventListener('click', toggleVideoPlayer, false);
}

toggleMenuButton.addEventListener('click', toggleMenu);

pagePushNav.addEventListener('click', toggleMenu);
