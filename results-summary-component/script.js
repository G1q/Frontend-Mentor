import data from './data.json' assert { type: 'json' }

const list = document.querySelector('.card__summary--details')

data.forEach((item) => createCategory(item))

function createCategory(data) {
	const wrapper = document.createElement('li')
	wrapper.setAttribute('data-category', data.category.toLowerCase())
	const icon = document.createElement('img')
	icon.src = data.icon

	const title = document.createElement('span')
	title.classList.add('category__title')
	title.textContent = data.category

	const score = document.createElement('span')
	score.textContent = `${data.score} / 100`

	wrapper.append(icon, title, score)
	list.append(wrapper)
}
