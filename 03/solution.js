function isValid(letter) {
    let ban = true;
    let aux = [];
    let con = 0;
    const open = "(";
    const close = ")";
    const noValid = ["{", "["];
    [...letter].every(l => {
        if (l == open) {
            aux.push(true);
        }
        if (aux[0] && noValid.includes(l)) {
            ban = false
        }
        if (l == close && !aux[0]) {
            ban = false;
            return false
        } else if (l == close && aux[0] && con > 1) {
            aux.shift()
            con = 0
        }
        con++
        return true
    })
    if (aux.length > 0) {
        ban = false
    }
    return ban
}