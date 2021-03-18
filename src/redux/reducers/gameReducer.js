import * as ACTION from '../constants'
import { generateCards } from '../../helpers';

const initState = {
  userName: '',
  tiles: [],
  gameStatus: 'start',
  flippedIndexs: [],
  waited: false,
  moves: 0,
  scoreBoardData: []
}

export const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.START_GAME:
      return {
        ...state,
        userName: action.userName,
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
        moves: newFlippedIndexs.length === 2 ? state.moves + 1 : state.moves
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
        waited: false,
      }

    case ACTION.SHOW_SCOREBOARD:
      return {
        ...state,
        tiles: [],
        gameStatus: 'end',
        scoreBoardData: [...state.scoreBoardData, {
          userName: action.userName,
          moves: action.moves
        }],
      }

    case ACTION.PLAY_AGAIN:
      return {
        ...initState,
        scoreBoardData: state.scoreBoardData
      }

    default:
      return state
  }
}
