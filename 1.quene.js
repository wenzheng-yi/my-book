function quene(list) {
  list.reduceRight(
    (p, n) => () => n(p),
    () => {}
  )()
}

function task1(next) {
  setTimeout(() => {
    console.log(1)
    next()
  }, 1000)
}

function task2(next) {
  console.log(2)
  next()
}

function task3(next) {
  setTimeout(() => {
    next()
    console.log(3)
  }, 400)
}

// 题目：完善quene，使下方任务输出1 2 3
quene([task1, task2, task3]) // 1 2 3
