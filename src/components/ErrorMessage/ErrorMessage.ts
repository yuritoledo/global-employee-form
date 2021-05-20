import styled from 'styled-components'

const ErrorMessage = styled.p<{show: boolean}>`
  color: red;
  opacity: ${(p) => Number(p.show)};
  transition: opacity 300ms;
`
export default ErrorMessage
