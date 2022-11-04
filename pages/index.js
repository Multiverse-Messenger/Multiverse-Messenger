import React, {useContext} from "react";
import { Context } from '../context'
import router, { useRouter } from 'next/router'
import axios from 'axios'

export default function Auth() {
  const { username, secret, setUsername, setSecret} = useContext(Context);
  
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 0 || secret.length === 0){
      return
    }
    axios.put(
      'https://api.chatengine.io/users/',
      {username, secret},
      //{headers: {'Private-key': ""}}
      {headers: {'Private-key': process.env.NEXT_PUBLIC_CHATENG_SECRET}}
    )
    .then(r => router.push ('/chats'))
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={e => onSubmit(e)}>
          <div className="auth-title">Multiverse Messenger</div>
          
          <div className="input-container">
            <input
              placeholder="Username"
              className="text-input"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          
          <div className="input-container">
            <input
              type="Password"
              placeholder="Password"
              className="text-input"
              onChange={e => setSecret(e.target.value)}
            />
          </div>
          <button
            type='submit'
          className="submit-button">
            Login/Sign up
        </button>

        </form>

      </div>

    </div>
  )
}
