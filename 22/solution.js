function countDecorations(bigTree) {
    let nodes = 0;
    const getNode = obj => {
        nodes += obj.value
        if (obj.left != null) {
            getNode(obj.left)
        }
        if (obj.right != null) {
            getNode(obj.right)
        }
    }
    getNode(bigTree)
    return nodes
}