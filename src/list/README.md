# 列表

列表提供两种实现方式，一种是 ES5 构造函数，一种是 ES6 `Class` 。

## 参数

接收的参数为数组类型。

## 属性及方法

列表的抽象数据类型定义

| 列表 | 属性或方法 | 描述 |
|----|----|----|
| listSize | 属性 | 列表的元素个数 |
| pos | 属性 | 列表的当前位置 |
| find | 方法 | 在列表中查找某一元素在列表中的位置（从0开始计数），未找到则返回 -1 |
| contains | 方法 | 判断给定值是否在列表中，返回 `true/false` |
| length | 方法 | 列表中元素的个数，返回值为 number |
| clear | 方法 | 清空列表中的所有元素 |
| toString | 方法 | 返回列表的字符串形式 |
| getElement | 方法 | 返回当前位置的元素 |
| insert | 方法 | 向列表中插入一个元素, `insert(element, after)`，`element` 表示要插入的元素，`after` 表示在 `after` 元素之后插入，返回 `true/false` ，`true` 表示插入成功，`false` 插入失败 |
| append | 方法 | 在列表的末尾添加新元素，`append(element)`，`element` 表示要添加的新元素 |
| remove | 方法 | 从列表中删除元素，`remove(element)`，`element` 表示要删除的元素，，返回 `true/false` ，`true` 表示删除成功，`false` 删除失败 |
| front | 方法 | 将列表的当前位置移动到第一个元素 |
| end | 方法 | 将列表的当前位置移动到最后一个元素 |
| prev | 方法 | 将当前位置前移一位，如果当前 `pos === 0`，执行 `prev()` 方法之后依然是 pos 为 0 |
| next | 方法 | 将当前位置后移一位，如果当前 `pos === this.listSize - 1`，执行 `next()` 方法之后依然是 pos 为 `this.listSize - 1` |
| hasPrev | 方法 | 判断是否存在前一位 |
| hasNext | 方法 | 判断是否存在后一位 |
| currPos | 方法 | 返回列表的当前位置，返回 number |
| moveTo | 方法 | 将当前位置移动到指定位置，在 `0 ~ this.listSize -1` 范围内成功移动时返回 `true` ，当大于 `this.listSize - 1` 或者小于 `0` 时，返回 `false`  |
