const ratingState = document.querySelector('.rating-state')
const thankYouState = document.querySelector('.thank-you-state')

const submitBtn = document.querySelector('.form__button')

submitBtn.addEventListener('click', (e) => {
	e.preventDefault()

	const rating = document.querySelector('input[type="radio"]:checked').value
	ratingState.style.display = 'none'

	const result = document.querySelector('.ty__rating')
	result.textContent = `You selected ${rating} out of 5`

	thankYouState.style.display = 'block'
})
