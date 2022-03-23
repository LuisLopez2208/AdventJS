function decodeNumbers(symbols) {
    const values = [".", 1, ",", 5, ":", 10, ";", 50, "!", 100];
    const arr = [...symbols];
    let sum = 0;
    let num = 0;
    arr.forEach((s, index) => {
        num = values[(values.findIndex(v => v == s) + 1)]
        sum += values[(values.findIndex(v => v == (arr[(index + 1)])) + 1)] > num ? -num : num
    })
    return typeof sum === "number" ? sum : NaN
}