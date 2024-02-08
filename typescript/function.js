// function add (a :number,b :number) : number
// {
//     return a+b;
// }
// console.log(add(2,5));
// interface hello {
//     name ?:string
//     email ?: string
//     age ?: number
// }
// let person :hello ={
//     name : 'krish',
//     age : 30
// }
// console.log(person);
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
var x = gender.male;
console.log(x);
