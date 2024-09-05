let inpEl = document.querySelectorAll("input")

let ulEl = document.querySelectorAll("ul")
let typEl = document.querySelectorAll(".typing")

let num = ('0123456789')
let symb = ('!@#$%^&*()')

function sub(){
  if(event.keyCode === 13) {
   let answer = inpEl[0].value

       ulEl[0].innerHTML +=  `<li class="left"> ${answer}  </li>` 
      
       if(answer === 'hello'|| answer === 'hy' || answer === 'oye' || answer === 'moye') {
         
      setTimeout(function(){
         ulEl[0].innerHTML += `<li class="right"> hy  </li>
      <li class="right"> how are you  </li>` } , 
      2000) 

     inpEl[0].value = ''
 }
  
else if (answer === 'how are you') {
   setTimeout(function(){
      ulEl[0].innerHTML += `<li class="right"> I am fine  </li>`} , 
   3000) 
   inpEl[0].value = ''

}

else if (answer.toLowerCase() === 'assalamualaikum'){
   setTimeout(function(){
      ulEl[0].innerHTML += `<li class="right"> walaikumsalam  </li>`} , 
   4000) 
   inpEl[0].value = ''

}
else if (answer === 'kaisai ho' || answer === 'tabyat kaisi hai' || answer === 'sb set' || answer === 'kya haal hai') {

   setTimeout(function(){ulEl[0].innerHTML += `<li class="right"> allhamdulillah mai thk hon  
 ap kaisai hain</li>` }, 4000)
inpEl[0].value = ''

}
else if (answer === 'mai bhi thk hon' || answer === 'mai thk hon' ||answer === 'allhamdulillah' 
||answer ==='fit' || answer === 'sb set '){

   setTimeout(function(){
      ulEl[0].innerHTML += `<li> mai ap ki kya help kr sakhta hon</li>`}, 4000)
      inpEl[0].value = ''

}
else if (answer === 'provide your admission infomation'|| answer === 'admission kb open hongai'||
   answer === 'admission kb khulaingai' || answer === 'admission are open' ||
    answer === 'admission open hai' || answer === 'provide your course information' || answer === 'course information'){
      setTimeout(function(){
         ulEl[0].innerHTML += `<li class="right">admission  open hai  please enter your registraition course</li>` }, 5000)
         inpEl[0].value = ''
}

else if (answer === 'kon kon sai course hotai hain' || answer === 'kon sai course karatai hain' || answer === 'course detail') {
    setTimeout(function(){
         ulEl[0].innerHTML += `<li class="right"> course available are </li>  ` }, 4000)
    setTimeout(function(){
        ulEl[0].innerHTML +=   `<li class="right"> Web and mobile App development</li>
        <li class="right"> Graphic design</li> 
         <li class="right"> video Editing </li>
        <li class="right">Python</li>
                <li class="right">AI and Chatbot</li>
          <li class="right">BlockChain</li>
          <li class="right">Data Scientist</li>`
  }, 5000)
}
else if (answer === 'mujhy course mai admission laina hai' || answer === 'mujhy admission laina hai') {
       setTimeout(function(){
         ulEl[0].innerHTML += '<li class="right">please enter your name</li>'
}, 4000)
inpEl[0].value = ''
}
else if (answer === 'bat suno' || answer === 'bt suno'){
   setTimeout(function(){
      ulEl[0].innerHTML += '<li class="right">Hn bolo</li>'
}, 4000)
inpEl[0].value = ''
}

else if (answer === 'course duration kitni hai'){
   setTimeout(function(){
      ulEl[0].innerHTML += `<li class="right">web and app 1year duration</li>
      <li class="right"> Graphic design 6 month</li> 
      <li class="right"> video Editing 6 Month</li>
     <li class="right">Python 4 Month</li>
             <li class="right">AI and Chatbot 1 year</li>
       <li class="right">BlockChain 1 years</li>
       <li class="right">Data Scientist 1 years</li>`
}, 4000)
inpEl[0].value = ''
}
// else if (answer !== num || answer !== symb) {
//        setTimeout(function(){
//          ulEl[0].innerHTML = '<li>please enter your  father name</li>'
// }, 4000)
// }
// else if (answer) {
//        setTimeout(function(){
//          ulEl[0].innerHTML = '<li>enter your education</li>'
// }, 4000)
// }
else (
   setTimeout(function(){
      ulEl[0].innerHTML += `<li class="right">mai  sumajh nhi saka?</li>`}, 3000)

)
inpEl[0].value = ''

  }

}