export { }
declare global {
    /**
     * Maps operators to param type helpers.
     */
    type QueryMap = {
        el: { params: string; return: Element | null }
        EL: { params: string; return: NodeListOf<Element> }
        ls: { params: string; return: string | null }
        LS: { params: `${string};${string}`; return: void }
        ss: { params: string; return: string | null }
        SS: { params: `${string};${string}`; return: void }
    }

    /**
     * ### INTERNAL HELPER
     * 
     * Returns Error, used when a query-related problem happens. Fill in operator and params correctly for best debugging experience.
     * @param message Log message
     * @param operator Operator shown in debug section
     * @param params Params shown in debug section
     */
    function queryError(message: string, operator: string, params: string): Error

    /**
     * Shorthand syntax for many operations. Provided by FloorJS.
     * @param operator Typed operator which uses params
     * @param params Extra info optionally used by operator
     */
    function $<K extends keyof QueryMap>(operator: K, params: QueryMap[K]["params"]): QueryMap[K]["return"]
}
