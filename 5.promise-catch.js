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

// cache 是 then 的别名
// ajax("/api/user.json").then(function (value) {
//   console.log('onFullfilled', value);
// }).catch(function(error) {
//   console.log('onRejected', error);
// })
// .then(undefined, function (error) {
//   console.log('onFullfilled', error);
// })

ajax("/api/user.json").then(function (value) {
  console.log('onFullfilled', value);
  return ajax("/api/users.json")
}, function (error) {
  console.log(error);
}).catch(function (err) {
  console.log(err);
})