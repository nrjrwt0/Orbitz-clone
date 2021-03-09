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


function facebook(){
    window.open("https://www.facebook.com/v2.9/dialog/oauth?display=popup&client_id=444673758939659&locale=en_US&response_type=code&redirect_uri=https://www.orbitz.com/user/connect/facebook&scope=email&state=711160c7-ccff-4785-85f3-ae5e4bbfd5e7",'example', 'width=500,height=500') 
}
face.onclick=facebook

// function aple(){
//     window.open("https://appleid.apple.com/auth/authorize?response_type=code&client_id=com.orbitz.iphoneprod.release&response_mode=form_post&scope=name%20email&state=PfzW0K7Xi1DOEFXCwCePZu6WNGdNikzcGllMaGOPYlU&nonce=Fb-RIxY-rU6Xev512hAzR8m8zsHrUxcEIdqCuDXkSSU&redirect_uri=https://www.orbitz.com/api/v1/oauth/user/profile/callback/apple-web&locale=en_US",'example', 'width=500,height=500')
// }
// apple.onclick = aple