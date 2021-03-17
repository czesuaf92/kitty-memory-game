import * as ACTION from '../constants'
import { generateCards } from '../../helpers';

const initState = {
  tiles: [],
  gameStatus: 'start',
  flippedIndexs: [],
  waited: false,
  moves: 0
}

// const initState = {
//   tiles: generateCards(),
//   gameStatus: 'pending',
//   flippedIndexs: [],
//   waited: false,
//   moves: 0
// }
export const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.START_GAME:
      return {
        ...state,
        tiles: generateCards(),
        gameStatus: 'pending'
      }

    case ACTION.FLIP_CARD:
      let newFlippedIndexs = [...state.flippedIndexs]
      if (state.flippedIndexs.length < 2) {
        newFlippedIndexs.push(action.index)
      }
      return {
        ...state,
        flippedIndexs: newFlippedIndexs,
        waited: newFlippedIndexs.length === 2,
        moves: state.moves + 1
      }

    case ACTION.MATCH_CHECK:
      const tile1 = state.tiles[state.flippedIndexs[0]]
      const tile2 = state.tiles[state.flippedIndexs[1]]
      const resultMatchCheck = state.tiles.map((el) => {
        if (el.id === tile1.id && el.id === tile2.id) {
          return {
            ...el,
            matched: true
          }
        }
        return el
      })

      return {
        ...state,
        tiles: resultMatchCheck,
        flippedIndexs: [],
        waited: false
      }

    default:
      return state
  }
}
