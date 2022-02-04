/**
 * 优先队列，带优先级的队列，代码中使用 code 表示，数值越大，优先级越高，默认优先级为 0
 * 优先级越高，提前出队列，优先级相同，则按照入队列的顺序出队列
 * 例如 医院 挂号，病重的会优先
 */
// ES6
class Element {
  constructor(name, code = 0) {
    this.name = name
    this.code = code
  }
}

class QueueComplex {
  constructor() {
    this.dataStore = []
  }

  enqueue(element) {
    const dataStore = this.dataStore
    let entry = dataStore.length
    for (let i = dataStore.length - 1; i >= 0; i--) {
      if (i - 1 >= 0) {
        if (element.code > dataStore[i].code && element.code <= dataStore[i - 1].code) {
          entry = i
        }
      } else {
        if (element.code > dataStore[i].code) {
          entry = i
        }
      }
    }
    this.dataStore.splice(entry, 0, element)
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
    const dataStore = this.dataStore
    let res = ''
    for (let i = 0, len = dataStore.length; i < len; i++) {
      res += `{ name: ${dataStore[i].name}, code: ${dataStore[i].code} }`
    }
    return res
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