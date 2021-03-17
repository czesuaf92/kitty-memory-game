import shuffle from 'lodash/shuffle'

export const generateTiles = () => {
  const images = []

  for (let i = 1; i < 9; i++) {
    images.push({
      imgUrl: `assets/img/${i}.jpg`,
      flipped: false,
      matched: false
    })
  }

  return shuffle([...images, ...images])
}
