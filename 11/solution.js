function shouldBuyFidelity(times) {
    let fidelity = 250
    let cost = 12;
    for (let x = 0; x < times; x++) {
        fidelity += (cost * (Math.pow(0.75, (x + 1))))
    }
    return fidelity < (cost * times)
}