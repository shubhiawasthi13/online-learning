let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let loginbtn = document.querySelector('.log-btn');
let signbtn = document.querySelector('.sign-btn');
let closebtn1 = document.querySelector('.close-btn1');
let closebtn2 = document.querySelector('.close-btn2');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function showModal1(){
    document.querySelector('.login-form').classList.add('showlogin-form');
    
}
function showModal2(){
    document.querySelector('.signup-form').classList.add('showsignup-form');
    
}
function closeModal1(){
    document.querySelector('.login-form').classList.remove('showlogin-form');
   
}
function closeModal2(){
    document.querySelector('.signup-form').classList.remove('showsignup-form');
}
loginbtn.addEventListener("click",showModal1);
signbtn.addEventListener("click",showModal2);
closebtn1.addEventListener("click",closeModal1);
closebtn2.addEventListener("click",closeModal2);
