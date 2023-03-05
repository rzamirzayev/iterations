function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  const numbers = [1, 2, 3, 4, 5];

forEach(numbers, function(value) {
    console.log(value);
  });

  function map(array, callback) {
  const mapArray = [];

  for (let i = 0; i < array.length; i++) {
    mapArray.push(callback(array[i], i, array));
  }

  return mapArray;
}


const secondArray = map(numbers, function(number) {
  return number+1;
});

console.log(secondArray); 

function myFilter(array, callback) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
  
    return result;
  }


const evenNumbers = myFilter(numbers, function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); 

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i], i, array)) {
        return false;
      }
    }
    return true;
  }

  function indexOf(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  }
  function lastIndexOf(array, searchElement, lastIndex = array.length - 1) {
    for (let i = lastIndex; i >= 0; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  }
function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
    
  
  




  

