import React from 'react';
import styled, { css } from 'styled-components';
import {AppContext} from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 150px 100px;
`

const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 45px #07f707;
  `}
`

const ControlButton = ({ name }) => {
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
      <ControlButtonElem
        active={page === name}
        onClick={() => setPage(name)}
      >
        {toProperCase(name)}
      </ControlButtonElem>
      )}
    </AppContext.Consumer>
  )
}

const AppBar = () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  )
}

export default AppBar;