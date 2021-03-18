import styled from 'styled-components'

export const StyledScoreBoardContainer = styled.div`
  text-align: center;
`

export const StyledScoreBoardTitle = styled.h5`
  text-align: center;
`

export const ScoreBoardCell = styled.div`
  flex: 1 0 auto;
  padding: 15px 0;
`

export const ScoreBoardRow = styled.div`
  width: 100%;
  display: flex;
  &:not(:last-child){
    border-bottom: 1px solid #979797;
  }
  ${ScoreBoardCell}:first-child{
    border-right: 1px solid #979797;
    min-width: 200px;
  }
  ${ScoreBoardCell}:last-child {
    max-width: 75px;
  }
`

export const ScoreBoardTableHead = styled(ScoreBoardRow)`
  font-weight: bold;
  background-color: #dfdfdf;
  &&& {
    border-width: 2px;
  }
  
  ${ScoreBoardCell}:first-child{
    border-width: 2px;
  }
`

export const ScoreBoardTable = styled.div`
  max-width: 550px;
  margin: 0 auto;
  border-radius: 10px;
`

export const Congratulations = styled.h5`
  text-align: center;
`
