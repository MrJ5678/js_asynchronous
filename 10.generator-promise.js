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

function * main() {
  try {
    const user = yield ajax('/api/user.json')
    console.log(user);

    const user2 = yield ajax('/api/user.json')
    console.log(user2);
  } catch (error) {

  }
}

// const g = main()
// const result = g.next()
// result.value.then(data => {
//   const result2 = g.next(data)
//   if(result2.done)  return

//   result2.value.then(data => {
//     g.next(data)
//   })
// })

// function co(generator) {
//   const g = generator()

//   function handleResult(result) {
//     if(result.done) return
//     result.value.then(data => {
//       handleResult(g.next(data))
//     }, error => {
//       g.throw(new Error(error))
//     })
//   }

//   handleResult(g.next())
// }

// co(main)

async function main() {
  try {
    const user = await ajax('/api/user.json')
    console.log(user);

    const user2 = await ajax('/api/user.json')
    console.log(user2);
  } catch (error) {
    console.log(error);
  }
}

const promise = main()
promise.then(() => {
  console.log('all completed');
})