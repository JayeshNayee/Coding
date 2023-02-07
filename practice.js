// lecture = 4 nn bb ss u ********
    // let num = 2345;
    // let nul = null;

    // let bool = true;
    // let bigInt = BigInt(12345678);

    // let String = "Jayesh";
    // let symbol = Symbol("i am jayesh");

    //  let un ;
    

    // // print
    // console.log(un);
    // console.log(typeof(nul));
    // console.log(typeof(String));
    // console.log(typeof(num));
    // console.log(typeof(bigInt));
    // console.log(typeof(bool));

    // const item = {
    //     "name": true,
    //     "Enroll": 200320132019,
    //     "surname": true,
    // }
    // console.log(item["shjs"]);

// lecture 5 Practice set 1
    // const item = {
    //     "name": true,
    //     "Enroll": 200320132019,
    //     "surname": true,
    // }
    // item["friend"] = "jay";
    // console.log(item);

    // const a1 ={
    //     yakka  : "hard -work",
    //     pdnayi :"MBA"
    // }
    // console.log(a1['pdnayi']);
    // console.log(a1.yakka);

// lecture = 6 ( Expressions and operators )

    // Arithmetic 

    // console.log("operators in js");
    // let a = 5 , b = 4;
    // console.log(a++);
    // console.log(++a);
    // console.log(a)
    // console.log(a--);
    // console.log(--a);
    // console.log(++a);

    // let a = 5;
    // // a +=10;
    // // a-=2;
    // // a*=2;
    // // a/=5;
    // // a%=1;
    // a**=2;
    // console.log(a);

    // comparasion operators
    // let  a= 5;
    // let b = "5";
    // console.log(a===b);
    // console.log(a==b);
    // console.log(a!=b);
    // console.log(a!==b);

    // let x = 5255;
    // let y = 6;
    // console.log(x > y && x==5);
    // console.log(x < y || x==5);
    // console.log(!true);
    // console.log(!false);

  /*  let sum = 0;
    let n = prompt("Enter a number");
    n = Number.parseInt(n);
    for(let i = 0 ; i<=n ; i++){
        sum = sum + i;
    }
    console.log(sum);
    // console.log(i);
*/

    // forin*******************************************
    // let obj = {
    //     jay : '90',
    //     yash : '66',
    //     subham : '77'
    // }
    // for(let i in obj){
    //     console.log("marks of " + i + " are " + obj[i])
    // }

     // forof******************************************
    //  for (let i  of "JAYESH") {
    //     console.log(i);
    //  }

    //*************  functin

//     const hello =()=>{
//         console.log("i am good");
//         return 'HI'
//     }
//    let v = hello();
//      console.log(v);
/*
let marks = {
    jayesh : 40,
    yash : 50, 
    Rohan : 22,
    pragnesh : 100
}
*/
// for(let i in marks){
//     console.log(marks[i]);
// }

// Qb: 2

// let password = 200;
// let i;
// while(i!=password){
//      i = prompt("Enter a num");
//      console.log('try agin...')
// }
// console.log("Your password is "+ password);

//  Qb : 3

// String********************** templete literials
    // let name = "Jayesh"
    // let  name2= 'Nayee';
    // // console.log(`Surname of  ${name}   is  ${name2}`);

    // // Escape char

    // let fruits = 'BANA\'na';
    //     console.log(fruits)
    // // console.log(fruits.length);

    // let fruits1 = 'BANA\nna';
    // // console.log(fruits1)

    // let fruits2 = 'BANA\rna';
    //    console.log(fruits2)

    //    //space 
    //    let fruits3= 'BANA\tna';
    //    console.log(fruits3)

    let lowercase = 'jayesh';
    let uppercase = "     NAYEE ";
    // console.log(lowercase.toUpperCase());
    // console.log(lowercase.slice(2,4));   // start to end-1
    // console.log(lowercase.slice(1)); // start index to last index

    // console.log(lowercase.replace("esh","kumar"));

    // console.log(lowercase.concat(' is name ' + uppercase +' is a surname'));

    // trim() method use for remove spaces
    // console.log(uppercase.trim());

// QB 4 let sentence = "This is quick fox jumps over the body.";
// let word = "fox";
// console.log(sentence.includes(word));  includes ae true and flse return kare che
 
// let str = "Please give Rs 1000";
// let amount =  Number.parseInt(str.slice(15));
// console.log(amount)
// console.log(typeof amount)

/************************Array
const class_12_Marks = [91,82];
class_12_Marks[2] = 66;
class_12_Marks[0] = 98;
// Arry ne change and add  kari skay but string ne nahi
console.log(class_12_Marks)*/

    /*let num = [4,2,1,7,9];
    let s = // let str = ' and ';
    console.log(num.join(str));
    let r = num.pop();
    let r1 = num.push(6); 
    shift ae first Element remove kari return kare che
    unshift ae add kre then after length return kare

    let s = num.shift();
    lnum.unshift();
    console.log(s);

    console.log(num);*/


    let arr = [11,12,13,14,15,16,17,81,19];
    let arr2 = [1,2,4,5,6];
    // let newArry = arr.concat(arr2);
    arr = ['a','B', 'b'];
    console.log(arr.sort());

    /* let compare = (a,b)=>{
    //     // return b-a;
    //     return a-b;
    // }
    let num = [16,17,81,19,0,7];
    // num.sort(compare);
    // console.log(num)*/

    // let Arry = [1,2,3,4,6,4,6,8,9,0,10];
    // let deleteArry =Arry.splice(2,2,1110,2111);
    // Arry.slice(2);
    // console.log(Arry.slice(2));

    // ForEach loop in array

    // let num = [6,7,8,3,0,9]
    // num.forEach((Element)=>{
    //     console.log(Element*Element);
    // });

    //  Array.From

    // let name = "joni";
    // let arr1 = Array.from(name);
    // console.log(arr1)
// Array Map**** MEthod ********** is  creat a array but forech is not

// let arry = [ 2,3,4,5];
//  let a = arry.map((value)=>{
//     console.log(value*value);
//  })

// let arry = [2,3,4,5];
// arry.forEach(Element=>{
//     console.log(Element*Element)
// });
    // filter method in Array
    //     let arry = [ 4,5,6,0,1,2,3];
    //    let a = arry.filter((Element)=>{
    //         return Element<4;
    //     })
        // console.log(a);

   /* Reduce method in array
    let reduce = [1,2,3,4,5,6];

    let reduce_fun = (h1,h2)=>{
    return h1 + h2;
    }
    let newArry = reduce.reduce(reduce_fun)
    console.log(newArry);

    second method
    let reduce = [1,2,3,4,5,6];
    let newArry = reduce.reduce((h1,h2)=>{
        return h1+h2;
    })
    console.log(newArry);*/
    //  qb 2:  let newArry = [];
    // let num;
    // while(num!=0){
    //      num =  prompt("Enter a number ");
    //     num = Number.parseInt(num);
    //     newArry.push(num);
    // }
    // console.log(newArry.splice(0,newArry.length-1));






    
    




    











  















