// nomal function
function nameOfFunction() {
    return "some things";
}

// anonymous function
let func = function() { return "some things"; };


// function has type
function foo(sample: number) : number {
    return sample;
}

foo(1) // ok

let num1 = foo(2); // ok
// num1 = "2"; // error

function bar(ex){
  
    return ex;
}



// Optional Parameters
function human(fname: string,lname:string, age?: number): void {
    // ..
}

human("HOI","Stroy",25) // ok
human("HOI","Stroy") // ok
human("HOI") // error





//====

//Default Parameters

// js
// function addNum(num1, num2) {
//     if (num2 === void 0) { num2 = 0; }
//     return num1 + num2;
// }


function addNum(num1: number=0, num2 :number ) {
    return num1+num2;
}
addNum();
addNum(undefined,1);
addNum(1,2);


// addNum(); // error
// let addNum = (num1: number = 0, num2 :number = 0) : number => num1+num2;




// okay and returns "Will Adams"


// Rest Parameters
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");



// Overloads
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number) {
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
padding(1,1); // Okay : topAndBottom, leftAndRight
padding(1,1,1,1); // Okay : top, right, bottom, left

//padding(1,1,1); // Error: Not a part of the available overloads


// maybe this