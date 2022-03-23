function canMouseEat(direction, game) {
    let position = 0;
    let ban = false
    for (var x = 0; x < game.length; x++) {
        position = game[x].findIndex(r => r == "m")
        if (position != -1) {
            break
        }
    }
    switch (direction) {
        case "up":
            ban = game[x - 1]?.[position] == "*"
            break;
        case "down":
            ban = game[x + 1]?.[position] == "*"
            break;
        case "right":
            ban = game[x][position + 1] == "*"
            break;
        case "left":
            ban = game[x][position - 1] == "*"
            break;
    }
    return ban
}