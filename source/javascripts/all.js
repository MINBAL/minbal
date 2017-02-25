// This is where it all goes :)

var pushContainer = document.querySelector('main');
var toggleButton = document.querySelector('.hamburger');

function deployMenu() {

  if(pushContainer.classList.contains('open')) {
    pushContainer.classList.remove('open');
  }
  else if(!pushContainer.classList.contains('open')) {
    pushContainer.classList.add('open');
  }
}

toggleButton.addEventListener('click', deployMenu);
