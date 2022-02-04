class oneWayNode {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

/**
 * 单向链表
 */

class oneWayLList {
  constructor() {
    this.head = new oneWayNode('head')
    this.pos = 0
  }

  find(item) {
    let currNode = this.head
    while (currNode && currNode.element !== item) {
      currNode = currNode.next
    }
    return (currNode && currNode.element === item) ? currNode : null
  }

  findPrev(item) {
    let currNode = this.head
    while (currNode.next !== null && currNode.next.element !== item) {
      currNode = currNode.next
    }
    return (currNode && currNode.next && currNode.next.element === item) ? currNode : null
  }

  insert(newElement, item) {
    const newNode = new oneWayNode(newElement)
    const currNode = this.find(item)
    if (currNode) {
      newNode.next = currNode.next
      currNode.next = newNode
      return true
    } else {
      return false
    }
  }

  remove(item) {
    const prevNode = this.findPrev(item)
    const currNode = this.find(item)
    if (prevNode && currNode) {
      prevNode.next = currNode.next
      currNode.next = null
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

  displayString() {
    return this.display().join()
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
