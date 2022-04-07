class HashTable {
    constructor(arrLen=53) {
        this.table = new Array(arrLen);
    }
    //used an underscore to indicate that the method is private to the class HashTable and should not be used outside of the class
    _hash(val) {
        let PRIME = 31;
        let key = 0;
        
        for (let i=0; i < val.length; i++) {
            key = (key * PRIME + val.charCodeAt(i)) % this.table.length;
        }
        return key;
    }
}

const ht = new HashTable();