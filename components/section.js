import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 85vw;
  max-width: 1440px;
  margin: 0 auto;

  ${props => props.fullScreen && 'min-height: 100vh;'}
  ${props => props.padding && 'padding: 16px;'}
`
