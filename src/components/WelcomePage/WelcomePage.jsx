import { useDispatch } from 'react-redux'
import { StyledWelcomePageContainer, StyledWelcomePageTitle, StyledWelcomePageForm } from './styles'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { startGame } from '../../redux/actions'

export const WelcomePage = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    const userName = e.target.userName.value
    if (userName !== '') {
      dispatch(startGame(userName))
    }
  }
  return (
    <StyledWelcomePageContainer>
      <StyledWelcomePageTitle>Welcome in mini memory game</StyledWelcomePageTitle>
      <p>Enter your username and push the button to start the game</p>
      <StyledWelcomePageForm onSubmit={handleSubmit}>
        <Input name='userName' placeholder='Enter your username' />
        <Button type='submit'>
          Start
        </Button>
      </StyledWelcomePageForm>

    </StyledWelcomePageContainer>
  )
}
