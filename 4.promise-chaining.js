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

// let promise = ajax("/api/user.json")
// let promise2 = promise.then(
//   function (value) {
//     console.log('onFullfilled', value);
//   },
//   function (error) {
//     console.log('onRejected', error);
//   }
// )
// console.log(promise2);
ajax("/api/user.json")
  .then(function (value) {
    console.log(111);
    return ajax("/api/user.json")
  })
  .then(function (value) {
    console.log(222);
    console.log(value);
    return ajax("/api/user.json")
  })
  .then(function (value) {
    console.log(333);
    return 'foo'
  })
  .then(function (value) {
    console.log(value);
  })