function learn(time, courses) {
    const minus = courses.filter(c => time > c)
    let con = 1;
    let xx = 0
    let res = []
    if (minus.length == 0) {
        return null
    }
    xx = courses[0] + courses[1]
    for (let x = 0; x < courses.length; x++) {
        for (let y = con; y < courses.length; y++) {
            if (((courses[x] + courses[y]) <= time) && ((time - (courses[x] + courses[y])) <= xx)) {
                xx = (time - (courses[x] + courses[y]))
                res = [x, y]
                if (courses[x] + courses[y] == time) {
                    return res
                }
            }
        }
        con++
    }
    return res
}