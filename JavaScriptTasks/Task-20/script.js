// Que-1: get the value of the first element in an array that has value greater than 20

let arr = [29, 15, 16, 21, 19, 5, 10 ]

let firstgreatelement = arr.find(val => val>20);

console.log(firstgreatelement);


// Que-2: get the value of the first element in an array that has value less than 20

let firstlesselement = arr.find(val => val<20);

console.log(firstlesselement);

// Que-3: filter data based on a id(property) in an array of objects: pick any random id value

const users = [
    { id : 1 , name : "Shivam"},
    { id : 2 , name : "Rohit"},
    { id : 3 , name : "Mayank"}, 
    { id : 4 , name : "Sachin"},
    { id : 5 , name : "Jatin"}
];

const randomIndex = Math.floor(Math.random() * users.length);
const randomId = users[randomIndex].id;
const randomName = users[randomIndex].name;

console.log("Random ID:", randomId);
console.log("Ramdom Name:", randomName)

// Que-4: check element is odd or even in an array [90, 89, 56, 45]

let arr2 = [90, 89, 56, 45];

arr2.forEach(num => {
    if(num % 2 == 0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is Odd`);
    }
    
});

// Que-5: create a class Book: type_of_book(), no. of pages, type of pages, author

class Book{
    constructor(type, pages, pageType, author ){
        this.type = type;
        this.pages = pages;
        this.pageType = pageType;
        this.author = author;
    }

    type_of_book(){
        console.log("this is a " + this.type + " book.");
    }
}

const myBook = new Book("action",300,"B&W","StanLee");

myBook.type_of_book();
console.log("pages:", myBook.pages);
console.log("Page Type:", myBook.pageType );
console.log("author:", myBook.author);

// Que-6: create a class Animal: walk(), eat(), climb(), gender, name, disease

class Animal{
    constructor(gender, name, disease){
        this.gender = gender;
        this.name = name;
        this.disease = disease;
    }

    walk(){
        console.log(this.name + " is walking");
    }

    eat(){
        console.log(this.name + " is eating");
    }

    climb(){
        console.log(this.name + " is climbing ");
    }
}


const monkey = new Animal("male","monkey","none");

monkey.walk();
monkey.eat();
monkey.climb();

console.log("Gender: ", monkey.gender);
console.log("disease: ", monkey.disease);




