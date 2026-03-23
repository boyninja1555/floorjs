export {}
declare global {
    interface Window {
        getTheme(): "dark" | "light" | null
        setTheme(theme: "dark" | "light"): void
        loadTheme(): void
        saveTheme(): void
    }
}
