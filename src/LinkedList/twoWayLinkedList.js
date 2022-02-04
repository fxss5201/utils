class twoWayNode {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

/**
 * 双向链表
 */

class twoWayLList {
  constructor() {
    this.head = new twoWayNode('head')
    this.pos = 0
  }

  find(item) {
    let currNode = this.head
    while (currNode && currNode.element !== item) {
      currNode = currNode.next
    }
    return (currNode && currNode.element === item) ? currNode : null
  }

  findLast() {
    let currNode = this.head
    while (currNode && currNode.next !== null) {
      currNode = currNode.next
    }
    return currNode
  }

  findRight(item) {
    let currNode = this.findLast()
    while (currNode && currNode.element !== item) {
      currNode = currNode.prev
    }
    return (currNode && currNode.element === item) ? currNode : null
  }

  insert(newElement, item) {
    const newNode = new twoWayNode(newElement)
    const currNode = this.find(item)
    if (currNode) {
      newNode.next = currNode.next
      newNode.prev = currNode
      currNode.next = newNode
      return true
    } else {
      return false
    }
  }

  remove(item) {
    const currNode = this.find(item)
    if (currNode) {
      currNode.prev.next = currNode.next
      currNode.next.prev = currNode.prev
      currNode.next = null
      currNode.prev = null
      return true
    } else {
      return false
    }
  }

  display() {
    let currNode = this.head
    let res = []
    while (currNode.next !== null) {
      res.push(currNode.next.element)
      currNode = currNode.next
    }
    return res
  }

  displayRight() {
    return this.display().reverse()
  }

  displayString() {
    return this.display().join()
  }

  displayRightString() {
    return this.displayRight().join()
  }

  length() {
    return this.display().length
  }

  show() {
    let currNode = this.head.next
    let num = this.pos
    while (num > 0) {
      currNode = currNode.next
      num--
    }
    return currNode
  }

  advance(number) {
    this.pos += number
    let length = this.length() - 1
    if (this.pos > length) {
      this.pos = length
    }
    return this.show()
  }
  
  back(number) {
    this.pos -= number
    if (this.pos < 0) {
      this.pos = 0
    }
    return this.show()
  }
}