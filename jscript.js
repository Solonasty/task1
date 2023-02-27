'use strict'

// 2.1 Button1

let button1 = document.querySelector('.btn-warning');
let titleBlock = document.querySelector('.col--1');

button1.addEventListener('click', () => {
  if (titleBlock.style.display === 'block') {
    titleBlock.style.display = 'none';
    console.log('1')
  } else {
    titleBlock.style.display = 'block';
    console.log('2')
  }
});

// 2.2 Button2

let button2 = document.querySelector('.btn-success');
let col2 = document.querySelector('.col--2');
let col3 = document.querySelector('.col--3');

button2.addEventListener('click', () => {
  if (col2.nextElementSibling !== col3) {
    col2.after(col3);
  } else {
    col2.before(col3);
  }
});

// 2.3 Modal

let modal = document.getElementById("modal");
let closeBtn = document.getElementsByClassName("close")[0];

window.onload = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};