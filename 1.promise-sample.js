const promise = new Promise((resolve, reject) => {
  // resolve(100)

  reject(new Error('promise rejected'))
})

promise.then(value => {
  console.log("resolved", value)
}, err => {
  console.log('rejected', err);
})

console.log('end');