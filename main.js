
const navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if (window.scrollY > 800) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
}

function showModal() {
    document.getElementById("pageContent").style.opacity = "0.5";
}

document.getElementById('a').style.visibility = 'hidden';
document.getElementById('b').style.visibility = 'hidden';
document.getElementById('c').style.visibility = 'hidden';
document.getElementById('d').style.visibility = 'hidden';

function a() {
    document.getElementById('a').style.visibility = 'visible';
}
function b() {
    document.getElementById('b').style.visibility = 'visible';
}
function c() {
    document.getElementById('c').style.visibility = 'visible';
}
function d() {
    document.getElementById('d').style.visibility = 'visible';
}