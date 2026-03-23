export { }
declare global {
    interface Window {
        /**
         * Gets the currently active theme. See `window.loadTheme()` for loading from local storage.
         * @returns First active theme found (dark/light)
         */
        getTheme(): "dark" | "light" | null

        /**
         * Sets the currently active theme. See `window.saveTheme()` for saving to local storage.
         * @param {"dark" | "light"} theme Theme to activate (dark/light)
         */
        setTheme(theme: "dark" | "light"): void

        /**
         * Loads the stored theme from local storage. See `window.getTheme()` for getting the currently active theme.  
         * Does not return anything. Instead uses `window.setTheme("theme")`
         */
        loadTheme(): void

        /**
         * Saves the currently active theme from `window.getTheme()` to local storage. Load with `window.loadTheme()`
         */
        saveTheme(): void
    }
}
