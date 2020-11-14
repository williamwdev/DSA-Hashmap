// implementing a hash map
"use strict";

class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = []; // holds all of the data
    this._capacity = initialCapacity; // capacity will grow in chunks as you resize to a larger array when the hash table is full. Helps cut down the number of memory allocations which need to take place
    this._deleted = 0;
  }

  static _hashString(string) {
    // takes a string and hashes it, outputting a number (djb2 algorithm)
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  // Adding items to a hash map. The set() function initially checks whether the load ratio is greater than the given maximum. If so it resizes the hash map using the private _resize() function. This has an O(1) best and average case, and an O(n) worst case (if collisions occur)
  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) { // MAX_LOAD_RATIO = keeps track of how full the hashmap is. When it is a certain % full, we move to a bigger hash table using the SIZE_RATIO so we reduce the number of collisions. Helps to improve the performance of value retrieval
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    const index = this._findSlot(key);

    if (!this._hashTable[index]) {
      this.length++;
    }
    this._hashTable[index] = {
      key,
      value,
      DELETED: false,
    };
  }

  // private helper function used to find the correct slot for a given key
  // best and avg-case performance for _findSlot() is O(1); assuming the hash function is good and the load ratio is suitable, then the chances of ocllisions should be low. Worst case is O(n), as you would have to linearly search through each slot.
  _findSlot(key) {
    const hash = HashMap._hashString(key); // calculate the hash of the key, and then uses the modulus to find a slot for the key within the current capacity
    const start = hash % this._capacity;

    // loops through the array, stopping when it finds the slot with a matching key or an empty slot
    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index]; 
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        return index;
      }
    }
  }
}
