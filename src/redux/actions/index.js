import * as ACTION from '../constants'
import { generateTiles } from '../../helpers/generateTiles'

export const startGame = () => {
  console.log('startGame action')
  return {
    type: ACTION.START_GAME,
    tiles: generateTiles(),
    gameStatus: 'pending'
  }
}
