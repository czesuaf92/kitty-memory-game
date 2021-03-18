import * as ACTION from '../constants'

export const startGame = (userName) => {
  return {
    type: ACTION.START_GAME,
    userName
  }
}

export const flipCard = (index) => {
  return {
    type: ACTION.FLIP_CARD,
    index,
  }
}

export const matchCheck = () => {
  return {
    type: ACTION.MATCH_CHECK
  }
}

export const showScoreboard = (moves, userName) => {
  return {
    type: ACTION.SHOW_SCOREBOARD,
    userName,
    moves
  }
}

export const playAgaian = () => {
  return {
    type: ACTION.PLAY_AGAIN
  }
}
