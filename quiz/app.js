

// let divEl = document.querySelectorAll("DIV")[0]

let questions = [
    {
      question:  ` What does HTML stand for? ` ,
      option1: `  hype language `,
      option2: ` hyper text  language `,
      option3: `  hyper markup language `,
      option4: ` hyper text markup language `,
      answer: `hyper text markup language`
    },
    {
        question:  ` Choose the correct HTML element for the largest heading:?`,
        option1: `  head`,
        option2: ` heading`,
        option3: `  h1`,
        option4: ` h6`,
        answer: `h1`

      },
      // {
      //   question:  `What is the correct HTML element for inserting a line break?`,
      //   option1: ` ib`,
      //   option2: `  br`,
      //   option3: `  break`,
      //   option4: `  em`,
      //   answer: `br`

      // },
    //   {
    //     question:  `What is the correct body background color propertt?`,
    //     option1: ` body style="background-color:yellow", `,
    //     option2: `  background= yellow background`,
    //     option3: `  background= color = red `,
    //     option4: `   background-color= red`,
    //     answer: ` body style="background-color:yellow",`
    //   },
    // {      
    //   question:  `Choose the correct HTML element to define important text?`,
    //   option1: ` b `,
    //   option2: ` i`,
    //   option3: ` important  `,
    //   option4: ` strong `,
    //   answer: ` strong",`
    // },
    // {      
    //     question:  `Choose the correct HTML element to define emphasized text?`,
    //     option1: ` i `,
    //     option2: ` italic`,
    //     option3: ` em  `,
    //     option4: ` non of these `,
    //     answer: ` em`
    //   },
      // {      
      //   question:  `How can you make a numbered list?`,
      //   option1: ` ol `,
      //   option2: ` ul`,
      //   option3: ` list  `,
      //   option4: ` dl `,
      //   answer: ` ol`
      // },
      // {      
      //   question:  `What is the correct HTML for making a checkbox?`,
      //   option1: ` input type= 'checkbox' `,
      //   option2: ` checkboc`,
      //   option3: ` check`,
      //   option4: `  input type='check' `,
      //   answer: ` input type= 'checkbox'`
      // },
//       {      
//         question:  `What is the correct HTML for making a text input field?

// `,
//         option1: ` <input type= 'text'> `,
//         option2: ` textfield`,
//         option3: ` <text inputtype text>`,
//         option4: ` < input type='textfield' >`,
//         answer: ` <input type= 'text'>`
//       },

]








let index = 0;
 let score = 0;


function render(){

  score = 0;
    let divEl = document.querySelectorAll("DIV")[0]

 let options = document.getElementsByName('option')
 for(let i = 0;i < options.length;i++){
  if(options[i].checked){
    console.log(options[i].value,questions[index - 1].answer)
    if(options[i].value === questions[index - 1].answer){
     score++
    
    }

}   
 }

if(!questions[index]){
    console.log('result',score)
    // render()
    return;

}
 




 divEl.innerHTML = `

 <h3>
${questions[index].question}
 </h3>
    <label >
    <div class="box1">
      <input type="radio"  name="option" value="${questions[index].option1}">${questions[index].option1}
    </div>
</label>

<label >
    <div class="box1">
            <input type="radio"class="box1" name="option" value="${questions[index].option2}">${questions[index].option2}
    </div>  
</label>

<label >
    <div class="box1">
            <input type="radio" name="option" value="${questions[index].option3}">${questions[index].option3}
    </div>
</label> 
<label >
    <div class="box1">
            <input type="radio"class="box" name="option" value="${questions[index].option4}">${questions[index].option4}
    </div>
</label>

 `
index++
}

render()

function show(){

}

