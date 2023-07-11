import React, { ChangeEvent } from 'react'
import { Container, InputStyled } from './styles'

interface InputProps {
  label: string
  name: string
  value: string
  onChange: (updatedState: (previousState: any) => any) => void
}

const Input: React.FC<InputProps> = ({ label, name, value, onChange }) => {
  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onChange((previousState) => ({
      ...previousState,
      [name]: ev.target.value,
    }))
  }

  return (
    <Container>
      <label>{label}</label>
      <InputStyled
        required
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    </Container>
  )
}

export default Input
