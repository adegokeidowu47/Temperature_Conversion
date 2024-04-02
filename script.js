
const inputF = document.querySelector("#Fareheit");
const inputC = document.querySelector("#Censius");
const answer = document.querySelector(".answer");


let results;
let value;
  
  

function getCelsius() {
  
  value = parseInt(inputF.value);

inputF.addEventListener("input", (e) => {
  e.preventDefault();
  
  results =  ((e.target.value -32) * 5/9 ).toFixed(2);
  inputC.value = results;
  
  if(inputF.value === ""){
    inputC.value = '';
    answer.innerHTML = `Input a value in Fareheit box`;
    answer.style.color = '#fd5573';
    return;
  } else {
  answer.innerHTML = `The temperature is ${results}\xB0C`;
  answer.style.color = 'lightgreen';
  }
});
}

function getFahrenheit() {
  value = parseInt(inputC.value);
  
  inputC.addEventListener("input", (e) => {
  e.preventDefault();
  
  
  results =  ( (e.target.value * (9/5) ) + 32 ).toFixed(2);
  
  inputF.value = results;
  
    if(inputC.value === ""){
    inputF.value = '';
    answer.innerHTML = `Input a value in Censius box`;
    answer.style.color = '#fd5573';
    return;
  } else {
  answer.innerHTML = `The temperature is ${results}F`;
  answer.style.color = 'lightgreen';
  }
});
}



getCelsius(value);
getFahrenheit(value);


  