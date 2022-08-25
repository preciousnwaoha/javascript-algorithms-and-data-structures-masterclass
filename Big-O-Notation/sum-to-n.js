const solution = (n) => {
    return n * (n + 1) / 2;
}

// const solution = (n) => {
//     if (n === 1) {
//         return 1
//     }
//     return n + solution(n - 1)
// }

// const solution = (n) => {
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum
// }

let t1 = performance.now()
console.log(solution(500000000))
let t2 = performance.now()
console.log(`Time Elapsed:  ${(t2 - t1) / 1000} seconds`)




