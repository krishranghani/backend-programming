// 1. reverse a number
// const revers = [1,5,4,3,8];
// revers.sort;
// console.log(revers.reverse());

// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


// function arr(str){
//     return str . split('').sort().join('');
// }
// console.log(arr("webmaster"));

// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// const text1 = 'the quick brown fox';
// const text2 = text1.toUpperCase();
// console.log(text1);
// console.log(text2);

// function capitalFirstLetter(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     let capitalizedStr = words.join(' ');
//     return capitalizedStr;
//   }
//   let inputString = 'the quick brown fox';
//   let outputString = capitalFirstLetter(inputString);
//   console.log(outputString); // Output: 'The Quick Brown Fox'
  
  

// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
  
// function LongestWord(str) {
//     let words = str.split(' ');
//     let longest = '';
  
//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > longest.length) {
//         longest = words[i];
//       }
//     }
  
//     return longest;
//   }
  
//   let inputString = 'Web Development Tutorial';
//   let longest = LongestWord(inputString);
//   console.log(longest);  // Output: 'Development'  

// 5. Write a JavaScript function that checks whether a number is perfect.

function isPerfectNumber(number) {
    let sum = 0;
  
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
  
    if (sum === number) { 
      console.log("This is perfect number");
    } else {
      console.log("This is not perfect number");
    }
  }
  let number = Number(prompt("enter value"))
  console.log("enterd value is ==>",number); 
  isPerfectNumber(number); 