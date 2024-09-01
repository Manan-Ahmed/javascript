
// const apurl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"

// // console.log(url)


// let dropDown = document.querySelectorAll("select")
// let btn = document.querySelectorAll("form button")
// let fromCrr = document.querySelectorAll(".from select")
// let toCrr = document.querySelectorAll(".from select")
// let inpEl = document.querySelectorAll("input")[0]

// // console.log(fromCrr.value,toCrr)



// for(let select of dropDown){
// for(let currcode in countryList){
//     let newOption = document.createElement("option")
//     newOption.innerText = currcode
//     newOption.value = currcode
//     select.appendChild(newOption)
//     // console.log(currcode)

        

// if(select.name === 'form' && currcode === 'USD' ){
//      newOption.selected = 'selected'
// }
// else if(select.name === 'to' && currcode === 'PKR' ){
//     newOption.selected = 'selected'
// }
// }
// select.addEventListener('change',(evt) =>{
//   updateFlag(evt.target)
// })

// }



// const exhchangeCurrency = async ()=>{
//     let amount = inpEl.value
//     if(amount === ''|| amount < 1){
//       amount = 1
//     }
//     const url =  `${apurl}/${fromCrr.value.tolowerCase()}/${toCrr.value.tolowerCase()}.${json()}`
//    console.log(fromCrr.value)
//     let response = await fetch(url)
//     let data = await response.json()
    
//   let rate = data[toCrr.value.toLowerCase()];

//   let finalAmount = amount * rate;
//   msg.innerText = `${amount} ${fromCrr.value} = ${finalAmount} ${toCrr.value}`;

// }

// const updateFlag = ((element)=>{
// let currcode = element.value
// let countryCode = countryList[currcode]
// let newsrc = src=`https://flagsapi.com/${countryCode}/flat/64.png`
// let img = element.parentElement.querySelector("img")
// console.log(img)
// img.src = newsrc
// })


// // btn.addEventListener('click',(evat)=>{
// //     evat.preventDefault()
// //     exhchangeCurrency()

// // })

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });


// window.addEventListener("load", () => {
//   exhchangeCurrency();
// });



























const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});





// fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json")
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{
//  console.log(e)
// })




// fetch('https://fakestoreapi.com/products/1')

// .then((res)=>{
//     return res.json()
// })

// .then((res)=>{
//    console.log(res)
// })
// .catch((e)=>{
//      console.log(e)
// })

