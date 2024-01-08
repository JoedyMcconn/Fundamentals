/*
let dog = {
    name: "Steve",
    color: "Brown",
    breed: "pug",
    size: "small",
    bark: function (type0fBark){
        console.log("Bark!");
    },
};

 */

function x(y) {
    y.num  = y.num + 5;
    console.log(y);
}

let y = {
    num: 10,
    name: "Tom",
};
x(y);
console.log(y);