import React from 'react'
import styled from 'styled-components';

const First =styled.div`
background-color:rgb(195, 245, 207);
width:600px;
margin:30px 0; 
font-size:15px;
`;

const Second =styled.div`
background-color:rgb(255, 204, 204);
width:600px;
font-size:15px;
margin:30px 0; 
`

function About(){
return(
    <div>
     <h1>关于爱旭</h1>
     <First>
        <p>爱旭图床是一个仅用于个人学习的小项目，你可以上传一些个人日常使用的图片，但请勿用于商用，否则由此产生的后果请自行承担。</p>
     </First>
     <Second>
     <h2>严禁上传以下类型的图片:</h2>
     <ul>
        <li>1.包含色情暴力或宣扬恐怖主义的图片。</li>
        <li>2.侵犯版权或未经授权的图片</li>
        <li>4.带有反社会主义分裂国家性质的图片</li>
        <li>3.其他违反中华人民共和国法律的图片。</li>

    </ul>


     </Second>

    </div>

);

}

export default About;