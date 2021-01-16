module.exports = (value) => {
	let number = parseFloat(value.replace(/,/g, ''))
	return parseInt(number)
}