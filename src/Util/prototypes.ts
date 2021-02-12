interface Array<T> {
    toDictionary(key: keyof T): groupedData<T>
}


// this will be ran because webpack is setup to run this file
if(Array.prototype.toDictionary===undefined) {
    Array.prototype.toDictionary = function<T>(this: Array<T>, key: keyof T)
    {
        const defaultValue: groupedData<T> = {}
        if(this.length===0) return defaultValue
        return this.reduce((accumulator, current) => {
            const key_string_value = current[key]
            if(key_string_value && typeof key_string_value === 'string') accumulator[key_string_value] = current
            else throw "could not get value from the string specified!"
            return accumulator
        }, defaultValue)
    }
}
