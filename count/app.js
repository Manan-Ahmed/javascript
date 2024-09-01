let inpEl = document.querySelectorAll(".count-value")
let h1El = document.querySelectorAll(".count-num")
let pEl = document.querySelectorAll("p")


function add(){
   let formVal =   inpEl[0].value 
    displayMsg(formVal, '+')
    }
    function minus(){
        let formVal =   inpEl[0].value 
         displayMsg(formVal, '-')
         }
     
         function clear(){
          h1El[0].innerHTML = 1
          inpEl[0].value = 0
        }
         
    

function displayMsg(formVal,operator){
   if(isNaN(formVal)) {
pEl[0].innerHTML = 'please enter your number'
  }
  else if (operator === '+') {
     h1El[0].innerHTML = Number(h1El[0].innerHTML) + Number(formVal)
     removeError()

   }
   else if (operator === '-') {
    h1El[0].innerHTML = Number(h1El[0].innerHTML) - Number(formVal)
    removeError()

  }
}

function removeError(){
  pEl[0].innerHTML = ''
 
}