function solution(N) {
    for (let i = 1; i <= N; i++) {
        if ((i & (i - 1)) === 0) {
            process.stdout.write('POWER\n');
        } else {
            process.stdout.write(i + '\n');
        }
    }
}

// Test Example 1
console.log("Test Example 1: N = 7");
solution(7);
console.log("\n");

// Test Example 2
console.log("Test Example 2: N = 16");
solution(16);
console.log("\n");
