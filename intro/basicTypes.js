//Boolean
var isBoolean = true;
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//String
var says = "Hello, World";
says = "Hello HOI";
//Array
var nums = [1, 2, 3];
var numList = [1, 2, 3];
var num = [1, 2, 3];
// let nums2Type: number[] = [1,"1"]; // compile error
// let numList2Type: Array<number> = [2,"2"]; // compile error
// let num2Type = [3,"3"]; // pass
// Tuple
var man;
man = ["HOI", 24];
// man = [24 , "HOI"] // Type 'number' is not assignable to type 'string'. 
// Enum
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["F"] = 4] = "F";
    Grade[Grade["I"] = 5] = "I";
    Grade[Grade["U"] = 6] = "U";
    Grade[Grade["W"] = 7] = "W";
})(Grade || (Grade = {}));
;
var student1 = Grade.A;
var student2 = Grade.B;
// Any
var val = 1;
val = "2";
val = [1, "2", true];
// Void
var val1 = null;
var val2 = undefined;
// Type assertions
var someValue = "123";
var lengthOfValue = someValue.length;
console.log(lengthOfValue); // 3
