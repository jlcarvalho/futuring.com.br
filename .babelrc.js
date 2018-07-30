module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-env", "next/babel"],
  plugins: [
    [ "babel-plugin-styled-components" , { "ssr": true, "displayName": true, "preprocess": false } ]
  ]
}