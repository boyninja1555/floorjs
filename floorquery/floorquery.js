const operatorLength = 2
const operatorEnd = "]"
window.$ = query => {
    if (query.length < operatorLength + 1) throw new Error(`Attempted query without an operator and ${operatorEnd}`)
    let params = query.slice(operatorLength + 1)
    if (query[3] !== operatorEnd) throw new Error(`Attempted query without a ${operatorEnd} after the operator`)
    switch (query.slice(0, operatorLength)) {
        case "el":
            return document.querySelector(params)
        case "EL":
            return document.querySelectorAll(params)
        default:
            throw new Error("Attempted query with invalid operator")
    }
}
