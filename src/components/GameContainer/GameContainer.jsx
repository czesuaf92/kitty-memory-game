import { StyledGameContainer, StyledGameTitle, StyledGameContent } from './styles'
import { useSelector } from 'react-redux';
import { GameBoard } from '../GameBoard/GameBoard'
import { WelcomePage } from '../WelcomePage/WelcomePage'

export const GameContainer = () => {
  const gameStatus = useSelector(({ gameReducer }) => gameReducer.gameStatus)

  console.log('gameStatus', gameStatus)
  const renderContent = () => {
    if (gameStatus === 'start') {
      return <WelcomePage />
    }
    if (gameStatus === 'pending') {
      return <GameBoard />
    }
  }
  return (
    <StyledGameContainer>
      <StyledGameTitle>Kitty memory game</StyledGameTitle>
      <StyledGameContent>
        {renderContent()}
        {/* <GameBoard></GameBoard> */}
      </StyledGameContent>
    </StyledGameContainer>
  )
}
