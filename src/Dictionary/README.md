# 字典

字典是一种以 键值对 形式存数数据的数据结构，`javaScript` 中的 `Object` 类就是以字典的形式设置的，所以使用 `Object` 类本身的特性实现字典 `Dictionary` 类。

## 属性及方法

| 列表 | 属性或方法 | 描述 |
|----|----|----|
| add | 方法 | `add(key, value)` 向字典中添加 键值对 |
| find | 方法 | `find(key)` 从字典中查找 `key` 键对应的值，找不到则返回 `undefined` |
| remove | 方法 | `remove(key)` 从字典中删除 `key` 键 |
| getKeys | 方法 | `getKeys()` 获取字典中的所有 `key` |
| getKeysSort | 方法 | `getKeysSort()` 获取字典中的所有 `key`，并使用 `sort` 排序 |
| count | 方法 | `count()` 返回字典中 键值对 的个数 |
| showAll | 方法 | `showAll()` 将字典中的所有 键值对 转换为字符串，以 `,` 分隔 |
| showAllSort | 方法 | `showAllSort()` 将字典中的所有键按照 `sort` 排序，之后将所有 键值对 转换为字符串，以 `,` 分隔 |
| clear | 方法 | `clear()` 清空字典 |
