// This is where it all goes :)

var pushContainer = document.querySelector('main');
var toggleButton = document.querySelector('.hamburger');
var pagePushNav = document.querySelector('.page-push-nav');

function toggleMenu() {

  if(pushContainer.classList.contains('open')) {
    pushContainer.classList.remove('open');
  }
  else if(!pushContainer.classList.contains('open')) {
    pushContainer.classList.add('open');
  }
}

toggleButton.addEventListener('click', toggleMenu);
pagePushNav.addEventListener('click', toggleMenu);