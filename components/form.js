import styled from 'styled-components'

const InputWrapper = styled.div`
  margin: 16px auto;
  max-width: 480px;
  width: 100%;

  > input,
  > textarea {
    background: transparent;
    border: 0;
    border-bottom: 1px solid white;
    color: white;
    font-size: 1.6rem;
    margin: 8px 0;
    outline: none;
    padding: 8px 0;
    width: 100%;
  }
`

const StyledInput = styled.input`
`

const StyledTextArea = styled.textarea`
  min-height: 120px;
  resize: none;
`

export const Input = (props) => (
  <InputWrapper>
    <StyledInput {...props} />
  </InputWrapper>
)

export const TextArea = (props) => (
  <InputWrapper>
    <StyledTextArea {...props} />
  </InputWrapper>
)

export const Button = styled.button`
  background: white;
  border: none;
  border-radius: 2px;
  color: black;
  cursor: pointer;
  display: block;
  font-size: 1.6rem;
  margin: 0 auto;
  max-width: 480px;
  padding: 8px 16px;
  width: 100%;
`
