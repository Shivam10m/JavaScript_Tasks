//Que-1 : create an object for animal, car.

let animals = {
    DOG : "BARKING",
    CAT : "MEOWING",
    GOAT : "BLEATING",
    COW : "MOOING",
    LION : "ROAR"
}

let cars = {
    BMW : "BS6",
    BUGATI : "CHERON",
    HONDA : "CITY",
    TOYOTA : "SUPRA",
    CHEVROLET : "CAMARO"
}

for(keys in animals){
    console.log(keys,":",animals[keys]);
}

for(keys in cars){
    console.log(keys,":",cars[keys]);
}


//Que-2 : find the duplicate in a string() (use array) - optional

let arr1 = ["hello", "World", "hello", "JavaSCript", "Python"];
let newarr1 = new Set(arr1);
console.log(newarr1);


//Que-3 : . reverse a string (use array method)

let arr2 = ["hello", "World", "hello", "JavaSCript", "Python"];
console.log(arr2.reverse());


//Que-4 : find the highest and lowest value in array

let arr3 = [95, 82, 5, 94, 29, 22, 80, 55];
let max = 0 ;
let min = 0 ;
let sortedarr3 = arr3.sort((a,b)=>a-b);
console.log(sortedarr3);

max = sortedarr3[sortedarr3.length-1];
min = sortedarr3[0];
console.log("maximum number in array is : ", max);
console.log("minimum number in array is : ", min);


//Que-5 : display first 3 elements in an array in UI 

let arr4 = [95, 82, 5, 94, 29, 22, 80, 55];
console.log(arr4.slice(0,3));


//Que-6 : remove 4th (index) element and add 2 element there

let arr5 = [95, 82, 5, 94, 29, 22, 80, 55];
let editedarr5 = arr5.splice(4,1,24,25);// splice(index,no, of elements to remove, elements to add)
console.log(arr5);
