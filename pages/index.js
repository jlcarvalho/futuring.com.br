import React from 'react'
import styled from 'styled-components'

import Section from '../components/section'
import Header from '../components/header'
import Main from '../components/main'
import Container from '../components/container'
import Logo from '../components/logo'
import Menu from '../components/menu'
import Work from '../components/work'
import HR from '../components/hr'
import { HugeText, GradientText } from '../components/typography'
import { Input, TextArea, Button } from '../components/form'
import { backgroundGradient } from '../components/styles'

const HeroBackground = styled.section`
  background-image: url('/static/images/bg2.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

const WhiteBackground = styled.section`
  background: white;
  color: #141414;
`

const Footer = styled.footer`
  p {
    margin: 0;
    padding: 16px 32px;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;

    ${backgroundGradient}
  }
`

export default class extends React.Component {
  static getInitialProps () {
    return {
      works: [{
        title: 'Meu Negócio',
        image: '/static/images/home-suave.png',
        description: `
          <p>The <b>Meu Negócio</b> application is an virtual assistant that provides Independent Beauty Consultants of Suave Fragrance the opportunity to create sales tickets, manage inventory and service her customers on the go from their mobile devices.</p>
        `,
        tags: ['Ionic', 'Angular', 'CouchDB', 'PouchDB', 'Node.js', 'now.sh'],
        stores: {
          apple: 'https://itunes.apple.com/us/app/suave-fragrance-meu-negócio/id1225991362',
          google: 'https://play.google.com/store/apps/details?id=br.com.futuring.apps.suave'
        }
      }, {
        title: 'Mini Receitas',
        image: '/static/images/home-minireceitas.png',
        description: `
          <p><b>Mini Receitas</b> is an application that allows you to search for recipes through the ingredients that you have at hand. With thousands of possible combinations of filters.</p>
        `,
        tags: ['Ionic', 'Angular', 'CouchDB', 'PouchDB', 'Firebase'],
        stores: {
          google: 'https://play.google.com/store/apps/details?id=br.com.jeanlucas.apps.microreceitas'
        }
      }, {
        title: 'Plan Kids',
        image: '/static/images/home-plankids.png',
        description: `
          <p><b>Plan Kids</b> is an application for parents who wish to develop their children's potential through playful play that has been designed using psychopedagogy and coaching.</p>
        `,
        tags: ['Ionic', 'Angular', 'Parse Server', 'PouchDB', 'Docker', 'Heroku'],
        stores: {
          apple: 'https://itunes.apple.com/ca/app/plan-kids/id1147019060',
          google: 'https://play.google.com/store/apps/details?id=br.com.futuring.apps.plankidsapp'
        }
      }, {
        title: 'Prepara ENEM App',
        image: '/static/images/home-preparaenem.png',
        description: `
          <p><b>Prepara ENEM</b> is an application that helps Brazilian high school students to achieve better results on Brazilian national exam through gamification.</p>
        `,
        tags: ['Ionic', 'Angular', 'Stamplay', 'PouchDB']
      }]
    }
  }

  render () {
    return (
      <div>
        <HeroBackground>
          <Section fullScreen>
            <Header>
              <Logo />
              <Menu />
            </Header>

            <Main>
              <HugeText>
                Nós entregamos <GradientText>experiências digitais</GradientText>.
              </HugeText>
            </Main>
          </Section>
        </HeroBackground>
        <WhiteBackground>
          <Section padding fullScreen id='hire'>
            <Container small>
              <h2>Contato</h2>
              <HR />
              <form action='https://formsquash.io/f/SPC9HcXT45IEMlhMeY1Y' method='POST'>
                <Input required type='text' name='name' id='name' placeholder='Nome' />
                <Input required type='email' name='email' id='email' placeholder='Email' />
                <TextArea required name='project' id='project' placeholder='Conte-nos sobre o seu projeto!' />
                <Button type='submit'>Enviar</Button>
              </form>
            </Container>
          </Section>
        </WhiteBackground>
        <Footer>
          <Container>
            <p>Copyright © Futuring 2017</p>
          </Container>
        </Footer>
      </div>
    )
  }
}
