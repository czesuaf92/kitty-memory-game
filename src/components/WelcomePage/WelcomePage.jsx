import { useDispatch } from 'react-redux'
import { StyledWelcomePageContainer } from './styles'
import { Button } from '../Button/Button'
import { startGame } from '../../redux/actions'

export const WelcomePage = () => {
  const dispatch = useDispatch()

  return (
    <StyledWelcomePageContainer>
      <Button onClick={() => dispatch(startGame())}>Start</Button>
    </StyledWelcomePageContainer>
  )
}
