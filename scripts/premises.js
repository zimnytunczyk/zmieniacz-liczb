
console.log('start')
resolved = Promise.resolve()
//rejected = Promise.reject()

resolved.then(() => {
  return Promise.reject()
}).then(() => console.log('REJECTED2 RESOLVED'), (e) => console.log('REJECTED2 ' + e))

//rejected.then(() => console.log('REJECTED RESOLVED'), (e) => console.log('REJECTED ' + e))
console.log('end')
