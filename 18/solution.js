function fixFiles(files) {
    const cont = {}
    return files.map(f => {
        if (cont[f] == undefined)
            cont[f] = -1
        cont[f] += 1
        return `${f}${cont[f] == 0 ? "" : "("+cont[f]+")"}`
    })
}