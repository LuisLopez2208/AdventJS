function canReconfigure(from, to) {
    let ban = true;
    let com = {
        from: {},
        to: {}
    }
    let aux = []
    if (from.length != to.length)
        return false
    for (let i = 0; i < from.length; i++) {
        if (aux.includes(from[i] + to[i])) {
            continue;
        }
        ban = from[i] == to[i]
        ban = aux.includes(from[i] + to[i])
        com["from"][from[i]] = ++com["from"][from[i]] || 0
        com["to"][to[i]] = ++com["to"][to[i]] || 0
        ban = (com["from"][from[i]] == 0 && com["to"][to[i]] == 0)
        aux.push(from[i] + to[i])
    }
    return ban
}