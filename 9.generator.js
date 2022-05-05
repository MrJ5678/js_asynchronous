function * foo() {
  console.log('start');
  try {
    const res = yield 'foo'
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

const generator = foo()
const result = generator.next()
console.log(result);

// generator.next('bar')

generator.throw(new Error('Generator error'))