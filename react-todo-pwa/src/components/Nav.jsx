import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const Nav = () => {
  return (
    <Snav>
      <ul>
        <li><NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to={'/'}>スーパー</NavLink></li>
        <li><NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to={'/dorugstore/'}>ドラッグストア</NavLink></li>
        <li><NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to={'/handredstore/'}>100均</NavLink></li>
      </ul>
    </Snav>
  )
}

export default Nav

const Snav = Styled.nav`

ul {
  max-width: 375px;
  padding-left: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

}
  li {
    list-style: none;

    a {
      text-decoration: none;  
      color: #1976d2;
      padding:10px 20px;
      &.activated {
        border-radius: 5px;
        background-color: #1976d2;
        color: #fff;
      }
    }
  }
  
`