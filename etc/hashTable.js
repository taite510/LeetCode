const hashString = function(s, tableSize) {
  let hash = 17;
  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize
  }
  return hash
}

class HashTable {
  myTable = new Array(3343)
  setItem(key, value) {
    const i = hashString(key, this.myTable.length)
    if (this.myTable[i]) {
      this.myTable[i].push([key, value])
    } else {
      this.myTable[i] = [[key, value]]
    }
  }
  getItem(key) {
    const i = hashString(key, this.myTable.length)
    return this.myTable[i].find(x => x[0] === key)[1]
  }
}

let newHashTable = new HashTable();
newHashTable.setItem('firstName', 'taite')
newHashTable.setItem('lastName', 'jernigan')
newHashTable.setItem('age', 99)
newHashTable.setItem('height', 200)
console.log(newHashTable.myTable)
console.log(newHashTable.getItem('firstName'))
console.log(newHashTable.getItem('lastName'))
console.log(newHashTable.getItem('age'))
console.log(newHashTable.getItem('height'))