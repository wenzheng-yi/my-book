function Material(classification, name, price) {
  this.class = classification
  this.name = name
  this.price = price

  let functions
  switch (classification) {
    case 'fan':
      functions = '给机器降温'
      break
    case 'cpu':
      functions = '提供数据计算能力'
    default:
      break
  }
  this.functions = functions
}

const fan = new Material('fan', 'windy007', 199)
// console.log(fan)

function cook(name) {
  if (name !== '番茄炒蛋') return '咱不做这个'
  // 买食材，4颗番茄，4个鸡蛋
  const tomatoes = Array.from({ length: 4 }, () => '番茄')
  const eggs = Array.from({ length: 4 }, () => '鸡蛋')
  // 把番茄切块, 每个切4小块
  const tomatoCube = tomatoes.map((item) => {
    return Array.from({ length: 4 }, () => '小' + item + '块')
  })
  // 把鸡蛋打碎
  const eggLiquid = eggs.length * 50 + 'ml鸡蛋液'
  // 煎鸡蛋
  const friedEgg = Array.from(
    { length: parseInt(eggLiquid) / 5 },
    () => '小煎蛋'
  )
  // 把番茄放下去炒熟
  const friedTomato = tomatoCube.flat().map((item) => {
    return '软烂的' + item
  })
  // 把煎好的鸡蛋放下去一同翻炒
  const tomatoEgg = friedEgg.concat(friedTomato)
  let i = 0
  while (i < 300) {
    const randomIndex = Math.floor(Math.random() * tomatoEgg.length)
    const theOne = tomatoEgg.splice(randomIndex, 1)[0]
    tomatoEgg.push(theOne)
    i++
  }
  // 装盘
  const plate = []
  while (tomatoEgg.length > 5) {
    plate.push(tomatoEgg.splice(0, 5))
  }
  plate.push(tomatoEgg)
  return plate
}

const cuisine = cook('番茄炒蛋')
console.log(cuisine)