'use strict';

const { HashMap } = require('./HashMap');

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  const lotr = new HashMap();

  const data = [
    { Hobbit: 'Bilbo' },
    { Hobbit: 'Frodo' },
    { Wizard: 'Gandalf' },
    { Human: 'Aragorn' },
    { Elf: 'Legolas' },
    { Maiar: 'The Necromancer' },
    { Maiar: 'Sauron' },
    { RingBearer: 'Gollum' },
    { LadyOfLight: 'Galadriel' },
    { HalfElven: 'Arwen' },
    { Ent: 'Treebeard' },
  ];
  data.forEach((obj) => {
    const key = Object.keys(obj)[0];
    lotr.set(key, obj[key]);
  });

  // hash map length is at 9, despite having 11 keys-value pairs due to collisions at Maiar and Hobbit
  // capacity value is at 24 due to Hashmap exceeding 50% of initial capacity of 8 (determined by imported Hashmap constructor) and was multiplied by SIZE_RATIO of 3.
  console.log('inserted data into lotr hashgMap = ', lotr);

  // Duplicate keys for both cases and was replaced with the value of the latter entry into Hashmap due to collisions happening with no appropriate solution
  console.log('key of Maiar = ', lotr.get('Maiar')); // Sauron
  console.log('key of Hobbit = ', lotr.get('Hobbit')); // Frodo
}

main();

// Find the output of the following code without running it first
const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10); // { 'Hello World' : 10 }
  map1.set(str2, 20); // { 'Hello World' : 20 } 
  let map2 = new HashMap();
  let str3 = str1; 
  let str4 = str2;
  map2.set(str3, 20); // { 'Hello World' : 20 }
  map2.set(str4, 10); // { 'Hello World' : 10 }

  console.log(map1.get(str1)); // should return 20
  console.log(map2.get(str3)); // should return 10
  // This function creates collisions so duplicate keys will overwrite previous data values
};

WhatDoesThisDo();