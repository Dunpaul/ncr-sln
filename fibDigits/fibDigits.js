function solution(N) {
    // Array to store the sequence elements
    let sequence = [0, 1];
    // Map to detect when a cycle starts
    let seen = new Map();

    // Start generating the sequence from the third element
    let i = 2;

    while (true) {
        // Compute the next element as the sum of the digits of the last two elements
        let next = sumOfDigits(sequence[i - 1]) + sumOfDigits(sequence[i - 2]);

        // Check if we have seen this element before at the same index
        let key = sequence[i - 1] + ',' + sequence[i - 2];
        if (seen.has(key)) {
            // Period found, use the cycle to get the result
            let cycleStart = seen.get(key);
            let cycleLength = i - cycleStart;
            return sequence[cycleStart + (N - cycleStart) % cycleLength];
        }

        // Store the current element and index in the map
        seen.set(key, i);
        sequence.push(next);
        i++;
    }
}

function sumOfDigits(num) {
    return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}

// Test examples
console.log(solution(2));  // Output: 1
console.log(solution(6));  // Output: 8
console.log(solution(10)); // Output: 10
