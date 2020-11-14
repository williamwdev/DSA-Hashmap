# Data Structure - Hash Maps Review & Reference

## Overview

> What are hash maps?
- Unordered associations between keys and values (objects are just hash maps, with some additional prototype cleverness)

> What is hashing?
- The process of mapping a key to a position in the hash table

> What is a hash table? 
- A hash table is a storage that holds the records (key and any value associated with the key). 
- Hash maps require a has-table. The hash-table is usually implemented internally using an array. Each slot in the array holds a key-value pair or is empty (null)

> What is a hash function?
- A hash function maps keys to positions in the hash table.
- A good hash function attempts to distribute the keys as evenly as possible among slots in the hash table

> What is the main difficuly with hash maps?
- The prospect of collisions.
- Collisions happen if 2 unique keys hash to the same slot in the array.

> What are 2 ways to resolve collisions?
- Open addressing = when you have a collision, you hash the key to the empty slot nearest to where it should live.
- Seperate chaining = use linked lists to hash the keys that run into collision. The first slot contains the pointer to the head of the list. When a key collides with another, we use the next pointers to put the keys in a linked list.

