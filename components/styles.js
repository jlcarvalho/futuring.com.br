import { css } from 'styled-components'

export const backgroundGradient = `
  background-color: #fa00fd;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZhMDBmZCIvPjxzdG9wIG9mZnNldD0iMTElIiBzdG9wLWNvbG9yPSIjYzIzMmY1Ii8+PHN0b3Agb2Zmc2V0PSIyMyUiIHN0b3AtY29sb3I9IiM5MTVlZWYiLz48c3RvcCBvZmZzZXQ9IjM2JSIgc3RvcC1jb2xvcj0iIzY2ODRlOSIvPjxzdG9wIG9mZnNldD0iNDglIiBzdG9wLWNvbG9yPSIjNDRhM2U0Ii8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMyOWJiZTEiLz48c3RvcCBvZmZzZXQ9IjczJSIgc3RvcC1jb2xvcj0iIzE2Y2NkZSIvPjxzdG9wIG9mZnNldD0iODYlIiBzdG9wLWNvbG9yPSIjMGJkNmRkIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDdkOWRjIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g');
  background-size: 100%;
  background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #fa00fd), color-stop(11%, #c232f5), color-stop(23%, #915eef), color-stop(36%, #6684e9), color-stop(48%, #44a3e4), color-stop(60%, #29bbe1), color-stop(73%, #16ccde), color-stop(86%, #0bd6dd), color-stop(100%, #07d9dc));
  background-image: -moz-linear-gradient(left, #fa00fd 0%, #c232f5 11%, #915eef 23%, #6684e9 36%, #44a3e4 48%, #29bbe1 60%, #16ccde 73%, #0bd6dd 86%, #07d9dc 100%);
  background-image: -webkit-linear-gradient(left, #fa00fd 0%, #c232f5 11%, #915eef 23%, #6684e9 36%, #44a3e4 48%, #29bbe1 60%, #16ccde 73%, #0bd6dd 86%, #07d9dc 100%);
  background-image: linear-gradient(to right, #fa00fd 0%, #c232f5 11%, #915eef 23%, #6684e9 36%, #44a3e4 48%, #29bbe1 60%, #16ccde 73%, #0bd6dd 86%, #07d9dc 100%);
`

export const Global = css`
  @font-face {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: normal;
    src: local('Helvetica Neue'), url('/static/fonts/HelveticaNeueLTStd Lt.woff') format('woff');
  }

  :root {
    font-size: 10px;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: #141414;
    color: #fff;
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }

  h1, h2, h3 {
    display: block;
    font-weight: 100;
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  a {
    color: #fff;
    display: inline-block;
    text-decoration: none;
  }

  ul {
    font-size: 1.8rem;
    line-height: 3.6rem;

    li {
      list-style: none;
    }

    &.inline {
      padding: 0;

      li {
        display: inline;
        margin-right: 10px;
      }
    }
  }
`
