/*
stack
heap

Mutable & Immutable

Primitive Types are immutable
number, boolean, string, null, undefined, bigint, symbol

Non Primitive Types are mutable
array, objects, functions
*/



// let student1 = 'haider'

// let student2 = student1// haider
// student1 = 'ali'

// console.log(student2,student1)


// let lunch = 'biryani'

// let dinner = lunch;//biryani
// lunch = 'zinger'
// console.log(dinner,lunch)






// let student = 'haider'

// let student2 = student


// student = 'ali'
// console.log(student2,student)


// let lunch = 'biryani'

// let dinner = lunch

// lunch = 'zinger'
// console.log(dinner,lunch)




// let user1 = {
//     name: 'haider',
//     rollNumber: 2456,
// }
// console.log(user1)//haider

// let user2 = user1

// user2.name = 'ali'// ali
// console.log(user2)



// let user1 = {
//    name: 'haider',
//    rollNum: 2341,
// }

// let user2 = user1

// console.log(user2)

// user2.name = 'ali'

// console.log(user2,user1)



// let friuts = ['apple','banana','orange']

// let favFriuts = friuts.slice(0)
// favFriuts.push('watermelon')
// console.log(friuts,favFriuts)

// let friuts = ['apple','banana','orange']

// let favFriuts = friuts.slice(0)
// favFriuts.push('watermelon')
// console.log(favFriuts,friuts)





// let user1 = {
//     name: 'haider',
//     rollNum: 2456,
// }

// let user2 = {
//     name: 'haider',
//     rollNum: 2456,
//     id: 'fox'
// }

// console.log(user1)



//  Object.assign(user2,user1)

// let user2 = Object.assign({},user1)
// user2.name = 'abdullah'
// user2.rollNum = "0839"
// console.log(user2,user1)










// let user1 = {
//     name: 'haider',
//     rollNum: 2456,
// }

// let user2 = {
//     name: 'haider',
//     rollNum: 2456,
//     id: 'fox'
// }

// console.log(user1)

// let user= Object.assign({},user2)

// console.log(user)




// let uber = 'car'

// let kareem = uber

// console.log(kareem)
// uber = 'rickshaw'
// console.log(kareem)



// let uber = 'car'

// let kareem = uber

// console.log(kareem)

// uber = 'rickshaw'

// console.log(kareem,uber)




// let num = [1,2,3]

// let num2 = num.slice(0)
// num2.push(4)
// console.log(num2,num)


// let user = {
//     name: 'haider',
//     rollNum: 1234,
// }
// // console.log(user)

// let user2 = Object.assign({},user)

// user2.name = 'akram'

// console.log(user,user2)




// let arr = ['apple','banana','otrange']

// let arr2 = [...arr]

// console.log(arr)
// arr2.push('watermelon')
// console.log(arr,arr2)




// let user = {
//     name: 'aslam',
//     rollNum: 2345,
// }
// let user2 = {...user}

// user2.name = 'haider'

// console.log(user,user2)



// let treat = new Promise(function(resolve,reject){
//     let isNotesAvail = confirm("Have you arranged English Notes?");
//     if(isNotesAvail){
//      resolve()
//     }
//     else{
//         reject()
//     }

// }
// )

// treat
//     .then(function(){
//         console.log(`Thanks bro  is due on me`)
//     }) 
//     .catch(function () {
//         console.log(`Tm se ye umeed ni thi.`);
//     })


// let divEl = document.querySelectorAll("DIV")[0]

// let user = {
//     userName: 'Haider Ali Shah',
//     rollNumber: 3456,
//     isTeacher: true,
//     subjects: ['javascript'],
//     fatherName: 'Muhammad Shah Alam'
// }

// const {userName: studentName,
//     rollNumber,
//     fatherName,
// ...remainingProps} = user
//  console.log(`welcome${studentName},son of${fatherName},your roll number is${rollNumber}
//  `)

// function printStudent(student){
//     let userName = 'Abdullah'
// const {userName: studentName,
//     rollNumber,
//     fatherName,
// ...remainingProps} = student

// console.log(remainingProps)

//     divEl.innerHTML = `
//     welcome${studentName},son of${fatherName},your roll number is${rollNumber}
//    `
//    console.log(user)
// }

// printStudent(user)


// let car = {
//     carName: 'mehran',
//     varient: 'vxr',
//     model: 2005,
//     features: {
//         isAirConditioned: true,
//         fuelAverage: 'best',
//         easyDhakaStart: true,
//     }
// }

// const {
//     carName,
//     varient,
//     features: {fuelAverage,easyDhakaStart} } = car

    
//     console.log(carName,varient,fuelAverage,easyDhakaStart)





// let friuts = ['apple','banana',['orange']]

// const[friuts1,,friuts2] = friuts

// console.log(friuts1,friuts2)







/*

arrow function

*/

// function greet(){
//     console.log('hello')
// }

// greet()
// () <= {
//     console.log('hello'),
// }

// const greet = () => {
//      console.log('hello world')
// }

// greet()



// const greet = (userName,rollNumber) => {
//      console.log(`welcome ${userName},you roolnum is ${rollNumber}`)
// }


// greet('haider',8923)





// const makeMessage = (userName,rollnum) => `welcome ${userName} you rollnum is ${rollnum}`;


// let greet = makeMessage('ali',2643)
// console.log(greet)


// const makeMessage = userName => `welcome ${userName}`

// let greet = makeMessage('haider')

// console.log(greet)


// setTimeout(() =>{
//     console.log('hello world');
// },500);





// */
// arrow function

// for each

// map 

// filter

 


// let obje = {
//     num: 5,
//     calculateSqr: function () {
//         console.log(this.num * this.num)
//         console.log(this)
//     }
    
// }

// obje.calculateSqr()







// let obj = {
//     num: 5,
//     calculateSquare: () => {
//         console.log(this.num * this.num);
//         console.log(this);
//     }
// }

// obj.calculateSquare()







// let obj = {
//     num: 5,
//     calculateSquare: function () {
//         console.log(this.num * this.num);
//         console.log(this);
//         const anotherFun = () => {
//             console.log(this);
//         }
//         anotherFun();
//     }
// }

// obj.calculateSquare();




// let obj = {
//     num: 5,
//     calulateSqr: function (){
//         console.log(this.num * this.num);
//         console.log(this)
//         const anotherFun = () => {
//             console.log(this)
//         }
//         anotherFun()
//     }
// }

// obj.calulateSqr()




// let num =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// num.forEach((num,i)=>{
//     if(i % 2 !== 0) return;
//     console.log(num * num);
// }
// )



// let fruits = ["Apple", "Banana", "Orange", "Cherry", "Grapes", "Watermelon"];


// fruits.forEach((friut,i)=>{
//   console.log(friut.toUpperCase(),i)
// })



// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let calculateSqr = allNum.map(num => num * num)

// console.log(calculateSqr)




// let fNames = ["haider", "abdullah", "aslam", "akram", "sameed", "anas", "ahmed", "shoaib"];

// fNames = fNames.map((fname)=>{
//        return(fname.toUpperCase())
// })

// fNames.map(fName => fName.toUpperCase())

// console.log(fNames)






// let fNames = ["haider", "abdullah", "aslam", "akram", "sameed", "anas", "ahmed", "shoaib"];

// // console.log(fNames[0])
// fNames.map((fName)=>{
//     let uper = fName[0].toUpperCase()
//     let remain = fName.slice(1).toLowerCase()
// return `${uper}${remain}`
// })

// console.log(fNames)


// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNum = allNum.filter(num=> num % 2 === 0)

// console.log(evenNum)






// let students = ["haider", "abdullah", "aslam", "akram", "sameed", "anas", "ahmed", "shoaib", "akram", "hassan", 'rashid', "umair"];

// let feesClear = ["haider", "abdullah", "aslam", "anas", "ahmed", "shoaib", "umair"];

// let examClear = ["abdullah", "aslam", "akram", "ahmed", "shoaib", "akram", "hassan", 'rashid'];


// let eligible = students.filter((student)=>(

//      feesClear.includes(student) && 
//  examClear.includes(student)

// ))

// console.log(eligible)





// function add2Num(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// // console.log(add2Num(1,1))

// let all = add2Num(1,1)
// console.log(all)






// let all = 0;
// function num(){
//     console.log(all++)
// }
// num()
// num()
// num()

// let divEa = document.querySelectorAll('DIV')[0]

// let num = 0;

// setInterval(function(){
//     divEa.innerHTML = num++

// },1000)
// // num++









// let obj = {
//     name: 5,
//     calculateSqr: function(){
//        console.log(this.num * this.num)
//         console.log(this)
//     }
// }
// console.log(calculateSqr())






// let obj = {
//     name: 5,
//     calculateSqr:() =>{
//        console.log(this.num * this.num)
//         console.log(this)
//     }
// }
// console.log(obj)









// let obj = {
//     name: 5,
//     calculateSqr: function() {
//        console.log(this.num * this.num)
//         console.log(this)
//      const anotherFun = () =>{
//         console.log(this)
//      }
//  anotherFun()

//     }
// }


// obj.calculateSqr()


// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// allNum.forEach((num,i)=>{
//     if(i % 2 !== 0)return
       
//     console.log(num * num)
// })




// let fruits = ["Apple", "Banana", "Orange", "Cherry", "Grapes", "Watermelon"];

// fruits.forEach((friut,i)=>{
//    console.log(friut.toUpperCase(),i)
// })


// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//    sqr = allNum.map( num => num * num) 

//    console.log(sqr)

// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNum = allNum.filter(num=> num % 2 === 0)

// console.log(evenNum)






// let students = ["haider", "abdullah", "aslam", "akram", "sameed", "anas", "ahmed", "shoaib", "akram", "hassan", 'rashid', "umair"];

// let feesClear = ["haider", "abdullah", "aslam", "anas", "ahmed", "shoaib", "umair"];

// let examClear = ["abdullah", "aslam", "akram", "ahmed", "shoaib", "akram", "hassan", 'rashid'];


// let result = students.filter((student)=>(
//    feesClear.includes(student) &&
//    examClear.includes(student)

// ))

// console.log(result)







// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15];
// let sum = 0
// for(let i = 0;i < num.length;i++){
    
//       sum = sum + num[i]
// }


// console.log(sum)


// let num = [1, 2, 3,4, 5, 6, 7, 8, 9, 10, 11, 15];

// let  sum = num.reduce((init,item)=> init + item ,0)


// console.log(sum)


// let str = 'hello world'

// let arr = str.split('').reverse().join('')

// console.log(arr)


// let str = 'hello world'


// let revStr = str.split('')
//    .reduce((reverse,chr)=> chr + reverse,'')

// console.log(revStr)



// let str = 'the quick brown fox jumps over the lazy dog.';

// let vowels = ['a','e','i','o','u'];

// let count = str.split('').reduce((vowCount,chr) =>{
//       if(vowels.includes(chr)){
//      return   vowCount++
//       }
    
// },0);

// console.log(count)


// let str = 'the quick brown fox jumps over the lazy dog.';
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// let count = str.split("")
//     .reduce((vowCount, chr) => (
//         vowels.includes(chr) ? vowCount + 1 : vowCount
//     ), 0);

// console.log(count)





// let str1 = "Saylani Mass Information Technology"; //SMIT
// let str2 = "Pakistan Telecommunication Company Limited"; // PTCL
// let str3 = "National Aeronautics Space Administration"; //NASA


// let abbr1 = str1.split(" ").reduce(abbr,'')

// // console.log(abbr1)

// function abbr(init,chr){
//     return init + chr[0]
// }
// console.log(abbr1)


// let abbr2 = str2.split(" ").reduce((init,chr) =>{
//     return init + chr[0]
// },'' )
// console.log(abbr2)








// let teamAges = [15, 18, 20, 31, 22, 24];

// // let eligible = false
// let finTeam = teamAges.every((age)=> age >= 15)

// let findPerson = teamAges.some((age)=> age >= 35)
// console.log(finTeam)
// console.log(findPerson)




// let teamAges = [15, 18, 20, 31, 22, 24];

// let eligibleForAdmission = teamAges.every((age) => age >= 15);

// let eligibleForGym = teamAges.some((age) => age >= 30);

// console.log(eligibleForAdmission);
// console.log(eligibleForGym);



// let users = [
//     { email: "headeralishah@gmail.com", password: "12345678" },
//     { email: "ali@gmail.com",password: "12345678" },
//     { email: "salman@gmail.com",password: "12345678" },
// ]


// function authonticate(userEmail,userPassword){
//     return new Promise((resolve, reject) => {
//         let isAuth = users.some(({ email,password }) => {
//           return  email === userEmail && password === userPassword
//         });




//     // });
//     if (isAuth) {
//         resolve("Successfully login");
//     }
//     else {
//         reject("Incorrect email or password");
//     }
// });
// }




// authonticate("ali@gmail.com","12345678")

// .then((success) => {
//     console.log(success);
// })

// .catch((error) => {
//     console.error(error);
// })





// let user = {
//     name: 'haider',
//     rollNum: 2314,
//     sub:{
//      subject:   'javaScript', 
//     }
// }

// const {name,sub: {subject}} = user


// console.log(name,subject)









// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15];

// let total = num.reduce((init,item)=> init + item,0)


// console.log(total)



// let str1 = "Saylani Mass Information Technology"; //SMIT
// let str2 = "Pakistan Telecommunication Company Limited"; // PTCL
// let str3 = "National Aeronautics Space Administration"; //NASA


// let abbr1 = str1.split(" ").reduce(find,'')
// let abbr2 = str2.split(" ").reduce(find,'')
// let abbr3 = str3.split(" ").reduce(find,'')




// function find(word,chr){
//       return word + chr[0]
// }


// console.log(abbr1,abbr2,abbr3)







// let teamAges = [15, 18, 20, 31, 22, 24];

// let findPerson = teamAges.every((age)=>{
//     return age >= 15
// })

// let eligibleForGym = teamAges.some((age)=>{
//     return age >= 30
// })


// console.log(findPerson)
// console.log(eligibleForGym)












// let users = [
//     { email: "headeralishah@gmail.com", password: "12345678" },
//     { email: "abdullah@gmail.com", password: "12345678" },
//     { email: "muzammil@gmail.com", password: "12345678" },
// ]

// function  authenticate(userEmail,userPassword){
//   return new Promise((resolve, reject) => {
//      let isAuth = users.some(({email,password})=>{
//           return email === userEmail && password === userPassword
//      })
//      if(isAuth){
//         resolve('successfully login')
//      }
//      else{
//         reject('incorrect email or password')
//      }
//    });
// }



// authenticate("headeralishah@gmail.com","12345678")
// .then((success)=>{
//      console.log(success);
// })
// .catch((error)=>{
//     console.error(error);
// })






// let treat  = new Promise( function (resolve, reject) {
//  let isNotesAvail = confirm('Have you arranged English Notes?')
//  if(isNotesAvail){
//    let foodWish = prompt('what do you want to eat?')
//     resolve(foodWish)
//  }
//  else{
//     reject('tm sai yhi ummed thi')
//  }
// })

// treat
// .then(function(foodItem){
//   console.log(`thanks bro ${foodItem} is due on  me`)
// })

// .catch(function (e){
//     console.log('dosti khatam',e)
// })













    
    
    



// let users = [
//     { email: "headeralishah@gmail.com", password: "12345678" },
//     { email: "abdullah@gmail.com", password: "12345678" },
//     { email: "muzammil@gmail.com", password: "12345678" },
// ]

// function authenticate(userEmail, userPassword) {
//     return new Promise((resolve, reject) => {
//         let isAuth = users.some(({ email, password }) => {
//             return email === userEmail && password === userPassword
//         });
//         if (isAuth) {
//             resolve("Successfully login");
//         }
//         else {
//             reject('Incorrect email or password');
//         }
//     });
// }

// authenticate("headeralishah@gmail.com", "12345678")
//     .then((success) => {
//         console.log(success);
//     })
//     .catch((error) => {
//         console.error(error);
//     })






// alert('hello world')

// console.log('hello mars')


// try{
//     aler('hello world')
// }
// catch(e){
//       console.error(e)
//     //   document.write(e)
// }
// console.log('hello mars')



// function returnNum(){
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => resolve(1),1000)
//     })

// }

// returnNum()
// .then((result)=>{
//     alert(result)
//     return result * 2
// })
// .then((result)=>{
//     alert(result)
//     return result * 2
// })
// .then((result)=>{
//     alert(result)
//     return result * 2
// })
// .catch((e)=>{
//     console.error(e)
// })




// const promise1 = Promise.resolve(1)
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//  setTimeout(()=>{
//  resolve('foo')
//  },3000) 
// });  

// Promise.all([promise2,promise1,promise3])
// .then((success)=>{
//      console.log(success)
// })


// const promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('a promisse 4')
//     },3000)
// });


// const promise5 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('b promisse 5')
//     },2000)
// })

// Promise.race([promise4,promise5])
// .then((success)=>{
//     console.log(success)
// })





// function isAuth(){
//     return new Promise((resolve, reject) => {
// setTimeout(()=>{
//     resolve({name: 'haider',email: 'haiderali@gmail.com'})
// },3000)
//     });
// }
// async function getUser(){
//     let user = await isAuth()
//     console.log('next line',user.email)
// }
// getUser()




// let users = {
//     name: 'haider',
//     email: 'haider@gmail.com',
// }


// console.log(users)

// let user1 = JSON.stringify(users)

// console.log(user1)


// let user2 = JSON.parse(user1)

// console.log(user2)







// try{
//     aler('hello world')
// }
// catch(e){
//    console.error(e)
// }
// console.log('hello mars')




// const promise1 = Promise.resolve(1)
// const promise2 = 32
// const promise3 = new Promise((resolve, reject) => {
// setTimeout(()=>{
//     resolve('foo')
// },3000);    
// })

// Promise.all([promise1,promise2,promise3])
// .then((success)=>{
//     console.log(success)
// })


// const promise4 = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//  resolve('a')
//    },3000)    
// })


// const promise5 = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//  resolve('b')
//    },3000)    
// })

// Promise.race([promise4,promise5])
// .then((success)=>{
// console.log(success)
// })


// function fatchUser(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve({name: 'haider',email: 'abc@gmail.com'})
//         })
//     })
// }

// async function getUser(){
//     let user = await fatchUser()
//     console.log('next line',user)
// }
// getUser()



// let mainEl = document.querySelectorAll(".main")

// let boxEl = document.querySelectorAll('.box')[0]
// let inpEl = document.querySelectorAll("#inp")[0]
// let emlEl = document.querySelectorAll("#email")[0]
// let passEl = document.querySelectorAll("#password")[0]


// function getUser(){
//     let storageData = localStorage.getItem('student')
  

//     if(storageData){
//    storageData = JSON.parse(storageData)
//      console.log(storageData)
//     }else{
//      storageData = []
//     }
//     return storageData;
// }


// function submit(){

// //  let storageData = localStorage.getItem('student')
  

// //    if(storageData){
// //   storageData = JSON.parse(storageData)
// //     console.log(storageData)
// //    }else{
// //     storageData = []
// //    }

// let storageData = getUser()
//     let user = {
//         name: inpEl.value,
//         email: emlEl.value,
//         password:passEl.value 
//     }
//     storageData.push(user)
//     localStorage.setItem('student',JSON.stringify(storageData))
   


//     inpEl.value = ''
//     emlEl.value = ''
//     passEl.value = ''
       
    
    
// }  




// function login(){
//     let emailEl = document.querySelectorAll("#l-email")[0]
//     let passwordEl = document.querySelectorAll("#l-password")[0]

// let storageData= getUser()   

// let save = {}
// for(let i = 0;i < storageData.length;i++){
//     if (emailEl.value === storageData[i].email){
//         // console.log( storageData[i].email );
//         save = storageData[i]
//           break;
//     }
// }
// if(save.email){
//     // console.log(save.email)
// if(save.password === passwordEl.value){
//     console.log('successfully login')
// }else{
//     console.log('invalid password')
// }
// }else{
//     console.log('email is not define')
// }
// }

// console.log(save)













// let divEl = document.querySelectorAll("div")[0]



// let tstEl = document.querySelectorAll("#text")[0]

// let arr = []
// function save(){
//     arr.push(tstEl.value)
//     console.log(arr)
//             divEl.innerHTML = ''

//     for(let i = 0;i < arr.length;i++){
//         divEl.innerHTML += `
//         <p >
//          ${arr[i]}
//         </p>`
//         // divEl.style.border = ' 1px solid black';

//     }

//     // inputEl.value = ''
//     tstEl.value = ''
// }







// let tittleEl = document.getElementById("#tittle")[0]

// console.log(tittleEl)
// // let descripEl = document.querySelectorAll(".txt")[0]

// let postEl = document.querySelectorAll(".post")[0]


// function save(){
//     console.log(tittleEl.value)
// }





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


// console.log()


// function getData(){
//    return new Promise(function (resolve, reject) {
//         fetch('https://fakestoreapi.com/products/1')
//         .then(function(res){
//             return res.json()
//         })
//         .then(function(res){
//                 resolve(res)
//         })
//         .catch(function(e){
//             reject(e)
//         })
//     })
// } 

// getData()
//  .then(function(data){
//        console.log(data)
// })
//  .catch(function(err){
//         console.log(err)
// })


// const getFact = async()=>{
//     let promise = await fetch('https://fakestoreapi.com/products/1')
//     console.log(promise)
// }
// getFact()

// https://fakestoreapi.com/products/categories



// function sum (a,b){
//      console.log(a + b)
// }


// function calculate(a, b,sumCallback){
//     console.log(a , b);
// }

// calculate(1 , 2,(a,b)=>{
//     console.log(a + b);
// });




// let student = {
//     name: 'haider',
//     rollNum: 256
// }
// let student1 = {
//     isFeePaid: true,
//     attendence: 'perfect'

// }

// let student2 = Object.assign(student,student1)

// console.log(student2)

// student2.id = 'wma'

// console.log(student2)



// let user1 = {
//     name: 'haider',
//     rollNum: 2456,
// }

// let user2 = {
//     name: 'haider',
//     rollNum: 2456,
//     id: 'fox'
// }

// console.log(user1)

// let user= Object.assign({},user2)

// console.log(user)



