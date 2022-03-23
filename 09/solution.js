function groupBy(collection, it) {
    return collection.reduce(function (acc, el) {
        (acc[typeof it == "string" ? el[it] : it(el)] = acc[typeof it == "string" ? el[it] : it(el)] || []).push(el);
        return acc;
    }, {});
}