let button = document.getElementById('button');

button.addEventListener('click', function(){
    document.body.style.backgroundImage = "url('background/bg2.jpg')";
});


const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});