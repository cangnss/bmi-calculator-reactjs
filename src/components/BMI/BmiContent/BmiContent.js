import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {MainTextDiv,TextDiv,MainButtonDiv,Input,Button,Result,ResultDescription} from '../../../styles/Calculate/Calculate'

function BmiContent() {

    const [calculate, setCalculate] = useState(0);

    useEffect(()=>{

    },[]);

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
                {calculate !== 'NaN' ? calculate : 'Lütfen değer giriniz'}
            </Result>
            <ResultDescription>
                { calculate !== 0 && calculate<18.5 && 
                    <div>
                        <h4>
                            Underweight
                        </h4>
                        <Link to="/">Underweight diyet listesi için..</Link>
                    </div>
                }
                {   calculate !== 0 && calculate>18.5 && calculate<24.9 &&
                    <div>
                        <h4>
                        Healthy Weight
                        </h4>
                        <Link to="/">Healthy Weight diyet listesi için..</Link>
                    </div>
                    
                }
                {   calculate !== 0 && calculate>25 && calculate<29.9 &&
                    <div>
                        <h4>
                        Overweight
                        </h4>
                        <Link to="/">Overweight diyet listesi için..</Link>
                    </div>
                }
                {   calculate !== 0 && calculate>30 &&
                    <div>
                        <h4>
                        Obese
                        <Link to="/">Obese diyet listesi için..</Link>
                        </h4>
                    </div>
                }
            </ResultDescription>
        </div>
    )
}
export default BmiContent;