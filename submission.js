const findSum = function(array) {
    // your code here - don't forget to return a number!
    let sum = 0;
    for (const el of array) {
        sum += el;
    }
    return sum;
  };

  //console.log(findSum([2, 4, 6]));
  
  const findFrequency = function(array) {
    // your code here - don't forget to return an object!
    let mostFrequentElement;
    let leastFrequentElement;
    let highestCount = 0;
    let leastCount = array.length;
    let counter = 0;
    for (const el of array) {
        
        for (let j = 0; j < array.length; j++) {
        if (el === array[j]) {
              counter += 1;
              if (counter > highestCount) {
                  highestCount = counter;
                  mostFrequentElement = el;
              }
          }
      }

      if (counter < leastCount) {
        leastCount = counter;
        leastFrequentElement = el;
      }
      counter = 0;
    }
    
    return {most: mostFrequentElement, least: leastFrequentElement};
  };
  //console.log(findFrequency(['a', 'a', 'b', 'b', 'c', 'd', 'd', 'd']));
 // console.log(findFrequency(['a', 'banana', 'a', 'd', 'd', 'd', 'd', 'b', 'b', 'c', 'c']));
  
  const isPalindrome = function(str) {
    // your code here - don't forget to return a boolean!
    const forwardArray = str.split('');
    const backwardArray = [];
    for (const el of forwardArray) {
        backwardArray.unshift(el);
    }
  return forwardArray.join() === backwardArray.join();
  };
  
//console.log(isPalindrome('hannah'));

  const largestPair = function(array) {
    // your code here - don't forget to return a number!
    let largestProduct = 0;
    for (let i = 0; i < array.length -1; i++) {
        let product = array[i] * array [i + 1];
        if (product > largestProduct) {
            largestProduct = product;
        }
    }
    return largestProduct;
  };
  //console.log(largestPair([5,1,2,3,1,4]))
 // console.log(largestPair([9,5,10,2,24,-1,-48]))

const removeParenth = function(str) {
    // your code here - don't forget to return a string!
    let startSlice = (str.indexOf('('));
    let endSlice = (str.indexOf(')') + 1);

    console.log(str.slice(startSlice, endSlice));
   // console.log(str);
  };

 // console.log(removeParenth('ido(not)liketocode'));
  
  const scoreScrabble = function(str) {
    // your code here - don't forget to return a number!
  };

