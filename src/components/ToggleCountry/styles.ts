import styled from 'styled-components'

export const List = styled.div`
  display: flex;
`

export const Option = styled.button<{isSelected: boolean}>`
  cursor: pointer;
  border: none;
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: ${(p) => (p.isSelected ? '#5689d6' : '#EFEFEF')};
  color: ${(p) => (p.isSelected ? '#FFF' : '#000')};
  transition: background-color 300ms, color 300ms;
`
