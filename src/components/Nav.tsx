import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display:flex;
    >li{
      font-size: 12px;
      width: 33.333%;
      text-align: center;
      >a {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .icon{
          width: 32px;
          height: 32px;
        }
        &.selected{
          span{
            display: none;
          }
          .icon{
            width: 46px;
            height: 46px;
          }
        }
      }
     
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            <span>标签页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            <span>记账页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            <span>统计页</span>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;