const themeClasses = ["dark", "light"]
const expectedThemeMessage = `Expected one of the following:\n${themeClasses.map(t => ` - ${t}`).join("\n")}`

/**
 * Gets the currently active theme. See `window.loadTheme()` for loading from local storage.
 * @returns First active theme found (dark/light)
 */
window.getTheme = () => {
    for (const className of document.documentElement.classList) {
        if (!themeClasses.includes(className)) continue
        return className
    }

    return null
}

/**
 * Sets the currently active theme. See `window.saveTheme()` for saving to local storage.
 * @param {"dark" | "light"} theme Theme to activate (dark/light)
 */
window.setTheme = theme => {
    if (!themeClasses.includes(theme)) throw new Error(`Attempted to set theme to "${theme}"! ${expectedThemeMessage}`)
    for (const themeClass of themeClasses) document.documentElement.classList.remove(themeClass)
    document.documentElement.classList.add(theme)
}

/**
 * Loads the stored theme from local storage. See `window.getTheme()` for getting the currently active theme.  
 * Does not return anything. Instead uses `window.setTheme("theme")`
 */
window.loadTheme = () => {
    const theme = localStorage.getItem("floorjs--theme")
    if (!theme) return
    if (!themeClasses.includes(theme)) throw new Error(`Attempted to load invalid theme "${theme}"! ${expectedThemeMessage}`)
    window.setTheme(theme)
}

/**
 * Saves the currently active theme from `window.getTheme()` to local storage. Load with `window.loadTheme()`
 */
window.saveTheme = () => {
    localStorage.setItem("floorjs--theme", window.getTheme())
}

const isDark = window.matchMedia("(prefers-color-scheme: dark)")
const storedTheme = localStorage.getItem("floorjs--theme")
if (storedTheme && themeClasses.includes(storedTheme)) window.setTheme(storedTheme)
else window.setTheme(isDark.matches ? "dark" : "light")
isDark.addEventListener("change", event => {
    window.setTheme(event.matches ? "dark" : "light")
    window.saveTheme()
})
