import React, { useState } from 'react';
import Login from "./Login"
import Signup from "./Signup"
import CandidateList from './CandidateList';
import 'semantic-ui-css/semantic.min.css'
import { useRoutes} from 'hookrouter';
import NoPageFound from "./NoPageFound"
import { navigate } from "hookrouter"

import CandidateProfile from './CandidateProfile';
import { Menu } from 'semantic-ui-react'


export default function App() {
  const [candidates, setCandidates] = useState([])
  const [activeItem, setActiveItem] = useState('login')

  const updateCandidates = (candidates) => {
    console.log("updateCandidates")
    setCandidates(candidates)
  }

  const routes = {
    '/': () => navigate('/login'),
    '/login': () => <Login />,
    '/signup': () => <Signup />,
    '/candidates': () => <CandidateList updateCandidates={updateCandidates} />,
    '/profile/:id': ({ id }) => <CandidateProfile id={id} candidates={candidates} />

  }
  let routeResult = useRoutes(routes);

  const handleOnClick = (e, { name }) => {
    setActiveItem(name)
    navigate(`/${name}`)
  }

  return (
    <div className="App">
      <Menu pointing>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={ handleOnClick}
        />
        <Menu.Item
          name='signup'
          active={activeItem === 'signup'}
          onClick={handleOnClick}
        />
      </Menu>

      {routeResult || <NoPageFound />}
    </div>
  );
}
