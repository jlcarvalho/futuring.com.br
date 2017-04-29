#!/usr/bin/env node

const bot = require('circle-github-bot').create()

bot.comment(`
<h3>${bot.env.commitMessage}</h3>
Demo: <strong><a href='${process.env.URL}' target='_blank'>${process.env.URL}</a></strong>
`)
