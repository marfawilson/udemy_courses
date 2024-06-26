// each function creates its own execution context
function b() {
    var myVar;
    console.log(myVar);// returns undefined (runs third)
}

// each variable has it's own variable environment as well, so the value of myVar is different depending on the execution stack
function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

// the code below is apart of the Global Execution Context
var myVar = 1;
console.log(myVar);// returns 1 (runs first)

a();// returns 2 (runs second) because the myVar value is now coming from a different EC (function a)

console.log(myVar);// returns 1 because we're back in the GEC