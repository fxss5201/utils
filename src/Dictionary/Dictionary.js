class Dictionary {
  constructor() {
    this.dataStore = {}
  }

  add(key, value) {
    this.dataStore[key] = value
  }

  find(key) {
    return this.dataStore[key]
  }

  remove(key) {
    delete this.dataStore[key]
  }

  getKeys() {
    return Object.keys(this.dataStore)
  }

  getKeysSort() {
    return this.getKeys().sort()
  }

  count() {
    return this.getKeys().length
  }

  showAll() {
    let res = ''
    this.getKeys().forEach(key => {
      res += `,{key:'${key}',value:'${this.dataStore[key]}'}`
    })
    return res.slice(1)
  }

  showAllSort() {
    let res = ''
    this.getKeys().sort().forEach(key => {
      res += `,{key:'${key}',value:'${this.dataStore[key]}'}`
    })
    return res.slice(1)
  }

  clear() {
    this.getKeys().forEach(key => {
      delete this.dataStore[key]
    })
    this.dataStore = {}
  }
}