module.exports = (arr, method) => {
  if (method === 'sum') {
    let sum = arr.reduce((a, b) => {
      return a + b
    }, 0)

    return sum
  }
}
