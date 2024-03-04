import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  Form,
  WebsiteImg,
  InputContainer,
  Label,
  Input,
  CheckboxInput,
  CheckboxContainer,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    inputType: 'password',
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      errorMsg,
      isError: true,
    })
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onShowPassword = event => {
    if (event.target.checked) {
      this.setState({inputType: 'text'})
    } else {
      this.setState({inputType: 'password'})
    }
  }

  onUsernameChange = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onPasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {inputType, username, password, isError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <Form onSubmit={this.onFormSubmit}>
          <WebsiteImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>
            <Label htmlFor="username-input">USERNAME</Label>
            <Input
              value={username}
              onChange={this.onUsernameChange}
              type="text"
              id="username-input"
              placeholder="Username"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password-input">PASSWORD</Label>
            <Input
              onChange={this.onPasswordChange}
              type={inputType}
              id="password-input"
              placeholder="Password"
              value={password}
            />
            <CheckboxContainer>
              <CheckboxInput
                onChange={this.onShowPassword}
                type="checkbox"
                id="checkbox-input"
              />
              <CheckboxLabel htmlFor="checkbox-input">
                Show Password
              </CheckboxLabel>
            </CheckboxContainer>
          </InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {isError ? <ErrorMsg>{`*${errorMsg}`}</ErrorMsg> : null}
        </Form>
      </LoginContainer>
    )
  }
}

export default Login
