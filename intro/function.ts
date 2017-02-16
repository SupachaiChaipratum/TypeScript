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

