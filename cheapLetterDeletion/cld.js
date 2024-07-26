function solution(S, C) {
    let totalCost = 0;
    let n = S.length;

    for (let i = 0; i < n - 1; i++) {
        if (S[i] === S[i + 1]) {
            if (C[i] < C[i + 1]) {
                totalCost += C[i];
            } else {
                totalCost += C[i + 1];
                // Remove the next character by skipping the next index
                C[i + 1] = C[i];  // Set cost of next character to current one to continue checking
            }
        }
    }

    return totalCost;
}

// Test examples
console.log(solution("abccbd", [0, 1, 2, 3, 4, 5]));  // Output: 2
console.log(solution("aabbcc", [1, 2, 1, 2, 1, 2]));  // Output: 3
console.log(solution("aaaa", [3, 4, 5, 6]));          // Output: 12
console.log(solution("ababa", [10, 5, 10, 5, 10]));   // Output: 0
