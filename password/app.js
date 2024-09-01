// let inpEl = document.querySelectorAll("input")
// let numEl = document.querySelectorAll(".num")
// let symEl = document.querySelectorAll(".sym")
// let btnEl = document.querySelectorAll('.btn-1')

// let now = inpEl[0].value



// // function pasName(){ 
// // // let str = ("ABCDEFGHIJKLMNbcdObPQRSTefgaUVWXYhijZklmnrssekfnwoiern")
// // // let number = ('0123456789')

// // // let symbol = "!@#$%&*()"

// // }

// // pasName(genrater)


// function genrater(){
//   let random = '';
//   let str = ("ABCDEFGHIJKLMNbcdObPQRSTefgaUVWXYhijZklmnrssekfnwoiern")
//   let number = ('0123456789')
  
//   let symbol = "!@#$%&*()"

// let total = random + str

//     if (numEl.checked){
//       random += number
//     }
//     if (symEl.checked){
//       random += symbol
//     }

// let password = ''

//     for (let i =0;i < now.length;i++){
//       password +=  Math.floor(Math.random() * total.length)

//    }
//   inpEl[0].value = password
// }


// // let number  =('AB2CDE3FGHI1JK4lm5no6pq7rs8tu9vwxyz')

// // let str = ("ABCDEFGHIJKLMNbcdObPQRSTefgaUVWXYhijZklmnrssekfnwoiern")

// // function randomStr(){
// //   let password = ''
// //   randomNumber()

// //   for (let i = 0;i < 10;i++) {
// //             let randomStr = Math.floor(Math.random() * str.length)
// //           password +=  str[randomStr]
// //         }
// //         inpEl[0].value = password

// // }

// // randomStr()


// // function randomNumber(){
// // password = ''
// // if (num.checked){
// //   for(let i = 0;i < 10;i++){
// //     let randomNum = Math.floor(Math.random() * number.length)
// //   password += number[randomNum]
// // inpEl[0].value = password
// //   }
// //   }

// // }

// // // randomNumber()


let inpEl = document.querySelectorAll("input")

let str = ("ABCDEFGHIJKLMNbcdObPQRSTefgaUVWXYhijZklmnrssekfnwoiern")
function randompassword() {
  let password = ''; 

for(let i = 0;i < 10;i++){
      let randomStr = Math.floor(Math.random() * str.length)
    password += str[randomStr]
    inpEl[0].value = password
}

}



let num = ("AE2FGHIJ4KTe3f1g5a6UV7W2X8Yh9ijZklmnr0sskf5nwoi2en")
function randomNumber() {
  let password = ''; 

for(let i = 0;i < 10;i++){
      let randomNum = Math.floor(Math.random() * num.length)
    password += num[randomNum]
    inpEl[0].value = password
}


}







let symb = ("!dft@qwer#yuio$opasd%ghj^klz&xcv*bnm(ASSC)")
function randomSymbol() {
  let password = ''; 

for(let i = 0;i < 10;i++){
      let randomSymb = Math.floor(Math.random() * symb.length)
    password += symb[randomSymb]
    inpEl[0].value = password
}

}
// console.log(password)
