import styled from 'styled-components'

export default styled.span`
  background: #141414;
  border-radius: 5px;
  color: white;
  display: inline-block;
  font-size: 1.2rem;
  margin: 2px 4px;
  padding: 4px 8px;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`
