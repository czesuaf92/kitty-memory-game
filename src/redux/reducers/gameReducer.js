import * as ACTION from '../constants'

const initState = {
  tiles: [],
  gameStatus: 'start'
}

export const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.START_GAME:
      return {
        ...state,
        tiles: action.tiles,
        gameStatus: action.gameStatus
      }

    default:
      return state
  }
}
