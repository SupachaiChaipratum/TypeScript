// nomal function
function nameOfFunction() {
    return "some things";
}
// anonymous function
var func = function () { return "some things"; };
// function has type
function foo(sample) {
    return sample;
}
foo(1); // ok
var num1 = foo(2); // ok
// num1 = "2"; // error
function bar(ex) {
    return ex;
}
// Optional Parameters
function human(fname, lname, age) {
    // ..
}
human("HOI", "Stroy", 25); // ok
human("HOI", "Stroy"); // ok
human("HOI"); // error
//====
//Default Parameters
// js
// function addNum(num1, num2) {
//     if (num2 === void 0) { num2 = 0; }
//     return num1 + num2;
// }
function addNum(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    return num1 + num2;
}
addNum();
addNum(undefined, 1);
addNum(1, 2);
// addNum(); // error
// let addNum = (num1: number = 0, num2 :number = 0) : number => num1+num2;
// okay and returns "Will Adams"
// Rest Parameters
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
padding(1); // Okay : all
padding(1, 1); // Okay : topAndBottom, leftAndRight
padding(1, 1, 1, 1); // Okay : top, right, bottom, left
//padding(1,1,1); // Error: Not a part of the available overloads
// maybe this 
