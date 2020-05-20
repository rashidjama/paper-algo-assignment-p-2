function a(x, y) {
  return 5;
}
// output is 5 because function a returns 5
// console.log(a(5,5))

function a(x, y) {
  z = []
  z.push(x);
  z.push(y);
  z.push(5);
  // console.log(z);
  return z;
}

// The result is [2,2,5], [2,2,5],[6,8,5] [6,8,5]
b = a(2, 2)
// console.log(b);
// console.log(a(6,8));

function a(x) {
  z = [];
  z.push(x);
  z.pop();
  z.push(x);
  z.push(x);
  return z;
}
// y = a(2);
// y.push(5);
//result is [2,2,5]
// console.log(y);

function a(x) {
  if (x[0] < x[1]) {
    return true;
  } else {
    return false;
  }
}
//result is true because x[0] =2 is less than x[1]= 3
// b = a([2,3,4,5])
// console.log(b);

function a(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      x[i] = "Coding"
    }
  }
}
//result is undefined because function is not returning any value;
// console.log(a([1,2,3,4]))

function a(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] > 5) {
      x[i] = "Coding"
    } else if (x[i] < 0) {
      x[i] = "Dojo"
    }
  }

}
//result is an defined because no value returned by the function. if function could return the value of x result should be [5,coding,dojo,4]
// console.log(a([5,7,-1,4]))

function a(x) {
  if (x[0] > x[1]) {
    return x[1];
  }
  return 10;
}
//result is 10 because first 
// b = a([5,10])
// console.log(b);

function sum(x) {
  sum = 0;
  for (var i = 0; i < x.length; i++) {
    sum = sum + x[i];
    console.log(sum);
  }
  return sum;
}

//result is nothing because we never call this function.

function printAverage(x) {
  var sum = 0;
  // your code here
  // for(let i=0;i<=x.length;i++) {
  //   sum += x[i]
  // }
  // console.log(sum)
  x.forEach(element => {
    sum += element;
  });
  return sum / x.length;
}
// y = printAverage([1,2,3]);
// console.log(y); // should log 2

// y = printAverage([5,2,8]);
// console.log(y); // should log 5

function returnOddArray() {
  // your code here
  let outCome = [];
  for (let i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      outCome.push(i)
    }
  }
  return outCome;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]

function squareValue(x) {
  // your code here
  let result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i] * x[i])
  }
  return result;
}
// y = squareValue([1,2,3]);
// console.log(y); // should log [1,4,9]

// y = squareValue([2,5,8]);
// console.log(y); // should log [4,25,64]