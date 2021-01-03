# Vending Machine Change Calculator

A vending machine has the following money denominations: 1c, 5c, 10c, 25c, 50c, and $1.

Your task is to write a program that will be used in a vending machine to return change.

The vending machine should always return the least amount of coins. Write a function `getChange(money, price)` where `money` is how much money was inserted into the machine and `price` is the price of the item selected, that returns an array of integers representing the number of each denomination to return.

##### Example:
```
getChange(5, 0.99) // should return [1, 0, 0, 0, 0, 4]
```

### Tests
Install the dependencies (for testing) with:
```
npm install
```

Read the tests, all of them should pass. Run the tests with:
```
npm test
```

### Questions
* Would it be easy to extend your function to handle an extra denomination say $2?
* What if a denomination no longer existed, say 10c coins are no longer allowed? Would your algorithm still work?

:warning: If the answer to the above questions is: "Yes but not easy to do" rethink your solution. We want scalable code.

### Solution
See [SOLUTION_getChange.js](./SOLUTION_getChange.js)
