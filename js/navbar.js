window.addEventListener('load', () => {
  let moreTravel = document
    .getElementById('moreTravel')
    .addEventListener('click', showSubMenu);

  let sigbInDiv = document
    .querySelector('.signinDiv')
    .addEventListener('click', showSignIn);
});

var submenuCounter = 0;

var showSubMenu = () => {
  let submenu = document.querySelector('.submenu');
  if (submenuCounter % 2 == 0) {
    submenu.style.display = 'block';
    submenuCounter++;
  } else {
    submenu.style.display = 'none';
    submenuCounter++;
  }
};

var signInCounter = 0;

var showSignIn = () => {
  let signIn = document.querySelector('.signin');
  if (signInCounter % 2 == 0) {
    signIn.style.display = 'block';
    signInCounter++;
  } else {
    signIn.style.display = 'none';
    signInCounter++;
  }
};

var win= window.location.href
var url =new URL(win)

var params = new URLSearchParams(url.search)

var search=params.get('name')
console.log(search);
