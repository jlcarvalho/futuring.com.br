# Futuring.com.br site
[![CircleCI](https://circleci.com/gh/Futuring/futuring.com.br.svg?style=svg)](https://circleci.com/gh/Futuring/futuring.com.br)

This is the Futuring site, you can see the live site on https://futuring.com.br.

This project uses [Next.js](https://github.com/zeit/next.js), React, Styled Components, Polished, Jest, Enzyme, Babel and Yarn.

## Dependencies

To run this project you need to have:

* Node.js v7.9.x - You can use [NVM](https://github.com/creationix/nvm)
* Yarn - `$ brew install yarn`

## Setup the project

* `$ git clone https://github.com/Futuring/futuring.com.br` - Clone the project
* `$ cd futuring.com.br` - Go into the project's folder
* `$ yarn install` - Installs the project's dependencies
* `$ yarn run dev` - Run the development server

## Test the app

* `$ yarn test`

### Generate test snapshot

* `$ yarn test -- -u`

## Running in production

* `$ yarn run build`
* `$ yarn start`
