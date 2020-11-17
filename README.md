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

> What is the difference between ArrayList and HashMap?
- ArrayList are re-sizable array implementation of the List interface. It maintains the insertion order and can have duplicate values as well.
- HashMap are hash table based implementation of the Map interface. It stores the data in form of key-value pair where keys must be unique. No order of data is maintained. It provides CONSTANT TIME performance for the basic operations

> When should you use HashMap over ArrayList?
- Use HashMap when you can identify your data with some unique key (data that can be processed in key value pair).
- When no index based operations is required, instead key based operations are preferred.
- Use HashMap when their major requirements are only retrieving or modifying data's based on Key. (In Web apps username are stored as a key and user data is stored as a value in a HashMap, for faster retrieval of user data corresponding to a username)