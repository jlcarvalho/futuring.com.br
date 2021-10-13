import styled from 'styled-components'
import { backgroundGradient } from './styles'
import Tag from './tag'

const Work = styled.div`
  margin: 32px 0;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;

    ${backgroundGradient}
  }
`

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  ${props => props.rtl && 'flex-direction: row-reverse'};

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }

  > div { 
    margin: 16px auto 0;

    @media (min-width: 481px) {
      margin: 32px auto 0;

      &:first-of-type {
        flex: 0 0 25%;
        ${props => props.rtl ? 'margin-left' : 'margin-right'}: 32px;
      }
    }
  }
`

const MockUp = styled.img`
  max-width: 240px;
  width: 100%;
`

const Title = styled.h3`
  font-size: 2.5rem;
`

const Description = styled.div`
  font-weight: 100;
  letter-spacing: .5px;
  margin-bottom: 32px;
`

const Stores = styled.div`
  text-align: ${props => props.rtl ? 'left' : 'right'};


  @media (max-width: 480px) {
    text-align: right;

    a {
      display: block;
    }
  }

  a + a {
    margin-left: 16px;
  }
`

const Tags = styled.div`
  margin: 10px 0;
`

const Badge = styled.img`
  height: 40px;
`

export default (props) => (
  <Work>
    <Content {...props}>
      <div>
        <MockUp
          src={props.image}
          alt={props.title}
        />
      </div>
      <div>
        <Title>{props.title}</Title>
        {
          props.tags && (
            <Tags>
              {props.tags.map((item, key) => <Tag key={key}>{item}</Tag>)}
            </Tags>
          )
        }
        <Description dangerouslySetInnerHTML={{ __html: props.description }} />
        {
          props.stores && (props.stores.apple || props.stores.google) && (
            <Stores {...props}>
              {
                props.stores.apple && (
                  <a href={props.stores.apple} rel='noopener' target='_blank'>
                    <Badge
                      src='/static/images/app-store-badge.svg'
                      alt='Download on the App Store'
                    />
                  </a>
                )
              }
              {
                props.stores.google && (
                  <a href={props.stores.google} rel='noopener' target='_blank'>
                    <Badge
                      src='/static/images/google-play-badge.png'
                      alt='Get it on Google Play'
                    />
                  </a>
                )
              }
            </Stores>
          )
        }
      </div>
    </Content>
  </Work>
)
