import React from 'react';
import {NavLink} from 'react-router-dom';
import LogoUrl from './logo.svg';
import styled from 'styled-components';

const Header=styled.header`
display:flex;
align-items:center;
background-color:#02101f;
padding: 15px 100px;
color:#fff;
`;
const StyledLink=styled(NavLink)`
color:#fff;
margin-left:30px;

&.active{
    border-bottom:1px solid #fff;
}
`;

const Logo =styled.img`
height:30px;
margin-left:30px;
`;




function Component(){
return(
    <Header>
       <Logo src={LogoUrl}/>
        <nav> 
        <StyledLink to="/" activeClassName="active" exact>首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">历史上传</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
        </nav>
    </Header>

);

}

export default Component;