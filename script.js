 function onLoadActions() {
  for (let number = 1; number <= 76; number++) {
    let numberNode = document.createElement("div");
    numberNode.classList.add("number");
    numberNode.innerText = number;
     document.getElementById("playing-field").appendChild(numberNode);
   }
 }

function generateRandonNumber() {
  let min = 1
  let max = 76
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(randomNumber)
}
function generatedNumberDisplay(){
 let theRandomNumber = generateRandomNumber()
 let randomNumberNode = document.querySelectorAll
}

 window.onload = onLoadActions;