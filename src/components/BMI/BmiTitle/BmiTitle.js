import React from 'react'
import styled from 'styled-components';


function BmiTitle() {

    const Title = styled.h1`
        color:blue;
        font-weight:bold;
        font-size:45px;
        text-align:center;
        font-family: 'Sigmar One', cursive;
    `;

    return (
        <Title>
            <h1>BMI CALCULATOR</h1>
        </Title>
    )
}
export default BmiTitle;