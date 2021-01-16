module.exports = (method, index) => {
	const localData = JSON.parse(localStorage.getItem('grandTotal'))

	if (method === 'sum') {
		let sum = localData.reduce((a,b) => {
			return a + b
		}, 0)

		return sum

	} 

	if (method === 'sub') {
		localData.splice(index, 1)

		let sum = localData.reduce((a,b) => {
			return a + b
		}, 0)

		console.log(sum)
		return sum		
	}
}