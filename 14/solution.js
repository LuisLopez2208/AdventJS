function missingReindeer(ids) {
    const max = Math.max(...ids)
    for (var x = 0; x <= max; x++) {
        if (!ids.includes(x)) {
            break
        }
    }
    return x
}