import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
`
export const WebsiteImg = styled.img`
  align-self: center;
  width: 120px;
  margin: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
`
export const Label = styled.label`
  font-size: 12px;
  color: #909090;
  font-weight: bold;
`
export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-top: 5px;
  padding: 10px;
  font-size: 12px;
  color: #616e7c;
  border: 1px solid #cccccc;
  outline: none;
`
export const CheckboxContainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`
export const CheckboxInput = styled.input`
  margin: 5px;
  margin-top: 8px;
  cursor: pointer;
`

export const CheckboxLabel = styled.label`
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
`
export const LoginButton = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  border: 0px solid;
  background-color: #2269dd;
  color: #ffffff;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-size: 13px;
  color: #ff0000;
`
