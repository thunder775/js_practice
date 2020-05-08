// Design and implement a data structure for Least Recently Used (LRU) cache
//. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if 
//the key exists in the cache, otherwise return -1.

// put(key, value) - Set or insert the value if the key is not already present.
// When the cache reached its capacity, it should invalidate the least recently used item before
// inserting a new item.

// class LRUCache {
//     constructor(capacity) {
//         this.cache = []
//         this.read = 0
//         this.capacity = capacity
//     }
//     get(key) {
//         for (var i = 0; i < this.capacity; i++) {
//             if (this.cache[i][0] == key) {
//                 if (i == this.read) {
//                     this.read++
//                     if (this.read >= this.capacity) {
//                         this.read = 0
//                     }
//                 }
//                 return this.cache[i][1]
//             }
//         }
//         if (this.read >= this.capacity) {
//             this.read = 0
//         }
//         return -1
//     }
//     put(key, value) {
//         if (this.cache.length < this.capacity) {
//             this.cache.push([key, value])
//             console.log(this.cache)
//         } else {
//             console.log(this.cache[this.read])
//             this.cache[this.read] = [key, value]
//             this.read++
//             if (this.read >= this.capacity) {
//                 this.read = 0
//             }
//         }
//     }
// }
// var cache = new LRUCache(2);

// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1));       // returns 1
// cache.put(3, 3);    // evicts key 2
// console.log(cache.get(2));       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// console.log(cache.get(1));       // returns -1 (not found)
// console.log(cache.get(3));       // returns 3
// console.log(cache.get(4));       // returns 4
class LRUCache {
    constructor(capacity) {
        this.cache = []
        this.priorityCount = 0
        this.capacity = capacity
    }
    get(key) {
        for(var i = 0 ;i<this.capacity;i++){
            if(key==this.cache[i][0]){
                this.cache[i][2]= this.priorityCount
                this.priorityCount++
                this.cache.sort((a, b) => (a[2] > b[2]) ? -1 : 1)
                return this.cache[i][1]
            }
        }
        return -1
    }
    put(key, value) {
        if (this.cache.length < this.capacity) {
            this.cache.push([key, value, this.priorityCount])
            this.priorityCount++
            this.cache.sort((a, b) => (a[2] > b[2]) ? -1 : 1)
            // console.log(this.cache)
        } else {
            this.cache.pop()
            this.cache.push([key, value, this.priorityCount])
            this.priorityCount++
            this.cache.sort((a, b) => (a[2] > b[2]) ? -1 : 1)
            // console.log(this.cache)    
        }
    }
}

var cache1 = new LRUCache(4)
console.log(cache1.cache)
cache1.put(1, 1);
console.log(cache1.cache)
cache1.put(2, 2);
console.log(cache1.cache)
cache1.put(3, 3);
console.log(cache1.cache)
cache1.put(4, 4);
console.log(cache1.cache)
cache1.get(2)
console.log(cache1.cache)
cache1.get(3)
console.log(cache1.cache)
cache1.get(1);
console.log(cache1.cache)
cache1.put(8, 8);
console.log(cache1.cache)

