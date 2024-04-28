class HashTable {
    constructor() {
        this.hashTable = [];
    }

    hash(key) {
        let hashCode = 0;
        let moduloResult = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            moduloResult += hashCode % 16;
        }

        moduloResult %= 16;

        return moduloResult;
    }
    
    set(key, value) {
        let bucketNumber = this.hash(key);
        this.hashTable[bucketNumber] = value;
    }

    has(key) {
        let bucketNumber = this.hash(key);
        if (this.hashTable[bucketNumber] != null) return true;
        else return false;
    }

    get(key) {
        let bucketNumber = this.hash(key);
        if (this.has(key)) return this.hashTable[bucketNumber];
        else return null;
    }

    remove(key) {
        if (this.has(key)) {
            let bucketNumber = this.hash(key);
            this.hashTable[bucketNumber] = undefined;
            return true;
        } else return false;
    }

    length() {
        let counter = 0;
        this.hashTable.forEach(element => {
            if (element != undefined) {
                counter++;
            }
        });

        return counter;
    }

    clear() {
        this.hashTable = [];
    }

    keys() {
        let keys = [];
        this.hashTable.forEach((element, i) => {
            if (element != undefined) {
                keys.push(i);
            }
        });
        
        return keys;
    }

    values() {
        let values = [];
        this.hashTable.forEach((element) => {
            if (element != undefined) {
                values.push(element);
            }
        });
        
        return values;
    }
}

let ht1 = new HashTable();
ht1.set("Artem", 1);
ht1.set("Barbara", 2);
ht1.set("Carlos", 3);

ht1.remove("Artem");
let values = ht1.values();
console.log(values);
