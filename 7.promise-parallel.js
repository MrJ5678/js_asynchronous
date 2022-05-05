function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.responseType = "json"
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

// ajax('/api/user.json')
// ajax('/api/user.json')

// let promise = Promise.all([ajax("/api/user.json"), ajax("/api/users.json")])

// promise.then(function (values) {
//   console.log(values);
// }).catch(e => console.log(e))

const request = ajax('/api/user.json')
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('timeout'))
  }, 500);
})

Promise.race([request, timeout])
  .then(value => console.log(value))
  .catch(e => console.log(e))