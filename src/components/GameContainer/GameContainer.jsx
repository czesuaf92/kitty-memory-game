import { StyledGameTitle, StyledGameContent } from './styles'
import { useSelector } from 'react-redux';
import { GameBoard } from '../GameBoard/GameBoard'
import { WelcomePage } from '../WelcomePage/WelcomePage'
import { ScoreBoard } from '../ScoreBoard/ScoreBoard'

export const GameContainer = () => {
  const gameStatus = useSelector(({ gameReducer }) => gameReducer.gameStatus)

  const renderContent = () => {
    switch (gameStatus) {
      case 'start':
        return <WelcomePage />
      case 'pending':
        return <GameBoard />
      case 'end':
        return <ScoreBoard />
      default:
        return null
    }
  }

  return (
    <div>
      <StyledGameTitle>Kitty memory game</StyledGameTitle>
      <StyledGameContent>
        {renderContent()}
      </StyledGameContent>
    </div>
  )
}
