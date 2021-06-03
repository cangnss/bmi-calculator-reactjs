import styled from 'styled-components';

export const MainTextDiv = styled.div`
        display:flex;
        flex-direction: column;
        text-align:center;
        margin-left:550px;
    `;

export const TextDiv = styled.span`
        width: 200px;
        height: 50px;
        color:black;
        padding:10px;
        margin-bottom: 15px;
        font-family:'Source Sans Pro', sans-serif;
        font-weight: bold;
        font-size: 32px;
    `;

export const Input = styled.input`
        width:200px;
        height:30px;
        border-radius: 5px;

    `;

export const Button = styled.button`
        width:200px;
        height:50px;
        background-color: ${props => props.primary ? 'green' : 'red'};
        color:white;
        font-size: 18px;
        font-weight:bold;
        border:none;
        border-radius:5px;
        font-family: 'Source Sans Pro', sans-serif;
        margin-right:5px;
    `;

export const MainButtonDiv = styled.div`
        margin-left: 470px;
        margin-top:50px;
    `;

export const Result = styled.span`
        font-size:24px;
        margin-left: 650px;
        font-weight:bold;
    `;

export const ResultDescription = styled.div`
        font-size:24px;
        margin-left: 50px;
        text-align:center;
    `;