//Que-1 : given number is multiple of 3 or not e.g.10900

function MultipleOf3(number){
    if(number % 3 == 0){
        alert("Given Number is divisible by 3 ");
    }
    else {
        alert("Given Number is not divisible by 3 ");
    }
}

let number = parseInt(prompt("Enter Any Number"));
MultipleOf3(number); 


//Que-2 : check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not

let sentence = "i am learning js";
let exists = sentence.includes("js");
console.log(exists);


//Que-3 : calculate complex interest ((p/r )* t) / 100 ): take principle, rate and time from user

let p = parseFloat(prompt("Enter principle : "));
let r = parseFloat(prompt("Enter rate : "));
let t = parseFloat(prompt("Enter time : "));

let complex_rate = ((p/r )* t) / 100;
console.log(complex_rate);




