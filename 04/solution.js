function createXmasTree(height) {
    let tree = "";
    let conBlank = height - 1;
    let blank = "_"
    let branch = "*";
    let repeat = -1;
    for (let x = 0; x < height; x++) {
        if (x > 0) {
            tree += "\n"
        }
        tree += blank.repeat(conBlank) + branch.repeat(repeat += 2) + blank.repeat(conBlank--);
    }
    tree += ("\n" + blank.repeat(repeat / 2) + "#" + blank.repeat(repeat / 2)).repeat(2)
    return tree
}