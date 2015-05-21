/**
 *
 */


// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

    function max(first, second){
    "use strict";
      if(first > second) {
        return first;
      } else {
        return second;
      }
    }

console.assert( max(2, 3) === 3 , "max");
console.assert( max(3, 2) === 3 , "max");
console.assert( max(4, 4) === 4 , "max");


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

    function maxOfThree(first, second, third){
        "use strict";
      var largestNumber =  Math.max(first, second, third);
        return(largestNumber);
        }

console.assert( maxOfThree(2, 3, 4) === 4 , "max");
console.assert( maxOfThree(2, 4, 4) === 4, "max");


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
       if ("a" || "e" || "i" || "o" || "u") {
         return true;
       }
       else {
         return false;
       }
     }

console.assert( isVowel("a") === true, "a is not a vowel");


// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
}


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers) {
    "use strict";
      var total = 0;
        for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
        }
        return total;
}

function multiply(numbers) {
    "use strict";
      var total = 1;
        for (var i = 0; i < numbers.length; i++) {
        total = total * numbers[i];
        }
        return total;
}


console.assert( sum([1, 2, 3, 4]) === 10, "sum not correct");
console.assert( multiply([1, 2, 3, 4]) === 24, "product not correct");


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
