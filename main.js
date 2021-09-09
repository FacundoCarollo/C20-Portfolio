
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

var clic = 1;

function show(c){ 
    if(clic==1){
    document.getElementById(`${c}`).style.visibility = 'visible';
    clic = clic + 1;
    } else{
        document.getElementById(`${c}`).style.visibility = 'hidden';      
        clic = 1;
    }   
}