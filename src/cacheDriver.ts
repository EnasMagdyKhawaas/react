export type CacheDriverInterface = {
    /**
     * Set cache into storage
     * @param {string} key
     * @param {any} value
     */
    set(key: string, value: any): void;
  
    /**
     * Get value from cache engine, if key does not exist return default value
     * @param {string} key
     * @param {any} defaultValue
     */
    get(key: string, defaultValue: any): any;
  
    /**
     * Determine whether the cache engine has the given key
     *
     * @param {string} key
     * @returns {boolean}
     */
    has(key: string): boolean;
  
    /**
     * Remove the given key from the cache storage
     *
     * @param  {string} key
     */
    remove(key: string): void;
    /**
     * Set prefix key
     */
    setPrefixKey(key: string): void;
    /**
     * Get prefix key
     */
    getPrefixKey(): string;
};

export function setChache(key: string, value: any ) {
    localStorage.setItem(key, value);
}

export function getChache(key: string, defaultValue: any ) {
    let value = localStorage.getItem(key);
    return key ? value : defaultValue;
}

export function hasKey(key: string ) {
    if(localStorage.getItem(key) === null) {
        return false;
    }
    else {
        return true;
    }
}

export function remove(key: string ) {
    localStorage.removeItem(key);
}