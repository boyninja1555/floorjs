export {}
declare global {
    interface Window {
        $(query: string): any
    }
}
