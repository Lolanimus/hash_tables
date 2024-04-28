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


}

let ht1 = new HashTable();
ht1.set("Artem", 1);
ht1.set("Barbara", 2);
ht1.set("Carlos", 3);

console.log(ht1);