import shuffle from 'lodash/shuffle'

export const generateCards = () => {
  const images = []

  for (let i = 1; i < 9; i++) {
    images.push({
      id: i,
      imgUrl: `assets/img/${i}.jpg`,
      matched: false
    })
  }

  return shuffle([...images, ...images])
}

