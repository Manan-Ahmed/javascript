// const slideImages = [
//     "https://burgerlab.com.pk/wp-content/uploads/2024/05/app-banner-2.jpg?c062ef&c062ef",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6q8_0SwnNkM0c0vOT_twL1yzrcvlGuToSw&s",
//     "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
//   ];
  
//   function displaySlider() {
//     let slidesContainer = document.querySelectorAll(".slides")[0];
  
//     for (let i = 0; i < slideImages.length; i++) {
//       let img =`<img src="${slideImages[i]}" alt="Slide ${i + 1}">`;
//       img.className = 'box'
//       slidesContainer.innerHTML += img;
//     }
//   }
  
//   displaySlider();
  
// const products = [
//     {
//       image:
//         "https://burgerlab.com.pk/wp-content/uploads/2022/01/doppler.png?c062ef&c062ef",
//       productName: "THE Doppler",
//       qty: 0,
//       totalPrice: "$10.00", 
//       price: '10.00'

//     },
//     {
//       image:
//         "https://burgerlab.com.pk/wp-content/uploads/2022/01/quadra.png?c062ef&c062ef",
//       productName: "Pentra RELOADED",
//       qty: 0,
//       totalPrice: "$20.00",
//       price: "20.00",
//     },
//     {
//       image:
//         "https://burgerlab.com.pk/wp-content/uploads/2022/01/all-american-4.png?c062ef&c062ef",
//       productName: "ALL PAKISTANI DOUBLE CHEESE",
//       qty: 0,
//       price: "50.00",
//       totalPrice: '$50.00'
//     },
//     {
//       image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
//       productName: "Big Bang",
//       qty: 0,
//       price: "40.00",
//       totalPrice: "$40.00",
//     },
//   ];
  








// function createProductCard() {
//     let productListContainer = document.querySelectorAll(".product-list")[0];

//   for (let i = 0; i < products.length; i++) {

//     let product = products[i];
//     let productCard = `
//         <div class="product-item">
//           <img
//             src="${product.image}"
//             alt="${product.productName} image"
//           />
//           <h3>${product.productName}</h3>
//           <p>${product.totalPrice}</p>
//           <button onclick="addToContainerArr(${i})">Add to Cart</button>
//         </div>
//     `;
//     productListContainer.innerHTML += productCard;
//   }
// }

// createProductCard();

//  let arr = []

// function save(el){
// let add = el.parentElement.childNodes[1].src
// for(let i = 0;i < products.length;i++){
//   if(add === products[i].image){
//      products[i].qty += 1
//      products[i].totalPrice = products[i].price * products[i].qty
//      arr.push(products[i])
//      console.log(arr)

// if(arr.productName === arr.productName){
//     arr.splice(0,0)
// // console.log(products[i].productName)   

// // if(arr[i].productName === arr[i].productName){
// //    console.log('ok')
// //   // arr.splice(0,1)
// // }

//   }
//   }
// }  
// }












//   let cart = [
//     {
//       image:
//         "https://burgerlab.com.pk/wp-content/uploads/2022/01/doppler.png?c062ef&c062ef",
//       productName: "THE Doppler",
//       price: "$10.00",
//       qty: 3,
//       totalPrice: this.price * this.qty,
//     },
//   ];












let orderEl = document.querySelectorAll(".order")[0]
let saveEl = document.querySelectorAll(".save")[0]
// let store = []

const slideImages = [
  "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6q8_0SwnNkM0c0vOT_twL1yzrcvlGuToSw&s",
  "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
];

// function displaySlider() {
//   let slidesContainer = document.querySelectorAll(".slides")[0];

//   for (let i = 0; i < slideImages.length; i++) {
//     let img = `<img src="${slideImages[i]}" alt="Slide ${i + 1}">`;
//     slidesContainer.innerHTML += img;
//   }
// }

// displaySlider();

const products = [
  {
    id: "502c305a-997e-4534-97b8-f6f7862f3737",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "THE Doppler",
    price: "$10.00",
  },
  {
    id: "67aadbfe-a6d9-4d8d-a436-27c369cff5ff",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "Pentra RELOADED",
    price: "$20.00",
  },
  {
    id: "54c3c17e-b3e9-469b-800a-b065d193a6d9",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "ALL PAKISTANI DOUBLE CHEESE",
    price: "$50.00",
  },
  {
    id: "e2085e01-f142-4475-8124-e24722cff1d6",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "Big Bang",
    price: "$40.00",
  },
];

function createProductCard() {
  for (let i = 0; i < products.length; i++) {
    let productListContainer = document.querySelectorAll(".product-list")[0];

    let product = products[i];
    let productCard = `
        <div class="product-item">
          <img
            src="${product.image}"
            alt="${product.productName} image"
          />
          <h3>${product.productName}</h3>
          <p>${product.price}</p>
          <button onclick="addToContainerArr(${i})">Add to Cart</button>
        </div>
    `;
    productListContainer.innerHTML += productCard;
  }
}

createProductCard()

let cart = []

function addToContainerArr(ind){
 const {id} = products[ind]
 let matchFound = false
 let targetIndex;
cart.forEach((item,index)=>{
     if(item.id === id){
      matchFound = true;
      targetIndex = index
      // console.log(targetIndex)
     }
})


  if(matchFound){

    const product = cart[targetIndex]
    product.qty = product.qty + 1
    product.totalPrice = product.qty * product.price.slice(1)
    totalBill = product.totalPrice
    
  
// for(let i = 0;i < cart.length;i++){

//   console.log(cart[i].id)
// orderEl.innerHTML =  ` 

// <div class="order-card">


// <img src="${cart[i].image}" alt="">
// <h3>${cart[i].productName}</h3>
// <p>quantity${cart[i].qty}</p>


// <p>price${cart[i].price}</p>





// </div>




//  `

// }

      
  }else{
    let cloneProduct = {...products[ind]}
    cloneProduct.qty = 1;
    cloneProduct.totalPrice = cloneProduct.qty * cloneProduct.price.slice(1)
    cart.push(cloneProduct)
  
  }


  console.log(cart)

for(let i = 0;i < cart.length;i++){


  console.log(cart[i].id)
orderEl.innerHTML =  ` 

<p class="order-card">


<h3>${cart[i].productName}</h3>
<p>quantity${cart[i].qty  }</p>


<p>price${cart[i].totalPrice}</p>





</p>`



}
}

 

  
// console.log(cart)









// let cart = {}


// function addToContainerObj(index){
//   const {id} = products[index]
//   const {totalBill} = id
//   // console.log(id)
//      if(id in cart){
//        cart[id].qty = cart[id].qty + 1
//        cart[id].totalPrice = cart[id].qty * cart[id].price.slice(1) 
//        cart[totalBill].id = totalPrice
//      } else{
//       cart[id] =  {...products[index]}
//       cart[id].qty = 1
//       cart[id].totalPrice =  cart[id].qty * cart[id].price.slice(1)
//      }
//     console.log(cart)
// }








