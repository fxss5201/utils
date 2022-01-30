/**
 * 列表
 */
// ES5
function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.length = length
  this.clear = clear
  this.toString = toString
  this.getElement = getElement
  this.insert = insert
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.hasPrev = hasPrev
  this.hasNext = hasNext
  this.currPos = currPos
  this.moveTo = moveTo
  this.find = find
  this.contains = contains
}

function find(element) {
  return this.dataStore.indexOf(element)
}

function contains(element) {
  return this.dataStore.includes(element)
}

function length() {
  return this.listSize
}

function clear() {
  this.pos = 0
  this.dataStore = []
}

function toString() {
  return this.dataStore.join()
}

function getElement() {
  return this.dataStore[this.pos]
}

function insert(element, after) {
  const insertPos = this.find(after)
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element)
    ++this.listSize
    return true
  }
  return false
}

function append(element) {
  this.dataStore.push(element)
  ++this.listSize
}

function remove(element) {
  const removePos = this.find(element)
  if (removePos > -1) {
    this.dataStore.splice(removePos, 1)
    --this.listSize
    return true
  }
  return false
}

function front() {
  this.pos = 0
}

function end() {
  this.pos = this.listSize - 1
}

function prev() {
  if (this.pos > 0) {
    --this.pos
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    ++this.pos
  }
}

function hasPrev() {
  return this.pos > 0
}

function hasNext() {
  return this.pos < this.listSize - 1
}

function currPos() {
  return this.pos
}

function moveTo(pos) {
  if (pos <= this.listSize - 1) {
    this.pos = pos
    return true
  }
  return false
}

// ES6
class List6 {
  constructor() {
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
  }

  find(element) {
    return this.dataStore.indexOf(element)
  }
  
  contains(element) {
    return this.dataStore.includes(element)
  }
  
  length() {
    return this.listSize
  }
  
  clear() {
    this.pos = 0
    this.dataStore = []
  }
  
  toString() {
    return this.dataStore.join()
  }
  
  getElement() {
    return this.dataStore[this.pos]
  }
  
  insert(element, after) {
    const insertPos = this.find(after)
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element)
      ++this.listSize
      return true
    }
    return false
  }
  
  append(element) {
    this.dataStore.push(element)
    ++this.listSize
  }
  
  remove(element) {
    const removePos = this.find(element)
    if (removePos > -1) {
      this.dataStore.splice(removePos, 1)
      --this.listSize
      return true
    }
    return false
  }
  
  front() {
    this.pos = 0
  }
  
  end() {
    this.pos = this.listSize - 1
  }
  
  prev() {
    if (this.pos > 0) {
      --this.pos
    }
  }
  
  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos
    }
  }
  
  hasPrev() {
    return this.pos > 0
  }
  
  hasNext() {
    return this.pos < this.listSize - 1
  }
  
  currPos() {
    return this.pos
  }
  
  moveTo(pos) {
    if (pos <= this.listSize - 1) {
      this.pos = pos
      return true
    }
    return false
  }
}
