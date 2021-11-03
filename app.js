const button1=document.querySelector('.button1');
const desc1=document.querySelector('.desc1');
const question1=document.querySelector('.question1');

const button2=document.querySelector('.button2');
const desc2=document.querySelector('.desc2');
const question2=document.querySelector('.question2');

const button3=document.querySelector('.button3');
const desc3=document.querySelector('.desc3');
const question3=document.querySelector('.question3');

const button4=document.querySelector('.button4');
const desc4=document.querySelector('.desc4');
const question4=document.querySelector('.question4');

const button5=document.querySelector('.button5');
const desc5=document.querySelector('.desc5');
const question5=document.querySelector('.question5');


// for(let i=0;i<=5;i++){
    
// }
button1.addEventListener('click', (e) => {
    e.preventDefault();
    desc1.classList.toggle("active");
    question1.classList.toggle("active");
    button1.classList.toggle("active");
})
button2.addEventListener('click', (e) => {
    e.preventDefault();
    desc2.classList.toggle("active");
    question2.classList.toggle("active");
    button2.classList.toggle("active");
})
button3.addEventListener('click', (e) => {
    e.preventDefault();
    desc3.classList.toggle("active");
    question3.classList.toggle("active");
    button3.classList.toggle("active");
})
button4.addEventListener('click', (e) => {
    e.preventDefault();
    desc4.classList.toggle("active");
    question4.classList.toggle("active");
    button4.classList.toggle("active");
})
button5.addEventListener('click', (e) => {
    e.preventDefault();
    desc5.classList.toggle("active");
    question5.classList.toggle("active");
    button5.classList.toggle("active");
})
