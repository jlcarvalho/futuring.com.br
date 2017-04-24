import styled from 'styled-components'
import { backgroundGradient } from './styles'

export const HugeText = styled.h1`
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 6vw;
  font-weight: bold;
  letter-spacing: -.0125em;
  line-height: 1em;
  margin-bottom: 8vw;
  width: 60vw;
  max-width: calc(100vw - (100vw - 1440px) / 2 - 5vw);
  float: right;
  text-align: right;
`

export const GradientText = styled.span`
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    transform: translateY(1.5vw);
    z-index: 1;

    ${backgroundGradient}
  }
`

export default {
  HugeText
}
