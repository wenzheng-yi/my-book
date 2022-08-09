const x = 1
function f(x = 4, y = function () { x = 3; console.log(x) }) {
  console.log(x)
  var x = 2
  y()
  console.log(x)
}
f()
console.log(x)


/*
1、上面代码输出的是什么
undefined
3
2
1

2、如果把var x = 2 注释掉，输出的又是什么
undefined
3
3
1

3、如果把f函数的第一个参数x 改成xx, 输出的又是什么
报错

4、如果把f函数的第一个参数x设置了默认值4，输出的又是什么
4
3
2
1
*/
