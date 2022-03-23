function countPackages(carriers, carrierID) {
    let packs = 0;
    const getNPacks = index => {
        const current = carriers[index]
        packs += current[1]
        if (current[2].length > 0) {
            current[2].forEach(e => getNPacks(carriers.findIndex(c => c[0] === e)))
        }
    }
    getNPacks(carriers.findIndex(c => c[0] === carrierID))
    return packs
}