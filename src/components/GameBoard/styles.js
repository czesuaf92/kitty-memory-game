import styled from "styled-components";

export const StyledGameBoardContainer = styled.div`
  display: block;
`
export const StyledGameBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StyledCardContent = styled.div`
  width: 100%;
  height: 100%;
  transition: transform .5s;
  transform-style: preserve-3d;
  background-color: #b9b9b9;
`

const StyledCardInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
`

export const StyledCardImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const StyledCardFront = styled(StyledCardInner)`
  transform: rotateY(180deg);
`

export const StyledCardBack = styled(StyledCardInner)`
  padding: 20px;
`

export const StyledCard = styled.div.attrs((props) => ({
  style: {
    height: `${props.height}px`
  }
}))`
  flex: 1 0 calc(25% - 4px);
  perspective: 1000px;
  border-radius: 10px;
  overflow: hidden;
  margin: 2px;
  box-sizing: border-box;
  ${props => props.isFlipped && `
    pointer-events: none;
    ${StyledCardContent} {
      transform: rotateY(180deg);
    }
  `}
  &:hover {
    cursor: pointer;
  }
`

export const StyledCurrentScore = styled.p`
  text-align: center;
`
