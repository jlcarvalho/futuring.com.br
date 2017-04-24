import styled from 'styled-components'
import { backgroundGradient } from './styles'

const active = `
  &::after {
    transform: translateY(-3px);
    opacity: 1;
  }
`

export default styled.a`
  cursor: pointer;
  letter-spacing: 1px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    transition: .3s ease transform, .3s ease opacity;
    transform: translateY(2px);
    opacity: 0;
    will-change: transform, opacity;

    ${backgroundGradient}
  }

  &:hover {
    ${active}
  }

  ${props => props.active && active}
`
