const { useCallback, useMemo } = require("react");

let arr = [10 , 5 , 7 , 11 , 127 , 96 , 91 , 104]


// sort this arr in ascending order a -b 
// if you wanna sort in descending order b - a

let asc_orderSort = [...arr].sort((a , b) => a - b);
let desc_orderSort = [...arr].sort((a , b) => b - a);

// console.log(asc_orderSort)

// console.log(desc_orderSort)

// diff between then catch and async method 

const ages = [17 , 98 , 56 , 99]

// I have change the value at index 2 here 

ages[2] = 77

console.log(ages)

{let a = 14 }

let a = 76

var m = 99

m = 98

console.log(m)

console.log([] == [])

console.log([] == "")

// when we declare const arr in js why we are able to changes the ele values by putting arr[3] = 9

// in js objects are compare by reference not by value okay 

// [] == "" here the 

// what is event LOOP in javaScript explain it properly how does it work ? 

// what is its working condition ? 

// what is call back function ? what is the we uses Promises instead of using callback function ? because callback loop create a callback hell and there is problem that EveryTime we have to write call back condition and code become bit lengthy and un structure, and explain .then() , .catch() , .finally() why we use it 

// what is async and await ? why we use what is the use case of it ?

// what is for in and for of ?

// react ? what is the diff between state and prop ?

// what is the diff between class component and functional component ?

// what is actual DOM ? and real dom ? 

// useCallback and useMemo