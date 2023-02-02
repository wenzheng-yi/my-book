let strAry = [1, '1', 2, '2', 1, 1]
// 查找’2‘
console.log(strAry.indexOf(1))
console.log(strAry.indexOf('1'))

console.log(strAry.findIndex((e) => e === 1))
console.log(strAry.findIndex((e) => e === '1'))

let objAry = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
]
// 查找{a:1,b:2}
console.log(objAry.findIndex((e) => e.a === 1))
console.log(objAry.indexOf({ a: 1, b: 2 }))

// 基于指针的查找
let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4 }
let newObjAry = [obj1, obj2]
console.log(newObjAry.indexOf(obj1))
console.log(newObjAry.indexOf(obj2))
console.log(newObjAry.findIndex((e) => e.a === 1))
