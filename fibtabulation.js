const fibTabulation = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    const fibTable = Array(n + 1).fill(0);
    fibTable[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
    }

    return fibTable[n];
};

// Test cases
console.log(fibTabulation(0));  // 0
console.log(fibTabulation(1));  // 1
console.log(fibTabulation(2));  // 1
console.log(fibTabulation(3));  // 2
console.log(fibTabulation(4));  // 3
console.log(fibTabulation(5));  // 5
console.log(fibTabulation(6));  // 8
console.log(fibTabulation(7));  // 13
console.log(fibTabulation(50));  // 12586269025
