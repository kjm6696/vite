import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const activeBut = document.querySelector('.topLeftbtn');
activeBut.addEventListener("keydown", function(e) {
  activeBut.focus();
  activeBut.style.backgroundColor = "white";
  setTimeout(() => {
  activeBut.style.backgroundColor = "";
  }, 500);
});

document.querySelector('.topLeftbtn').addEventListener('mouseenter', event =>{
  document.querySelector('.topLeftbtn').style.backgroundColor = "white";
  setTimeout(() => {
    document.querySelector('.topLeftbtn').style.backgroundColor = "";
  }, 500);
});

document.querySelector('.topLeftbtn').addEventListener('click', function(e){
  const card = document.querySelector('.page');
  const clone = card.cloneNode(true);
  const child = document.body.appendChild(clone)
  console.log(card);
  document.querySelector('.threBut').addEventListener('click', function(e){
    document.body.removeChild(child);
  });
});

document.querySelector('.oneBut').addEventListener('click', function(e){
  const page = document.querySelector('.page');
  if (page.style.backgroundColor == "orange") {
    page.style.backgroundColor = "red";
  } else {
    page.style.backgroundColor = "orange";
  }
});

document.querySelector('.twoBut').addEventListener('click', function(e){
  const head = document.querySelector('.header');
  if(head.innerHTML == "<h1>Heading for the title</h1>") {
    head.innerHTML = "<h1>Something else</h1>";
  } else {
    head.innerHTML = "<h1>Heading for the title</h1>"
  }
  
});

document.querySelector('.btn').addEventListener('click', function(e){
  const para = document.querySelector('.paragraph');
  if (para.innerHTML == ""){
    para.innerHTML = "<h3>Paragraph for description of the image</h3>";
  } else {
    para.innerHTML = ""
  }
});
