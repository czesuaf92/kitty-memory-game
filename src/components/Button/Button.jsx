import { StyledButton } from './styles'

export const Button = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}
