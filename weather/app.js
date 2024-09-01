// let containerEl = document.querySelectorAll(".container")[0]

// fetch ("https://api.openweathermap.org/data/2.5/weather?lat=24.8607&lon=67.0011&appid=377c0da489b85c3759409d925a24b69d&units=metric")
// .then((res)=>{
//    return res.json()
// })
// .then((res)=>{
//   console.log(res)
// // let info = res

// containerEl.innerHTML =   ` <h2>Weather</h2>

// ${res.name}
// ${res.lat}
// `
// })




// .catch((er)=>{
//     console.log(er)
// })

// console.log()




// function fetchUser1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ userName: 'haider', email: 'header@gmail.com' })
//         }, 3000)
//     });
// }

// async function getUser() {
//     let user = await fetchUser1();
//     console.log('next line', user);
// }
// getUser();

// containerEl.innerHTML =  ``










// function getData(){
//     return new Promise((resolve, reject) => {
//          fetch ("https://api.openweathermap.org/data/2.5/weather?lat=24.8607&lon=67.0011&appid=377c0da489b85c3759409d925a24b69d")
           
//     })
// }

// async function dataFetch(){
//     let data = await getData()
//     // console.log(data)
// }

// dataFetch()





// fetch ("https://api.openweathermap.org/data/2.5/weather?q={karachi}lat=24.8607&lon=67.0011&appid=377c0da489b85c3759409d925a24b69d&units=metric")
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err))


let pro = document.querySelectorAll(".pro")[0]
let temprature = document.querySelectorAll(".temprature")
let description = document.querySelectorAll(".description")[0]
let info =  document.querySelectorAll(".info-humadity")[0]
let humd =  document.querySelectorAll(".humd")[0]
let wind =  document.querySelectorAll(".wind-num")[0]



function search(){
    const apiKey = '377c0da489b85c3759409d925a24b69d'
    const city = document.querySelectorAll("#input")[0]

       fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=matric
    &appid=${apiKey}`)
    .then((res)=>{
        return res.json()
    })
    .then((response)=>{
      console.log(response)


switch (response.weather[0].main){
   case 'clear':
      pro.className = 'boxes'
   pro.src = 'images/clear.png';
   break;
   case 'cloud':
      pro.className = 'boxes'
    pro.src = 'images/cloud.png';
    break; 
    case 'rain':
          pro.className = 'boxes'
    pro.src = 'images/rain.jpg';
    break; 
    case 'smoke':
          pro.className = 'boxes'
    pro.src = 'images/smoke.png';
    break;
    case 'snow':
        pro.className = 'boxes'
        pro.src = 'images/snow.jpg';
        break;
       
}
description.innerHTML = response.weather[0].description
info.innerHTML = response.main.humidity
wind.innerHTML = parseInt(response.wind.speed)





    })
    .catch((er)=>{
        console.log(er)
    })


}
