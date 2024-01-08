/*
* Conditionals, Functions, Scope and Loops.
 */

//Equals
let equals = 1 === 1;
console.log(equals)

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10

// Greater than Equals
let greaterThanEq = 5 >= 5

// Less Than Equals
lessThanEq = 4 <= 9

//Not Equals
let NotEquals = 5 !== 2;

let storeA = 4.40
let storeB = 4.40

function compareStorePrices (storeA, storeB) {
    let StoreAisLower = storeA < storeB
    if (StoreAisLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their Prices are equal")
    }
}

//compareStorePrices(10, 5);
//compareStorePrices(7, 10);

function squareNum (number) {
    let squared = number * number;
    return squared; [p]
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

let x = 10;

function addNumbers (n, m) {
    console.log(x)
    let b;
    if(1 === 8) {
        b =  8;
    }
    return n + m;
}
//                       0   1  2  3  4
let ourArray = [1, 2 ,3 ,4, 5, 6, 7];

let arrLen = ourArray. length;
for (let i = 0; i<arrLen. length; i++ ) {
    console.log("i is equal to: " + i )
    //console.log(ourArray[i])

}

let x = 0
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}