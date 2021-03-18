import sortBy from 'lodash/sortBy'
import { useSelector, useDispatch } from 'react-redux'
import { playAgaian } from '../../redux/actions'
import { Button } from '../Button/Button'
import {
  StyledScoreBoardContainer,
  StyledScoreBoardTitle,
  ScoreBoardTable,
  ScoreBoardTableHead,
  ScoreBoardCell,
  ScoreBoardRow,
  Congratulations
} from './styles'

export const ScoreBoard = () => {
  const { scoreBoardData, moves, userName } = useSelector((state) => state.gameReducer)
  const dispatch = useDispatch()

  const renderScoreBoardTable = () => {
    const sortedArray = sortBy(scoreBoardData, 'moves')
    return sortedArray.map((el, key) => {
      return (
        <ScoreBoardRow key={key}>
          <ScoreBoardCell>{el.userName}</ScoreBoardCell>
          <ScoreBoardCell>{el.moves}</ScoreBoardCell>
        </ScoreBoardRow>
      )
    })
  }

  return (
    <StyledScoreBoardContainer>
      <Congratulations>
        <p>{`${userName} Congratulations!`}</p>

      </Congratulations>
      <p>{`Your score is ${moves}`}</p>
      <Button type='button' onClick={() => dispatch(playAgaian())}>Play again</Button>
      <StyledScoreBoardTitle>Scoreboard</StyledScoreBoardTitle>
      <ScoreBoardTable>
        <ScoreBoardTableHead>
          <ScoreBoardCell>User</ScoreBoardCell>
          <ScoreBoardCell>Score</ScoreBoardCell>
        </ScoreBoardTableHead>
        {renderScoreBoardTable()}
      </ScoreBoardTable>
    </StyledScoreBoardContainer>
  )
}
