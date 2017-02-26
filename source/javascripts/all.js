// This is where it all goes :)

var pushContainer = document.querySelector('main');
var toggleMenuButton = document.querySelector('.toggle-menu-btn');
var pagePushNav = document.querySelector('.page-push-nav');

function toggleMenu() {
  if(pushContainer.classList.contains('open')) {
    pushContainer.classList.remove('open');
  }
  else if(!pushContainer.classList.contains('open')) {
    pushContainer.classList.add('open');
  }
}

toggleMenuButton.addEventListener('click', toggleMenu);

//pagePushNav.addEventListener('click', toggleMenu);
