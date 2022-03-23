function getMinJump(obstacles) {
    const max = Math.max(...obstacles)
    let jumps = 1;
    const getJump = () => {
        let ban = false
        for (let x = 0; x <= max; x += jumps) {
            ban = obstacles.includes(x)
            if (ban) {
                break;
            }
        }
        if (ban) {
            jumps++
            getJump()
        }
    }
    getJump()
    return jumps
}