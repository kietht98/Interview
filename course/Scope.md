# Scope

- Lexical Scope

- Nested (child) function have access to the scope of their parent functions

- Global scope

- Immediately Invoked Function Expression

```
const privateCounter = (() => {
let count = 0;
console.log(`initial values: ${count}`);
return () => {count +=1; console.log(count)}
})();
```
