import styled from 'styled-components'

export default styled.div`
  margin: 0 auto;
  max-width: ${props => props.small ? '640px' : '960px'};
  width: 100%;
`
