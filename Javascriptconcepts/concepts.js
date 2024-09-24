//Looping a triangle
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);


//FizzBuzz
for (let i= 1; i <= 100; i++) {
    let output = "";
    if (i % 3 == 0) {
        output += "Fizz";
    }
    if (i % 5 == 0) {
        output += "Buzz";
    }
    console.log(output || i);
  }


//Chessboard
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);



//Minimum
function min(a,b) {
    if (a<b) {
        return a
    }
    else {
        return b
    }
}
console.log(min(0, 10));
console.log(min(0, -10));


//Recursion
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


//Bean Counting
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));


//Sum of range
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }
  function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }
  console.log(range(1, 10))
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55



//Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));


//example
function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }
  
  function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }
  
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));


//Objects example
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    
      plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
      }
    
      minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
      }
    
      get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
    }
    
    console.log(new Vec(1, 2).plus(new Vec(2, 3)));
    // output Vec{x: 3, y: 5}
    console.log(new Vec(1, 2).minus(new Vec(2, 3)));
    // output  Vec{x: -1, y: -1}
    console.log(new Vec(3, 4).length);
    // outpue 5



//Example
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}
function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));   //output 64



