import * as ACTION from '../constants'
import { generateCards } from '../../helpers'

export const startGame = () => {
  return {
    type: ACTION.START_GAME
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
