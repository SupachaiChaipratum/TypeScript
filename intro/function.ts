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
// foo("1") // error

let num1 = foo(2); // ok
// num1 = "2"; // error

function bar(ex){

    return "ex";
}

// Optional Parameters
function human(name: string, age?: string): void {
    // ..
}


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