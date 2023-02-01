对刚看过的事件循环文章做一个小记录。

1. js引擎是单线程的

2. js的任务分为异步和同步。“异步”指的是一个任务不是连续完成的，先执行第一段，等准备好了，再执行第二段，第二段也成为回调；同步则是连贯完成的。

3. js的异步任务是非阻塞的。对于大多数多线程语言，当某个线程在执行异步任务时，等待过程中是不做任何事的。但js是单线程，如果也这么做，那么会有大量的空闲时间被浪费，所以，js采取了“异步任务回调通知”模式。当执行异步任务时，先去做其他的，等异步任务准备好了，再去执行回调。
   而实现这个“通知”的，正是事件循环，把异步任务的回调部分交给事件循环，等时机合适交还给JS线程执行。事件循环并不是JavaScript首创的，它是计算机的一种运行机制。
   事件循环是由一个队列组成的，异步任务的回调遵循先进先出，在JS引擎空闲时会一轮一轮地被取出，所以被叫做循环。

4. 根据队列中任务的不同，分为宏任务和微任务。
   事件循环由宏任务和在执行宏任务期间产生的所有微任务组成。完成当下的宏任务后，会立刻执行所有在此期间入队的微任务。
   这种设计是为了给紧急任务一个插队的机会，否则新入队的任务永远被放在队尾。区分了微任务和宏任务后，本轮循环中的微任务实际上就是在插队，这样微任务中所做的状态修改，在下一轮事件循环中也能得到同步。
   常见的宏任务有：script（整体代码）/setTimout/setInterval/setImmediate(node 独有)/requestAnimationFrame(浏览器独有)/IO/UI render（浏览器独有）
   常见的微任务有：process.nextTick(node 独有)/Promise.then()/Object.observe/MutationObserver

5. js怎么知道主线程执行栈为空呢？js引擎存在monitoring process进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去Event Queue那里检查是否有等待被调用的函数。
```javascript
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

// 注: process也是一种微任务
// 答案是：1 7 6 8 2 4 3 5 9 11 10 12
```