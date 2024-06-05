
# Concepts of Variables in JavaScript

## 1. `var`

### Scope
- `var` is function-scoped. Available throughout the function in which it is declared.

### Hoisting
- Variables declared with `var` are hoisted to the top of their scope.
- The value is not hoisted, so they are `undefined` until the line of code where they are initialized.

```javascript
function exampleVar() {
    console.log(x); // undefined (due to hoisting)
    var x = 5;
    console.log(x); // 5
}
exampleVar();
```

### Re-declaration
- Variables declared with `var` can be re-declared within the same scope.

## 2. `let`

### Scope
- `let` is block-scoped. Available within the block (e.g., `{}`) in which it is declared.

### Hoisting
- Variables declared with `let` are hoisted but not initialized. 
- This results in a `Temporal Dead Zone` (TDZ) from the start of the block until the declaration is encountered.

```javascript
function exampleLet() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 5;
    console.log(x); // 5
}
exampleLet();
```

### Re-declaration
- Variables declared with `let` cannot be re-declared within the same block scope.

## 3. `const`

### Scope
- `const` is also block-scoped, like `let`.

### Hoisting
- Variables declared with `const` are hoisted but not initialized, similar to `let`, and have a TDZ.

### Re-declaration and Re-assignment
- Variables declared with `const` cannot be re-declared or re-assigned.
- The value must be assigned at the time of declaration.

```javascript
function exampleConst() {
    const x = 5;
    console.log(x); // 5
    x = 10; // TypeError: Assignment to constant variable.
}
exampleConst();
```

## 4. Temporal Dead Zone (TDZ)

- The TDZ refers to the time between entering the block scope and the actual variable declaration, during which the variable cannot be accessed.

```javascript
{
    // TDZ starts
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 3; // TDZ ends
    console.log(a); // 3
}
```

## 5. Closures

- A closure is a function that remembers its lexical scope even when the function is executed outside that scope.

```javascript
function outer() {
    let outerVar = 'I am outside!';
    function inner() {
        console.log(outerVar); // Accessing the outer scope variable
    }
    return inner;
}
const innerFn = outer();
innerFn(); // I am outside!
```

## 6. Block Scoping with `let` and `const`

- Unlike `var`, `let` and `const` create block-level scopes, which are useful in loops and conditionals.

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // 0, 1, 2
}

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // 3, 3, 3
}
```

## 7. Immutability with `const`

- While `const` prevents re-assignment, it does not make objects immutable.
- You can still modify the properties of an object or elements of an array declared with `const`.

```javascript
const obj = { a: 1 };
obj.a = 2; // This is allowed
console.log(obj.a); // 2

const arr = [1, 2, 3];
arr.push(4); // This is allowed
console.log(arr); // [1, 2, 3, 4]
```

## 8. Variable Destructuring

- Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

```javascript
// Array Destructuring
const [a, b] = [1, 2];
console.log(a, b); // 1, 2

// Object Destructuring
const { x, y } = { x: 10, y: 20 };
console.log(x, y); // 10, 20

// Nested Destructuring
const { p, q: { r, s } } = { p: 30, q: { r: 40, s: 50 } };
console.log(p, r, s); // 30, 40, 50
```

## 9. Default Values

- You can assign default values to variables during destructuring.

```javascript
const [a = 5, b = 7] = [1];
console.log(a, b); // 1, 7

const { x = 10, y = 20 } = { x: 30 };
console.log(x, y); // 30, 20
```