# JavaScript 常用技巧

# 字符串

## toUpperCase() / toLowerCase()

转换大小写

## concat()

*`string*.concat(*string1*, *string2*, ..., *stringX*)`

连接两个或多个字符串。

该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串。

## endWith() / startsWith()

```java
string.endsWith(searchvalue, length)
string.startsWith(searchvalue, start)

searchvalue: 要搜索的子字符串。
length: 设置字符串的长度。默认值为原始字符串长度 string.length。
start: 可选，查找的开始位置，默认为 0。
```

判断当前字符串是否是以指定的子字符串结尾 / 开始 的（区分大小写）。

## indexOf() / lastIndexOf()

返回某个指定的字符串值在字符串中 首次/最后 出现的位置。

## includes()

查找字符串中是否包含指定的子字符串。

## replace()

```java
string.replace(searchvalue,newvalue)
```

在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

该方法不会改变原始字符串。

## slice()

`slice(start, end)`方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分。

start 参数字符串中第一个字符位置为 0, 第二个字符位置为 1, 以此类推，如果是负数表示从尾部截取多少个字符串，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。

end 参数如果为负数，-1 指字符串的最后一个字符的位置，-2 指倒数第二个字符，以此类推。

## substring()

```java
*string*.substring(from, to)
```

用于提取字符串中介于两个指定下标之间的字符。

| 参数 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| from | 必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。 |
| to   | 可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。 |

# 数组

## push()

在数组的末尾添加新的元素

## pop()

删除数组的最后一个元素

## shift()

删除数组的第一个元素

## unshift()

**`unshift()`** 方法将指定元素添加到数组的开头，并返回数组的新长度。

## slice()

```java
slice()
slice(start)
slice(start, end)
```

**`slice()`** 方法返回一个新的数组对象，这一对象是一个由 `start` 和 `end` 决定的原数组的[浅拷贝](https://developer.mozilla.org/zh-CN/docs/Glossary/Shallow_copy)（包括 `start`，不包括 `end`），其中 `start` 和 `end` 代表了数组元素的索引。原始数组不会被改变。

## splice()

**`splice()`** 方法通过移除或者替换已存在的元素和/或添加新元素[就地](https://zh.wikipedia.org/wiki/原地算法)改变一个数组的内容。

要创建一个删除和/或替换部分内容而不改变原数组的新数组，请使用 `[toSpliced()](<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced>)`。要访问数组的一部分而不修改它，参见 `[slice()](<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice>)`。

```java
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

start: 从 0 开始计算的索引，表示要开始改变数组的位置，它会被转换成整数。
deleteCount: 一个整数，表示数组中要从 start 开始删除的元素数量。
item1, …, itemN 可选 : 从 start 开始要加入到数组中的元素。
```

## fill()

```java
fill(value)
fill(value, start)
fill(value, start, end)
```

**`fill()`** 方法用一个固定值填充一个数组中从起始索引（默认为 `0`）到终止索引（默认为 `array.length`）内的全部元素。它返回修改后的数组。

## filter()

```java
filter(callbackFn)
filter(callbackFn, thisArg)
```

**`filter()`** 方法创建给定数组一部分的[浅拷贝](https://developer.mozilla.org/zh-CN/docs/Glossary/Shallow_copy)，其包含通过所提供函数实现的测试的所有元素。

## includes()

```java
includes(searchElement)
includes(searchElement, fromIndex)
```

**`includes()`** 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。

## map()

```java
map(callbackFn)
map(callbackFn, thisArg)
////////////////////////////////////////
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

**`map()`** 方法**创建一个新数组**，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

## reduce()

**`reduce()`** 方法对数组中的每个元素按序执行一个提供的 **reducer** 函数，每一次运行 **reducer** 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被用作初始值，迭代器将从第二个元素开始执行（即从索引为 1 而不是 0 的位置开始）。

```java
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10
```

reducer 逐个遍历数组元素，每一步都将当前元素的值与前一步的结果相加（该结果是之前所有步骤结果的总和）——直到没有更多需要相加的元素。

```java
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

## **reduceRight()**

**`reduceRight()`** 方法对累加器（accumulator）和数组的每个值（按从右到左的顺序）应用一个函数，并使其成为单个值。

```java
const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

# Math

## round()

四舍五入取整

## ceil()

向上取整

## floor()

向下取整

## trunc()

将数字的小数部分去掉，只保留整数部分。

## PI

```java
var x = Math.PI; // 返回 PI 3.14159
```

## E

算术常量 e，即自然对数的底数（约等于2.718）。

## sqrt()

平方根

## abs()

绝对值

## log()

返回数的自然对数（底为e）

## max()

返回 x,y,z,...,n 中的最高值

## min()

返回 x,y,z,...,n中的最低值

## pow()

`pow(x, y)` 返回 x 的 y 次幂

## random()

返回 0 - 1 之间的随机数