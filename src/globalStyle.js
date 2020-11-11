import { createGlobalStyle } from 'styled-components'
import colors from './config/colors'
const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${colors.backgroundColor};
}

body,
input,
button,
textarea {
  font: 600 18px Nunito, sans-serif;
}
`
export default GlobalStyle
