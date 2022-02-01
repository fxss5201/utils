/**
 * 栈
 */

// ES5
function stack(data = []) {
  this.dataStore = data
  this.top = data.length
  this.push = push
  this.pop = pop
  this.peek = peek
  this.clear = clear
  this.length = length
}

function push(element) {
  this.dataStore.push(element)
  this.top++
}

function pop() {
  this.top--
  return this.dataStore.pop()
}

function peek() {
  return this.top > 0 ? this.dataStore[this.top - 1] : undefined
}

function clear() {
  this.top = 0
  this.dataStore = []
}

function length() {
  return this.top
}

// ES6
class stack6 {
  constructor(data = []) {
    this.top = data.length
    this.dataStore = data
  }

  push(element) {
    this.dataStore.push(element)
    this.top++
  }
  
  pop() {
    this.top--
    return this.dataStore.pop()
  }
  
  peek() {
    return this.top > 0 ? this.dataStore[this.top - 1] : undefined
  }
  
  clear() {
    this.top = 0
    this.dataStore = []
  }
  
  length() {
    return this.top
  }
}
