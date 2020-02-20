'use strict'
// let tmp = true;
  if (true) { // enter new scope, Temporary Dead Zone (TDZ) starts
    // Uninitialized binding for `tmp` is created
//     console.log(tmp); // ReferenceError: Cannot access 'tmp' before initialization
    let tmp; // TDZ ends, `tmp` is initialized with `undefined`
    console.log(tmp); // undefined
    tmp = 123;
    console.log(tmp); // 123
  }
  // console.log(tmp); // true