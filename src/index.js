console.log('%c HI', 'color: firebrick')

// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
  .then(res => res.json())
  .then(data => {
    data.message.forEach(imageUrl => {
      const img = document.createElement('img')
      img.src = imageUrl
      document.getElementById('dog-image-container').appendChild(img)
    })
  })

// Challenge 2
const breedUrl = "https://dog.ceo/api/breeds/list/all"
fetch(breedUrl)
  .then(res => res.json())
  .then(data => {
    const breeds = Object.keys(data.message)
    const ul = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
      const li = document.createElement('li')
      li.textContent = breed
      ul.appendChild(li)
    })

    // Challenge 3
    ul.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        e.target.style.color = 'red'
      }
    })

    // Challenge 4
    const dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('change', (e) => {
      const letter = e.target.value
      const lis = ul.querySelectorAll('li')
      lis.forEach(li => {
        if (li.textContent.startsWith(letter)) {
          li.style.display = ''
        } else {
          li.style.display = 'none'
        }
      })
    })
  })