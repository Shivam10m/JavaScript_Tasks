//QUe-1 : display even numbers upto n number (ask user for number)
let num = parseInt(prompt("Enter Number upto Which you want even number : "));

for(let i = 0 ; i<num ; i++){
    if ( i % 2 == 0 ){
        console.log(i);
    }
}

console.log(`Even numbers upto ${num} `);


//Que-2 : ask user for the input, check whether char is vowel or consonant
let alphabets = prompt("Enter Any Alphabet");
let isVowel ;
let vowels = ["a", "e", 'i', "o", "u", "A", "E", "I", "O", "U"];

for(let i = 0 ; i < vowels.length - 1 ; i++){
    if(vowels.includes(alphabets[i])){
        isVowel = true ;
        break;   
    }
    else{
        isVowel = false;
        break;
    }
}

if (isVowel){
    console.log("Entered alphabet is Vowel");
}
else {
    console.log("Entered alphabet is Consonent");
}


//Que-3 : count of even and odd number from 1 to 999
let n = 999 ;
let evenarr = [];
let oddarr = [];
const even_odd = () => {
    for(let i = 1; i <= n ; i++){
        if (i % 2 == 0 ){
            evenarr.push(i);
        }
        else {
            oddarr.push(i);
        }
}
};

even_odd();
console.log(evenarr.length);
console.log(oddarr.length);


//Que-4 : count occurrence of a particular character in a string (hello: count of l is 2): loops
let str = "Hello";
let count = 0 ;
let letter = "l" ;
for (let i = 0 ; i< str.length ; i++ ){
    if( str[i] === letter ){
        count++;
    }
}
console.log(count);


//Que-5 : sum and average of array elements [1, 9, 8];
let arr = [1, 9, 8];
let sum = 0;

for (let i = 0 ; i < arr.length ; i++){
    sum = sum + arr[i];
}

console.log(sum);

let avg = sum / (arr.length);
console.log(avg);


//Que-6 : largest number in an array (do with loops)
let arr2 = [95, 82, 5, 94, 29, 22, 80, 55];
let i = 0 ;
let max = arr2[0] ;

do{
   if(arr2[i] > max ){
    max = arr2[i];
   }
    i++;
}
while(i < arr2.length)
console.log(max);





