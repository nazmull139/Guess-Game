
const input = document.querySelector("input"),
     guess =document.querySelector(".guess"),
     checkButton = document.querySelector("button"),
     remainChance = document.querySelector(".chance");

input.focus();

let randomNum  = Math.floor(Math.random()*100);

chance = 10 ;

checkButton.addEventListener("click", () => {

chance--;
let inputValue = input.value;
//
if(inputValue == randomNum){

[guess.textContent , input.disabled] =["congratulatons",true];
[checkButton.textContent , guess.style.color]= ["Replay" , "#333"];

setTimeout(function reload(){

  window.location.reload();
},5000);

} else if (inputValue > randomNum && inputValue < 100 ) {

  [guess.textContent , remainChance.textContent] = ["your guess is to high", chance];
  guess.style.color = "#333";

} else if (inputValue < randomNum && inputValue > 0 ) {

    [guess.textContent , remainChance.textContent] = ["your guess is to low", chance];
    guess.style.color = "#333";
  
  } else {

    [guess.textContent , remainChance.textContent] = ["your number is invalid", chance];
    guess.style.color = "#DE0611";
  
  }
  if (chance == 0){

  [checkButton.textContent , input.disabled , inputValue] = ["Restart", true ,""];
  [guess.textContent , guess.style.color] =  ["You Lost The Game", "#DE0611"];

  }

  if (chance < 0){
   window.location.reload();
  }
});