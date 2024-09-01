let coun = document.querySelectorAll(".count")[0]
const allProducts = [
    {
        id: 1,
        image: "https://www.eatingwell.com/thmb/aKA6WL4j01orJ6F7v9bF4PH6B7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-cheeseburgers-9e0cf0071bcb4b8d9bc806cabfb61347.jpg",
        productName: "High-protien Air-fryer burger",
        price: '300',
        qty: 0


    },
    {
        id: 2,
        image: "https://www.eatingwell.com/thmb/aKA6WL4j01orJ6F7v9bF4PH6B7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-cheeseburgers-9e0cf0071bcb4b8d9bc806cabfb61347.jpg",
        productName: "Beef burger",
        price: '500',
        qty: 0


    },
    {
        id: 3,
        image: "https://www.eatingwell.com/thmb/aKA6WL4j01orJ6F7v9bF4PH6B7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-cheeseburgers-9e0cf0071bcb4b8d9bc806cabfb61347.jpg",
        productName: "Zinger Cheeze Burger",
        price: '300',
        qty: 0

    },
    {
      id: 4,
      image: "https://www.eatingwell.com/thmb/aKA6WL4j01orJ6F7v9bF4PH6B7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-cheeseburgers-9e0cf0071bcb4b8d9bc806cabfb61347.jpg",
      productName: "Zinger Burger",
      price: '300',
      qty: 0

  },
  {
    id: 5,
    image: "https://www.eatingwell.com/thmb/aKA6WL4j01orJ6F7v9bF4PH6B7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-cheeseburgers-9e0cf0071bcb4b8d9bc806cabfb61347.jpg",
    productName: "Chicken burger",
    price: '300',
    qty: 0

},

   
]




let showEl = document.querySelectorAll(".show-item")[0]

try{
allProducts.map(({id,image,productName,price})=>{
  
        showEl.innerHTML += `
<div id=${id} class="card " style="width: 20rem;">
  <img src="${image}" class="log" alt="...">
  <div class="card-body">
    <h5 class="card-title">${productName}</h5>
    <p class="card-text">${price}</p>
   <button onclick="add(this)">addToCart</button> 
    </div>
</div>
`

})
      
}

catch{
  console.log('error');
  
  
}
  



let card = []
function add(el){
  let id = el.parentNode.parentNode.id
  let img = el.parentNode.parentNode.childNodes[1].src
  let productName =el.parentNode.childNodes[1].innerHTML
  let price = el.parentNode.childNodes[3].innerHTML
  




  for(let i = 0;i < card.length;i++){
    if(id === card[i].id){
 const qty = JSON.parse(localStorage.getItem("CARD"))[i].qty
console.log(qty);

 return (card[i].qty++ && card[i].qty + 1)

 
    }
}


card.push({
id: id,
img: img,
 productName: productName,
  price: price,
  qty: 1
  
})
localStorage.setItem("CARD",JSON.stringify(card))
console.log(card);
}


try{
  let total = JSON.parse(localStorage.setItem("CARD"))
    coun.innerHTML = total.length
}
catch{
  console.log('error')
}

let cartEle = document.querySelectorAll(".selCard")[0]
let billEl = document.querySelectorAll(".bill")[0]
let savedCart = JSON.parse(localStorage.getItem("CARD"))

try{
savedCart.map(({id,img,productName,price,qty})=>{
 console.log(img);
 cartEle.innerHTML += `
 <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${img}" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${productName}</h5>
        <p class="card-text">${price}</p>
        <p class="card-text"><small class="text-body-secondary">${qty}</small></p>
      </div>
    </div>
  </div>
</div>
 
`
console.log(qty);

billEl.innerHTML ='totalbill' + price * qty

 })
}

catch(error){
  console.log(error);
  
}


function plus(el){
let initCount = el.parentNode.childNodes[5].value++ 
console.log(initCount);

  
}


function minus(el){
  console.log(
   el.parentNode.childNodes[5].value--
  )
}

let divEl = document.querySelectorAll(".succes")[0]

function submit(){
  console.log('hello');

  
  
}






























