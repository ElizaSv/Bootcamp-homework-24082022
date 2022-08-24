// 1. Write a function that takes two numbers (a and b) as Sum a and Return the result
function Sum(a, b) {
    return a + b;
    }

// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result
        // version #1 (in case you need to return the string itself without the last 3 chars
function extract(string) {
    return console.log(string.substring(0, string.length-3))
    }
extract("birds") //test if works. output: "bi"

        // version #2 (in case result is the last 3 char themselves)
function extract2(string) {
    return console.log(string.slice(-3))
    }
extract2("birds") // test if works. output: "rds"

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

function numberArr(num) {
    let converted = num.toString()
    let splitted = converted.split('')
    let newArr=splitted.map(item => Number(item))
    console.log(newArr)
    return newArr
    }
    numberArr(123456789)  //test if works. output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].

// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

function lastElem(a, n) {
    let lastElements= a.slice(-n)
    console.log(lastElements);
    return lastElements
}
myArr = ["this", "is", "a", 1, "not", 3]
lastElem(myArr, 4) // output : [ 'a', 1, 'not', 3 ]

// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array

function numberFive(arr1, arr2) {
    let mergedArr=arr1.concat(arr2);
    for (let i = 0; i < mergedArr.length; i++){
        for (let j = i +1; j< mergedArr.length; j++ ) {
            if (mergedArr[i] === mergedArr[j]) {
                mergedArr.splice(j--, 1)
            }
        }
    }
    console.log(mergedArr)
    return mergedArr
    }
let first = [1, "cats", 2, "dogs", "pigs", "horses"];
let second = [5, "turtles", 2, "dogs", "elephants", "sheeps"];

numberFive(first, second)

// 6. Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise

function numberSix(a, b) {
    if (a.hasOwnProperty(b)){
        console.log("true!")
    }
    else {console.log("false!")}
}
let myObj = { education: true, age: 32, name: "Elis"}
let myStr = "name"

numberSix(myObj, myStr) // output: "true!"

