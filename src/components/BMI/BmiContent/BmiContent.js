import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
function BmiContent() {

    const [calculate, setCalculate] = useState(0);

    useEffect(()=>{

    },[]);

    const MainTextDiv = styled.div`
        display:flex;
        flex-direction: column;
        text-align:center;
        margin-left:550px;
    `;

    const TextDiv = styled.span`
        width: 200px;
        height: 50px;
        color:black;
        padding:10px;
        margin-bottom: 15px;
        font-family:'Source Sans Pro', sans-serif;
        font-weight: bold;
        font-size: 32px;
    `;

    const Input = styled.input`
        width:200px;
        height:30px;
        border-radius: 5px;

    `;

    const Button = styled.button`
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

    const MainButtonDiv = styled.div`
        margin-left: 470px;
        margin-top:50px;
    `;

    const Result = styled.span`
        font-size:24px;
        margin-left: 650px;
        font-weight:bold;
    `;

    const ResultDescription = styled.div`
        font-size:24px;
        margin-left: 520px;
    `;

    function bmiCalculate() {
        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;
        const result = ((parseInt(weight) * parseInt(weight)) / parseInt(height)).toFixed(2);
        setCalculate(result);
    }

    function clearInput() {
        const weight = document.getElementById('weight');
        const height = document.getElementById('height');
        weight.value = "";
        height.value = "";
    }

    return (
        <div>
            <MainTextDiv>
                <TextDiv>
                    Height(cm):<Input type="text" id="height"></Input>
                </TextDiv>
                <TextDiv>
                    Weight(kg):<Input type="text" id="weight"></Input>
                </TextDiv>
            </MainTextDiv>
            <MainButtonDiv>
                <Button primary onClick={bmiCalculate}>
                    Hesapla
                </Button>
                <Button onClick={clearInput}>
                    Temizle
                </Button>
            </MainButtonDiv>
            <Result>
                {calculate}
            </Result>
            <ResultDescription>
                
                { calculate<18.5 && 
                    <h1>
                        Underweight
                    </h1>
                }
                {   calculate>18.5 && calculate<24.9 &&
                    <h1>
                    Healthy Weight
                    </h1>
                }
                {   calculate>25 && calculate<29.9 &&
                    <h1>
                    Healthy Weight
                    </h1>
                }
                {   calculate==30 &&
                    <h1>
                    Healthy Weight
                    </h1>
                }
            </ResultDescription>
        </div>
    )
}
export default BmiContent;