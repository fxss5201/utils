/**
 * 简单队列
 */
// ES5
function Queue(data = []) {
  this.dataStore = data
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.clear = clear
  this.length = length
  this.empty = empty
}

function enqueue(element) {
  this.dataStore.push(element)
}

function dequeue() {
  return this.dataStore.shift()
}

function front() {
  return this.dataStore[0]
}

function back() {
  return this.dataStore[this.length() - 1]
}

function toString() {
  return this.dataStore.join()
}

function clear() {
  this.dataStore = []
}

function length() {
  return this.dataStore.length
}

function empty() {
  return !this.dataStore.length
}

// ES6
class Queue6 {
  constructor(data = []) {
    this.dataStore = data
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  dequeue() {
    return this.dataStore.shift()
  }

  front() {
    return this.dataStore[0]
  }

  back() {
    return this.dataStore[this.length() - 1]
  }

  toString() {
    return this.dataStore.join()
  }

  clear() {
    this.dataStore = []
  }

  length() {
    return this.dataStore.length
  }

  empty() {
    return !this.dataStore.length
  }
}