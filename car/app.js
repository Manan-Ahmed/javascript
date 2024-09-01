




let allCars = {
    Honda : {
    civic :{
        // orient :{   
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIYAxpqztvkJYT5oO6nl3UsN8ZBvAuzQrpw&s",
        name: 'sedan',
       model: 2024,
       price: 'D$29,950',
       gates: 4,
       vheel: 4,
       colour: ['red','white','black']
        // }
    },
    city:{
         
        // orient :{
           image: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945",
           name: '88',
           model: 2020,
           price: 'D$20000',
           gates: 4,
           vheel: 4,
           colour: ['red','white','black']
        // }
        },
    
    vezel:{
        // orient :{
            image: "https://easycars.jp/wp-content/uploads/2020/05/Vezel_HybridX_christal_black.jpg",
           name: 'vr',
           model: 2019,
           price: 'D$20000',
           gates: 4,
           vheel: 4,
           colour: ['red','white','black']
        // }
        },
        Brv:{
            // orient :{
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXB-1uRfa9ybWoUdvebML0KZJLbqvdjOvreA&s",
               name: 'vr',
               model: 2019,
               price: 'D$20000',
               gates: 4,
               vheel: 4,
               colour: ['red','white','black']
            // }
            },
            fit:{
                // orient :{
                    image: "https://cache2.pakwheels.com/system/car_generation_pictures/5781/original/honda_fit_2022_exterior.jpg?1631611019",
                   name: 'vr',
                   model: 2019,
                   price: 'D$20000',
                   gates: 4,
                   vheel: 4,
                   colour: ['red','white','black']
                // }
                },
  },
    
    suzuki :{
        Alto :{
            // orient :{
                image: "https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Solid-White-720x466.jpg" ,
                name: 'Margalla',
                model: 2021,
                price: 'D$10000',
                gates: 4,
            vheel: 4,
                colour: ['grey','white','black']
            //  }
             },
        

        Swift :{
            // orient :{
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UDUnNoDc0UyzEQybn2EvSiVoiiIkQdJETw&s",
                name: 'Margalla',
                model: 2023,
                price: 20000,
                gates: 4,
                vheel: 4,
                colour: ['grey','white','black']
            //  }
             },
             cultus :{
                // orient :{
                    image: "https://imgcdn.zigwheels.pk/large/gallery/color/13/124/suzuki-cultus-color-704737.jpg",
                    name: 'Margalla',
                    model: 2023,
                    price: 20000,
                    gates: 4,
                    vheel: 4,
                    colour: ['grey','white','black']
                //  }
                 },
                 mehran :{
                    // orient :{
                        image: "https://enews.hamariweb.com/tpl_assets/2023/08/say-goodbye-to-30-years-old-suzuki-mehran-vx-1572332357-2255-1024x512-1.jpg",
                        name: 'Margalla',
                        model: 2023,
                        price: 20000,
                        gates: 4,
                        vheel: 4,
                        colour: ['grey','white','black']
                    //  }
                     },

            },

            toyota :{
                Corolla :{
                    // orient :{
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23s6nACnUfyR0Z6uZBZRMwb03viras56jUg&s",
                        name: 'XLI',
                        model: 2023,
                     
                        price: 20000,
                        gates: 4,
                        vheel: 4,
                        colour: ['grey','white','black']
                    //  }
            } ,

            Brv :{
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23s6nACnUfyR0Z6uZBZRMwb03viras56jUg&s",
                name: 'cv',
                    model: 2020,
                 
                    price: 20000,
                    gates: 4,
                    vheel: 4,
                    colour: ['grey','white','black']
                //  }
        } ,
        fortuner :{
            // orient :{
                image: "https://motors-content-cdn.el.olx.com.pk/Fortuner_sigma_4_18_a8422a4f72.jpg",
                name: 'v8',
                model: 2019,
                
                price: 20000,
                gates: 4,
                vheel: 4,
                colour: ['grey','white','black']
            //  }
    } ,
    DALA :{
        // orient :{
            image: "https://cache1.pakwheels.com/system/car_version_specification_pictures/426/original/Toyota_Hilux_Revo_GR-S_2023_.png?1679076556",
            name: 'vv',
            model: 2019,
            price: 20000,
            gates: 4,
            vheel: 4,
            colour: ['grey','white','black']
        //  }
} , 
Aqua :{
    // orient :{
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTke9oNQ2yJc9_dOxAxGIqKJ_QU5-aIC54rIA&s",
        name: 'd',
        model: 2023,
        price: 20000,
        gates: 4,
        vheel: 4,
        colour: ['grey','white','black']
} ,
    
        }






    }



let divEl = document.querySelectorAll(".main")[0]


for(let company in allCars){
    for (let carName in allCars[company]){
        let   car =   allCars[company][carName]

   


divEl.innerHTML += `
<div class="col-sm-12 col-md-6 col-lg-4 mb-3 box-1">
 <div class="card" style="width: 23rem;">
        <img src="${car.image ||"https://cache1.pakwheels.com/system/car_version_specification_pictures/426/original/Toyota_Hilux_Revo_GR-S_2023_.png?1679076556"}", class="card-img-top logo" alt="...">
        <div class="card-body">
          <h5 class="card-title">${carName} ${car.model}</h5>
          <p class="card-text">${car.name}.</p>
                    <p class="card-text">${car.gates}.</p>
          <p class="card-text">${car.price}.</p>

          <a href="#" class="btn btn-primary">buy now</a>
        </div>
      </div>
            </div>

`
}
}




let brandEl = document.querySelectorAll(".brands")[0]
console.log(brandEl)
brandEl.innerHTML = `<option selected>brand name</option>`


let modelEl = document.querySelectorAll(".model")[0]
console.log(modelEl)
modelEl.innerHTML = `<option >car name</option>`


for (let brand in allCars){
    console.log(brand)
    brandEl.innerHTML += `<option value="${brand}">${brand}</option>`
}


function display(){
for (let key in allCars[brandEl.value]){
    
        modelEl.innerHTML += `<option value="${key}">${key}</option>`

    
}
}

let showEl = document.querySelectorAll(".show")[0]

function view(){
for (let brand in allCars){
    for(let model in allCars[brand]){
 let car = allCars[brand][model]


showEl.innerHTML = `

<div class="card mb-3 " style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4 ">
      <img src ="${car.image}" class="pro img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${modelEl.value}</h5>
        <p class="card-text">${car.model}</p>
                <p class="card-text">${car.gates}
                        <p class="card-text">${car.colour}</p>
        <p class="card-text">${car.price}</p>

 
        <p class="card-text"><small class="text-body-secondary"></small></p>
        <button class="btn btn-primary">order now</button>

      </div>
    </div>
  </div>
</div>





`
divEl.className = ' hide'


}
}
}



function clean(){
 showEl.className = 'hide' 
divEl.className = ' box'  
}