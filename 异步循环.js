const asyncUppercase = item =>
    new Promise(resolve =>
        setTimeout(
            () => resolve(item),
            item * 1000
        )
    );

const items = [1, 2, 3];

// 并行
// Promise.all(items.map(e => asyncUppercase(e))).then(res => {
//     console.log(res)
// })

//串行1
// async function main() {
//     for (let i = 0; i < items.length; i++) {
//         let res = await asyncUppercase(items[i])
//         console.log(res)
//     }
//     console.log('完成')
// }
// main()

//串行2
// let index = 0
// function run(){
//    let e = items[index]
//    if(e){
//        asyncUppercase(e).then(res=>{
//            console.log(res)
//            index++
//            run()
//        })
//    }
// }
// run()
