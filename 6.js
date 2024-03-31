
///
// arr_1= [101, 202, 303, 404, 505]
// arr_2 = [606, 707, 808, 909]


// const superArr=[...arr_1,...arr_2]




// console.log(Math.min(...superArr) )


///



// let obj={
//     width: 300 ,
//     heigth: 550
// }
// const newobj=Object.create(obj)
// newobj.area=function(){return this.width*this.heigth

// }
// console.log(newobj.area())






// arr_1= [101, 202, 303, 404, 505]
// arr_2 = [606, 707, 808, 909]


// const superArr=[...arr_1,...arr_2]




// console.log(Math.max(...superArr) )



// /////////Получить узел html

// let html=document.documentElement
// console.log(html)


// /////Поменять фоновый цвет всего документа на синий

// document.body.style.background="darkblue";


//////Пользуясь узлом document.body получить узлы <b> и <i>.

// const body=document.body;

// const b=body.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;



// const i=body.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;







///Поменять текст в обоих узлах


// b.innerHTML="tresh";




// i.innerHTML="cool";





/////Задайте тегу <b> класс bold, а тегу <i> класс cursive


// b.className="bold";

// console.log(b)



// i.className="cursive";

// console.log(i)




////Получить текстовый узел Линкод находящийся внутри тега <title>, и поменять его на 'Lincode’.

// const head=document.head;
// const title=head.lastChild.previousSibling;
// title.innerHTML="Lincode";
// console.log(title)



////Удалить узел <b>

// b.remove(b);





/////Создайте промис, который возвращает случайное число от 1 до 10. Затем обработайте этот промис, чтобы вывести результат в консоль.







const randomPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  resolve(randomNumber);}
);

randomPromise.then((result) => {
  console.log(result);}
);




//   const promise = new Promise((resolve, rejected)=>{
//     const a=5;
//     const b=a===a;
//     if(a<10){ resolve(console.log("cool!"))}
//     else{
//         rejected(console.log("error"))
//     }
    
//     })
    
    
    
//     promise.then((result)=>{
//         return result ;
    
//     }
//     ).catch((error)=>{
//         console.log(error)
//     })
    
//     console.log(promise)






    ///////Задание 1: Создание простого Promise





        // const promise = new Promise((resolve, rejected)=>{
        
        // resolve("resolved")})
        
        
        // promise.then((result)=>{
        //   console.log(result) ;
        
        // })








 /////////Задание 2: Использование setTimeout с Promise



//  let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve("result");
//     }, 2000);
  
//   });
//  promise.then((result)=>{
//      console.log(result) ;
        
// })




////Задание 3: Использование Promise.all






// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve("я здесь");
//     }, 1000);
  
//   });
//  promise.then((result)=>{
//      console.log(result) ;
        
// })




// let promise2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve("и я");
//     }, 3000);
  
//   });
//  promise2.then((result)=>{
//      console.log(result) ;
        
// })


// Promise.all([
//   promise,promise2
// ]).then(results => {
//   console.log((results));
// });






/////Задание 4: Использование Promise.race


// let promise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve("я здесь");
//   }, 1000);

// });
// promise.then((result)=>{
//    console.log(result) ;
      
// })




// let promise2 = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve("и я");
//   }, 3000);

// });
// promise2.then((result)=>{
//    console.log(result) ;
      
// })


// Promise.race([
// promise,promise2
// ]).then(results => {
// console.log((results));
// });



///////Задание 1: Деструктуризация массива



// const [a,b,c]=[1,2,3];
// console.log(a)
// console.log(b)
// console.log(c)



// const person={
//   name:'akhmad',
//   age:22,
//   city:'argun'
// }
// const {name,age,city}=person;
// console.log(name)
// console.log(age)
// console.log(city)


// function funk(first, second, rest){
//   console.log(first)
//   console.log(second)
//   console.log(rest)
// }

// const letters=['a', 'b', 'c', 'd', 'e']

// funk(...letters)





////////Задание 4: Вложенная деструктуризация




// const student = {
//   name: "lili",
//   age: 20,
//   address: {
//     city: "New York",
//     country: "USA"
//   }
// };


// const {name,age,city,country}=student;
// console.log(student)
