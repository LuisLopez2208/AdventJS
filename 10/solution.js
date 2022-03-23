function getCoins(change) {
    const coins = [1, 2, 5, 10, 20, 50]
    const result = Array(6).fill(0)
    const c = coins.filter(e => e < change)
    let suma = 0;
    let con = (c.length - 1);
    const itSelf = () => {
        if ((suma + c[con]) <= change) {
            suma += c[con]
            setPosition(con)
            itSelf()
        }
    }
    const setPosition = position => result[position] += 1
    if (coins.includes(change)) {
        setPosition(coins.indexOf(change))
        return result
    }
    do {
        if ((suma + c[con]) < change) {
            suma += c[con]
            setPosition(con)
        }
        itSelf()
        con--
    } while (suma != change)
    return result
}