---
title: 'Modern JavaScript Features You Should Be Using'
description: 'Explore the latest JavaScript features from ES2020 to ES2024 that will make your code cleaner, more readable, and more efficient.'
publishedAt: 2024-02-20
category: 'Technical'
tags: ['javascript', 'es2024', 'modern-js', 'programming', 'web-development']
featured: true
---

# Modern JavaScript Features You Should Be Using

JavaScript evolves rapidly. Here are features from recent ECMAScript versions that you should start using today.

## Optional Chaining (?.)

Safely access nested properties:

```javascript
// ❌ Old way
const city = user && user.address && user.address.city;

// ✅ Modern way
const city = user?.address?.city;

// Works with methods too
const result = api?.getData?.();

// And arrays
const first = arr?.[0];
```

## Nullish Coalescing (??)

Default values for null/undefined only:

```javascript
// ❌ Problem with ||
const count = data.count || 10; // 0 becomes 10!

// ✅ Solution with ??
const count = data.count ?? 10; // 0 stays 0

// Combine with optional chaining
const name = user?.profile?.name ?? 'Anonymous';
```

## Logical Assignment Operators

```javascript
// OR assignment (||=)
user.name ||= 'Anonymous';
// Equivalent: user.name = user.name || 'Anonymous';

// AND assignment (&&=)
user.data &&= processData(user.data);
// Equivalent: if (user.data) user.data = processData(user.data);

// Nullish assignment (??=)
user.settings ??= defaultSettings;
// Equivalent: user.settings = user.settings ?? defaultSettings;
```

## Array Methods

### at() - Negative Indexing

```javascript
const arr = [1, 2, 3, 4, 5];

// ❌ Old way
const last = arr[arr.length - 1];

// ✅ Modern way
const last = arr.at(-1);  // 5
const secondLast = arr.at(-2);  // 4
```

### findLast() and findLastIndex()

```javascript
const nums = [1, 2, 3, 4, 3, 2, 1];

const lastThree = nums.findLast(n => n === 3);  // 3
const lastThreeIndex = nums.findLastIndex(n => n === 3);  // 4
```

### toSorted(), toReversed(), toSpliced()

```javascript
const original = [3, 1, 4, 1, 5];

// ❌ Old way - mutates original
const sorted = [...original].sort();

// ✅ New way - returns new array
const sorted = original.toSorted();
const reversed = original.toReversed();
const spliced = original.toSpliced(1, 2, 'new');

console.log(original); // Still [3, 1, 4, 1, 5]
```

## Object.groupBy()

```javascript
const products = [
  { name: 'Apple', category: 'fruit' },
  { name: 'Carrot', category: 'vegetable' },
  { name: 'Banana', category: 'fruit' },
  { name: 'Broccoli', category: 'vegetable' }
];

const grouped = Object.groupBy(products, p => p.category);
// {
//   fruit: [{ name: 'Apple', ... }, { name: 'Banana', ... }],
//   vegetable: [{ name: 'Carrot', ... }, { name: 'Broccoli', ... }]
// }
```

## Promise.withResolvers()

```javascript
// ❌ Old way
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// ✅ New way
const { promise, resolve, reject } = Promise.withResolvers();

// Use elsewhere
setTimeout(() => resolve('Done!'), 1000);
```

## Private Class Fields

```javascript
class BankAccount {
  #balance = 0;  // Private field
  
  constructor(initial) {
    this.#balance = initial;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  
  get balance() {
    return this.#balance;
  }
  
  // Private method
  #calculateInterest() {
    return this.#balance * 0.05;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance);  // 150
console.log(account.#balance); // SyntaxError!
```

## Top-Level Await

```javascript
// In ES modules, you can now use await at top level
const response = await fetch('/api/config');
const config = await response.json();

export { config };
```

## Numeric Separators

```javascript
// More readable large numbers
const billion = 1_000_000_000;
const bytes = 0xFF_FF_FF_FF;
const binary = 0b1010_0001_1000_0101;

console.log(billion);  // 1000000000
```

## String replaceAll()

```javascript
const str = 'foo bar foo baz foo';

// ❌ Old way
const replaced = str.replace(/foo/g, 'qux');

// ✅ Modern way
const replaced = str.replaceAll('foo', 'qux');
// 'qux bar qux baz qux'
```

## Comparison Table

| Feature | ES Version | Use Case |
|---------|-----------|----------|
| Optional Chaining | ES2020 | Safe property access |
| Nullish Coalescing | ES2020 | Default values |
| Logical Assignment | ES2021 | Concise updates |
| at() | ES2022 | Negative indexing |
| Top-level await | ES2022 | Module initialization |
| toSorted/toReversed | ES2023 | Immutable operations |
| Object.groupBy | ES2024 | Data grouping |

## Browser Support

Most features are supported in modern browsers. For older browsers:

```javascript
// package.json
{
  "browserslist": [
    "> 0.5%",
    "last 2 versions",
    "not dead"
  ]
}
```

Use Babel or TypeScript for transpilation when needed.

## Conclusion

These modern features make JavaScript more:
- 🎯 **Readable** - Express intent clearly
- 🛡️ **Safe** - Handle edge cases elegantly
- ⚡ **Efficient** - Less boilerplate code

Start using them today! 🚀
