import React, { useState, useCallback } from "react"
import { login } from "./api"
import { navigate } from "hookrouter"
import 'semantic-ui-css/semantic.min.css'
import { Form, Button, Message } from 'semantic-ui-react'
import "./style.css"

export default function Login() {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [errMessages, setErrMessages] = useState([])

  const onHandleInput = useCallback((e) => {
    let { name, value } = e.target
    if (name === 'username') {
      setUsername(value)
    } else {
      setPassword(value)
    }
  }, [])


  const handleClick = useCallback(async () => {
    let errMessageTmp = []
    if (!username) errMessageTmp.push('* please provide username textbox')
    if (!password) errMessageTmp.push('* please provide password textbox')

    setErrMessages(errMessageTmp)
    if (errMessageTmp.length === 0) {
      let res
      try {
        res = await login(username, password)
        console.log(res.data.token)

        localStorage.setItem("token", res.data.token)
        navigate('/candidates')
      } catch (e) {
        if (e.response && e.response.data) {
          setErrMessages([e.response.data.message])
        }
      }

    }
  })
  return (
    <div className="App">

      <Form className="login-form center-item">
        <Form.Field>
          <h1 className="center">Login</h1>
        </Form.Field>
        <Form.Field>
          <label>Username:</label>
          <input placeholder='username' name="username" onChange={onHandleInput} />
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input placeholder='password' name="password" onChange={onHandleInput} />
          </Form.Field>
            <Form.Field>
              <Button className="center-item" type="submit" onClick={handleClick} >Login</Button>
            </Form.Field>

            {errMessages.length > 0 && (
              <Message negative={true}>
                <p className="center">
                   {errMessages[0]}
                </p>
                <p className="center">
                   {errMessages[1]}
                </p>
              </Message>
            )
            }
      </Form>
    </div>
  );

}
