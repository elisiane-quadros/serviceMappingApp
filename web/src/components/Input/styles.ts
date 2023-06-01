import styled from 'styled-components'

export const Container = styled.div `
display: flex;
flex-direction: column;
padding-bottom: 30px;
`
export const InputStyled = styled.input`
  border:none;
  background-color: ${(props) => props.theme.grey100};
  color: ${(props) => props.theme.grey300};
  border-radius: 8px;
  height: 28px;
  font-size: 1rem;
  padding: 10px;
`