console.log('global start');

// 异步调用
//  1.宏任务
setTimeout(() => {
  console.log('timeout');
}, 0);

//  2.微任务
Promise.resolve()
.then(() => console.log('promise1'))
.then(() => {
  console.log('promise2')
})
.then(() => console.log('promise3'))
.then(() => console.log('promise4'))

console.log('global end');