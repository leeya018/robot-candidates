import React, { useState, useCallback } from "react"
import { signup } from "./api"
import 'semantic-ui-css/semantic.min.css'
import { Form, Button, Message } from 'semantic-ui-react'
import "./style.css"
import { navigate } from "hookrouter"


export default function Signup() {
  let [username, setUsername] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [errMessages, setErrMessages] = useState([])

  const onHandleInput = useCallback((e) => {
    let { value } = e.target
    switch (e.target.name) {
      case "username":
        setUsername(value)
        break;
      case "email":
        setEmail(value)
        break;
      case "password":
        setPassword(value)
        break;

    }
  }, [])
  const handleClick = useCallback(async () => {

    let errMessageTmp = []
    if (!username) errMessageTmp.push('* please provide username textbox')
    if (!email) errMessageTmp.push('* please provide email textbox')
    if (!password) errMessageTmp.push('* please provide password textbox')

    setErrMessages(errMessageTmp)
    if (errMessageTmp.length === 0) {
      try {
        let data = await signup(username, email, password)
        console.log(data.success)
        navigate('/login')
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
          <h1 className="center">Signup</h1>
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
          <label>email:</label>
          <input placeholder='email' name="email" onChange={onHandleInput} />
          </Form.Field>
            <Form.Field>
              <Button className="center-item" type="submit" onClick={handleClick} >Signup</Button>
            </Form.Field>

            {errMessages.length > 0 && (
              <Message negative={true}>
                <p className="center">
                  {errMessages[0]}
                </p>
                <p className="center">
                   {errMessages[1]}
                </p>
                <p className="center">
                   {errMessages[2]}
                </p>
              </Message>
            )
            }
      </Form>
    </div>
  )
}
