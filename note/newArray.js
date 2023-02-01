let a = Array.from({length:3}, () => [])
a[0].push(2)
console.log(a)
console.log(a[1] === a[2])

let b = new Array(3).fill([])
b[0].push(2)
console.log(b)
console.log(b[1] === b[2])