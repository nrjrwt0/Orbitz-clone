const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

var apple= document.getElementById('app')
var face = document.getElementById('face')

function show(){
    var h1= document.getElementById('show1')
   h1.style.textDecoration="underline"
}
apple.onmouseover=show



function show1(){
    var h1= document.getElementById('show1')
   h1.style.textDecoration="none"
}
apple.onmouseleave=show1

function faceshow(){
    var h1= document.getElementById('show2')
   h1.style.textDecoration="underline"
}
face.onmouseover = faceshow

function faceshow1(){
    var h1= document.getElementById('show2')
   h1.style.textDecoration="none"
}
face.onmouseleave=faceshow1