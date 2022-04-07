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

    set(key, value) {
        const hashedKey = this._hash(key);

        if(!this.table[hashedKey]) {
            this.table[hashedKey] = [];
            this.table[hashedKey].push([key, value])
        } else {
            this.table[hashedKey].push([key, value]);
        }
        return this;
    }

    get(key) {
        let hashedKey = this._hash(key);
        if(!this.table.length) return undefined;
        if (this.table[hashedKey].length >= 1) {
            for (let i=0; i< this.table[hashedKey].length; i++) {
                if (key === this.table[hashedKey][i][0]) {
                    return this.table[hashedKey][i];
                }
            }
        }
        return false;
    }

    keys() {
        let result = [];

        for (let i = 0; i < this.table.length; i ++) {
            if (this.table[i].length) {
                for (let j=0; j < this.table[i].length; j++) {
                    result.push(this.table[i][j][0]);
                }
            }
        }

        return result;
    }
}

const ht = new HashTable();
ht.set("riker", 4);
ht.set("picard", 6);
ht.set("worf", 3);
ht.set("data", 2);