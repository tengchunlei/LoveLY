import React from 'react'
import styled from 'styled-components';
const Footer=styled.footer`
text-align:center;
position:absolute;
bottom:1px;
width:100%;
height:33px;
color:black;
font-size:18px;
`;


function Component(){
return(
    <Footer>
         <p>Copyright© 2021-2022 爱旭图床</p>
    </Footer>
);

}

export default Component;