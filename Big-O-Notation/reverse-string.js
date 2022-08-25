const solution = (str) => {
    return str.split("").sort((a, b) => str.indexOf(b) - str.indexOf(a)).join("");
}

console.log(solution("Hello"))


const solution2 = (str) => {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i-- ) {
        newStr += str[i];
    }
    return newStr
}
console.log(solution2("Hello"))

const solution3 = (str) => {
    return str.split("").reverse().join("");
}

console.log(solution3("Hello"))