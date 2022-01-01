console.log("hello typescript");

// Implicit Types

let helloWorld = "Hello World";

// Explicit Types

let firstName: string = "John" ;
let age: number = 30;


// This variabel cannot be changed into a different variabel data types
// firstName = 32;
// age = "helo"

// Tupple in typescript
// Using to create a modified datatype for an array

type stringAndNumber = [string, number];
let a: stringAndNumber = ["Wendi", 19];

// cannot like this
// let a: stringAndNumber = ["wendi", "Kardian"];


// Enum from typescript

enum Continents {
    North_America, //0
    South_America,  //1
    Africa, //2
    Asia,
    Europe,
    Antartica,
    Australia,
}


// Usage for enum iin typescritp

let region = Continents.Africa; // 2

// Interfaces

interface User {
    name : string;
    id : number;
}


const user: User = {
    name : "John",
    id: 12,
}

// So typescipt is very descriptive

// Composing Types -> Union

type WindowStates = "Open" | "Closed" | "Minimized" ;

const windowStates: WindowStates = "Minimized";

type LockStates = "lock" | "unlock";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

const odd:OddNumberUnderTen = 3;


const getLength = (param : string | string[]) => {
    return param.length;
}

getLength("Hello") // 5
getLength(['test', 'hello']); // 2

// getLength(5); gonna caused an errorr -> break your code