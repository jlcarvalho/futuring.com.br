import React from 'react'
import styled from 'styled-components'
import Link from './link'

const Menu = styled.nav`
  @media (min-width: 361px) {
    margin: 0 32px;
  }

  li {
    display: inline-block;
    font-size: 1.8rem;
    line-height: 3.6rem;
    margin-right: 30px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`

export default class extends React.Component {
  componentDidMount () {
    require('smoothscroll-polyfill').polyfill()
  }

  handleClick (path) {
    document.querySelector(path).scrollIntoView({
      behavior: 'smooth'
    })
  }

  render (props) {
    return (
      <Menu {...props}>
        <ul>
          {/*<li><Link href='#'>About</Link></li>*/}
          <li><Link onClick={() => this.handleClick('#work')}>Work</Link></li>
          {/*<li><Link href='#'>Services</Link></li>*/}
          {/*<li><Link href='#'>Courses</Link></li>*/}
          <li><Link onClick={() => this.handleClick('#hire')}>Hire Us</Link></li>
        </ul>
      </Menu>
    )
  }
}