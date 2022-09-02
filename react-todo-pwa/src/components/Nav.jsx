import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const Nav = () => {
  return (
    <Snav>
      <ul>
        <li><Link to={'/'}>スーパー</Link></li>
        <li><Link to={'/dorugstore/'}>ドラッグストア</Link></li>
        <li><Link to={'/handredstore/'}>100均</Link></li>
      </ul>
    </Snav>
  )
}

export default Nav

const Snav = Styled.nav`

ul {
  width: 375px;
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
    }
  }
  
`