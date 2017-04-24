import styled from 'styled-components'
import { backgroundGradient } from './styles'

export default styled.hr`
  border: 0;
  margin: 32px 0;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    transform: translateY(2px);
    will-change: transform, opacity;

    ${backgroundGradient}
  }
`
