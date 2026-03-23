window.queryError = (message, operator, params) => {
    return new Error(`${message}\n > ${operator}   ${params}`)
}

window.$ = (operator, params) => {
    if (!operator) throw window.queryError("Attempted query without an operator!", operator, params)
    switch (operator) {
        case "el": // Gets an element by query
            return document.querySelector(params)
        case "EL": // Gets all elements by query
            return document.querySelectorAll(params)
        case "ls": // Reads from local storage
            return localStorage.getItem(params)
        case "LS": // Writes to local storage
            if (!params.includes(";")) throw window.queryError("Params must match pattern: key;value", operator, params)
            const [lkey, lvalue] = params.split(";", 2)
            localStorage.setItem(lkey, lvalue)
            return
        case "ss": // Reads from session storage
            return sessionStorage.getItem(params)
        case "SS": // Writes to session storage
            if (!params.includes(";")) throw window.queryError("Params must match pattern: key;value", operator, params)
            const [skey, svalue] = params.split(";", 2)
            localStorage.setItem(skey, svalue)
            return
        default:
            throw window.queryError("Attempted query with an invalid operator!", operator, params)
    }
}
