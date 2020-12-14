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
    let leastCount = 0;
    let counter = 0;
    for (const el of array) {
      for (let j = 0; j < array.length; j++) {
          if (el === array[j]) {
              counter += 1;
              if (counter > highestCount) {
                  highestCount = counter;
                  mostFrequentElement = el;
              } else if (counter <= leastCount || leastCount === 0) {
                  leastCount = counter;
                  leastFrequentElement = el;
              }
          }
      }
      counter = 0;
    }
    return {most: mostFrequentElement, least: leastFrequentElement};
  };
 // console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']));
  
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
