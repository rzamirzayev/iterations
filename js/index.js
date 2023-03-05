// foreach starting
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  const numbers = [1, 2, 3, 4, 5];

forEach(numbers, function(value) {
    console.log(value);
  });
  // foreach END

  // map starting
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
// map END

// myFilter starting
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
  // myFilter END

  // every starting
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i], i, array)) {
        return false;
      }
    }
    return true;
  }
  // every END

// indexOf starting
  function indexOf(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  }
  // indexOf end


  // lastIndexOd starting
  function lastIndexOf(array, searchElement, lastIndx = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  }
  // lastIndexOd end

  // findIndex STARTING
function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
  // findIndex END
    
  
  




  

