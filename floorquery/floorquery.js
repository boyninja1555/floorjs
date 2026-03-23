const operatorLength = 2
const operatorEnd = "]"
window.$ = query => {
    if (query.length < operatorLength + 1) throw new Error(`Attempted query without an operator and ${operatorEnd}\n> ${query}`)
    let params = query.slice(operatorLength + 1)
    if (query[operatorLength] !== operatorEnd) throw new Error(`Attempted query without a ${operatorEnd} after the operator\n> ${query}`)
    switch (query.slice(0, operatorLength)) {
        case "el": // Gets an element by query
            return document.querySelector(params)
        case "EL": // Gets all elements by query
            return document.querySelectorAll(params)
        case "ls": // Reads from local storage
            return localStorage.getItem(params)
        case "LS": // Writes to local storage
            if (!params.includes(";")) throw new Error("LS query requires `key;value` as params")
            const [lkey, lvalue] = params.split(";", 2)
            localStorage.setItem(lkey, lvalue)
            return
        case "ss": // Reads from session storage
            return sessionStorage.getItem(params)
        case "SS": // Writes to session storage
            if (!params.includes(";")) throw new Error("SS query requires `key;value` as params")
            const [skey, svalue] = params.split(";", 2)
            localStorage.setItem(skey, svalue)
            return
        default:
            throw new Error(`Attempted query with invalid operator!\n> ${query}`)
    }
}
