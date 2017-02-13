
//Boolean
let isBoolean: boolean = true;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let says:String = "Hello, World"
says = "Hello HOI" 

//Array
let nums: number[] = [1, 2, 3];

let numList: Array<number> = [1, 2, 3];

let num  = [1, 2, 3];


// let nums2Type: number[] = [1,"1"]; // compile error

// let numList2Type: Array<number> = [2,"2"]; // compile error

// let num2Type = [3,"3"]; // pass

// Tuple
let man: [string, number];

man = ["HOI", 24]
// man = [24 , "HOI"] // Type 'number' is not assignable to type 'string'. 

// Enum
enum Grade {A, B, C, D ,F , I ,U ,W};
let student1 = Grade.A;
let student2 = Grade.B;

// Any
let val : any = 1
val = "2"
val =[1,"2",true]

// Void
let val1 : void = null
let val2 : void = undefined

// Type assertions
let someValue: any = "123";
let lengthOfValue :number = (<string>someValue).length;

console.log(lengthOfValue) // 3




