//map, every, some, find, includes, indexOf, at, concat

Array.prototype.mapNew = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

const arr = [1, 2, 7, 7, 8, 4, 10, 23];

// let outArr = arr.mapNew((item) => {
//   return item * 2;
// });

//console.log(outArr);

Array.prototype.everyNew = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
// console.log(arr.everyNew((item) => item > 0));

Array.prototype.someNew = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
// console.log(arr.someNew((item) => item < 0));

Array.prototype.includesNew = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      return true;
    }
  }
  return false;
};

// console.log(arr.includesNew(7));

Array.prototype.indexOfNew = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
};

// console.log(arr.indexOfNew(7));

Array.prototype.findNew = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

// console.log(arr.findNew((item) => item === 7));

Array.prototype.atNew = function (index) {
  if (this.length < Math.abs(index)) {
    return undefined;
  } else if (index >= 0) {
    return this[index];
  } else {
    return this[this.length + index];
  }
};
// console.log(arr.atNew(-6));

Array.prototype.concatNew = function (...args) {
  for (let arg of args) {
    if (Array.isArray(arg)) {
      for (let i of arg) {
        this.push(i);
      }
    } else {
      this.push(arg);
    }
  }
  return this;
};

// const arr2 = arr.concatNew([43, 56, 100], 'dog');

// console.log(arr2);

Array.prototype.sliceNewNew = function (a, b) {
  let res = [];
  if (a === undefined && b === undefined) {
    return this;
  } else if (a >= 0 && b === undefined) {
    for (let i = 0; i < a; i++) {
      this.shift();
    }
    return this;
  } else if (a < 0 && b === undefined) {
    for (let i = 1; i <= Math.abs(a); i++) {
      res.push(this[this.length - i]);
    }
    res = res.filter((item) => item !== undefined);
    return res.reverse();
  } else if (a >= 0 && b >= 0) {
    let len = this.length;
    for (let i = 0; i < a; i++) {
      this.shift();
    }
    for (let i = b; i < len; i++) {
      this.pop();
    }
    return this;
  } else if (a < 0 && b < 0) {
    for (let i = 1; i <= Math.abs(a); i++) {
      res.push(this[this.length - i]);
    }
    res = res.filter((item) => item !== undefined);
    res = res.reverse();
    for (let i = 0; i < Math.abs(b); i++) {
      res.pop();
    }
    return res;
  } else if (a >= 0 && b < 0) {
    for (let i = 0; i < a; i++) {
      this.shift();
    }
    for (let i = 0; i < Math.abs(b); i++) {
      this.pop();
    }
    return this;
  } else if (a < 0 && b >= 0) {
    for (let i = 1; i <= Math.abs(a); i++) {
      res.push(this[this.length - i]);
    }
    res = res.filter((item) => item !== undefined);
    res = res.reverse();
    for (let i = b; i < this.length; i++) {
      res.pop();
    }
    return res;
  }
};
//1, 2, 7, 7, [8,4,10,23]

// console.log(arr.sliceNewNew(-4, -5));

Array.prototype.reduceNew = function (cb, initial = 0) {
  for (let i = 0; i < this.length; i++) {
    cb((initial = initial + this[i]));
  }
  return initial;
};

let res = arr.reduce((acc, item) => acc * item);

console.log(res);

// Array.prototype.someNew = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };
