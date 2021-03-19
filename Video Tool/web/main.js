var msgElement = document.getElementById('msg')
var loadingButton = document.getElementById('loading')
var submitButton = document.getElementById('submit')
var ASINError = document.getElementById('ASINError')
var MarketplaceError = document.getElementById('MarketplaceError')
var asinBox = document.getElementById('asin')
var marketplaceBox = document.getElementById('marketplace')

document.getElementById('my-form').addEventListener('submit', function generateData(e) {
	e.preventDefault()
	msgElement.innerText = ''
	let asin = asinBox.value
	let marketplace = marketplaceBox.value
	if(asin && marketplace){
		eel.start_driver(asin, marketplace)(viewMessage)
		loadingButton.style.display = 'block'
		submitButton.style.display = 'none'
	}
	else{
		ASINError.innerHTML = 'Cannot be empty'
		MarketplaceError.innerHTML = 'Cannot be empty'
	}
})

function viewMessage(msg) {
	asinBox.value = ''
	msgElement.innerText = msg
	msgElement.style.color = 'green'
	loadingButton.style.display = 'none'
	submitButton.style.display = 'block'
}