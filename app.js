class HashTable {
    constructor() {
        this.hashTable = [];
        this.maxBuckets = 16;
        this.capacity = 0;
    }

    hash(key) {
        let hashCode = 0;
        let moduloResult = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            moduloResult += hashCode % this.maxBuckets;
        }

        moduloResult %= this.maxBuckets;

        return moduloResult;
    }
    
    set(key, value) {
        const loadFactor = 0.75;
        let bucketNumber = this.hash(key);
        this.hashTable[bucketNumber] = value;
        this.capacity++;
        if (this.capacity > (loadFactor * this.maxBuckets)) this.maxBuckets *= 2;
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

    entries() {
        let entries = [];
        this.hashTable.forEach((element, i) => {
            if (element != undefined) {
                let entry = [];
                entry.push(i, element);
                entries.push(entry);
            }
        });
        
        return entries;
    }
}

let ht1 = new HashTable();
ht1.set("Artem", 1);
ht1.set("Barbara", 2);
ht1.set("Carlos", 3);
ht1.set("Artemdd", 1);
ht1.set("Artessm", 1);
ht1.set("Artesdfm", 1);
ht1.set("Ardsfssatem", 1);
ht1.set("Artsdfaffdsem", 1);
ht1.set("Aredfsfsfsfsfstem", 1);
ht1.set("Art1232em", 1);
ht1.set("Arteasdm", 1);
ht1.set("222Artem", 1);
ht1.set("Arte333m", 1);
ht1.set("Arte333asdam", 1);
ht1.set("zzxczrte333m", 1);
ht1.set("Artasdasdasdsadasdasde333m", 10);
let entries = ht1.entries();
console.log(ht1);
