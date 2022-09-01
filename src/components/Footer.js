import React from 'react'
import styled from 'styled-components';
const Footer=styled.footer`
text-align:center;
position:absolute;
bottom:1px;
width:100%;
height:32px;
background-color:rgb(52, 58, 64);
color:#fff;
font-size:16px;
`;


function Component(){
return(
    <Footer>
         <p>Copyright© 2021-2022 爱旭图床 版权所有侵权必究</p>
    </Footer>
);

}

export default Component;