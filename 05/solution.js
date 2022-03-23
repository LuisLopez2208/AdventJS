function daysToXmas(date) {
    const xMas = new Date('Dec 25, 2021')
    return Math.ceil((xMas.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}