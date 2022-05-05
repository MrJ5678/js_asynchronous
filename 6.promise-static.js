function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if(this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

// Promise.resolve('foo')
//   .then(function (value) {
//     console.log(value);
//   })

// let promise = ajax('/api/user.json')
// let promise2 = Promise.resolve(promise)
// console.log(promise === promise2);

Promise.resolve({
  then: function(resolve, reject) {
    resolve('foo')
  }
})
.then(function (value) {
  console.log(value);
})