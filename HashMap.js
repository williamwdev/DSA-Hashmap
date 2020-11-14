// implementing a hash map

class HashMap {
  constructor(initialCapacity=8) {
    this.length = 0; 
    this._hashTable = []; // holds all of the data
    this._capacity = initialCapacity; // capacity will grow in chunks as you resize to a larger array when the hash table is full. Helps cut down the number of memory allocations which need to take place
    this._deleted = 0;
  }

  static _hashString(string) { // takes a string and hashes it, outputting a number (djb2 algorithm)
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
}