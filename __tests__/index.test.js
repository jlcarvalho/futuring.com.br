/* global it, expect, describe */

import React from 'react'
import renderer from 'react-test-renderer'
import App from '../pages/index.js'

const works = [{
  title: 'Meu Negócio',
  image: '../static/images/home-suave.png',
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
  image: '../static/images/home-minireceitas.png',
  description: `
    <p><b>Mini Receitas</b> is an application that allows you to search for recipes through the ingredients that you have at hand. With thousands of possible combinations of filters.</p>
  `,
  tags: ['Ionic', 'Angular', 'CouchDB', 'PouchDB', 'Firebase'],
  stores: {
    google: 'https://play.google.com/store/apps/details?id=br.com.jeanlucas.apps.microreceitas'
  }
}, {
  title: 'Plan Kids',
  image: '../static/images/home-plankids.png',
  description: `
    <p><b>Plan Kids</b> is an application for parents who wish to develop their children's potential through playful play that has been designed using psychopedagogy and coaching.</p>
  `,
  tags: ['Ionic', 'Angular', 'Parse Server', 'PouchDB', 'Docker', 'Heroku'],
  stores: {
    apple: 'https://itunes.apple.com/ca/app/plan-kids/id1147019060',
    google: 'https://play.google.com/store/apps/details?id=br.com.futuring.apps.plankidsapp'
  }
}]
const url = { pathname: '/', query: {} }

describe('With Snapshot Testing', () => {
  it('App have 3 works', () => {
    const component = renderer.create(<App works={works} url={url} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
