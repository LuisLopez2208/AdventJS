function sumPairs(numbers, result) {
    let res = []
    for (var x = 0; x < numbers.length; x++) {
        for (var i = 0; i < numbers.length; i++) {
            if ((numbers[x] + numbers[(i == x ? i + 1 : i)]) == result) {
                res.push(numbers[x], numbers[(i == x ? i + 1 : i)])
                break
            }
        }
        if (res.length > 0)
            break
    }
    return res.length > 0 ? res : null
}