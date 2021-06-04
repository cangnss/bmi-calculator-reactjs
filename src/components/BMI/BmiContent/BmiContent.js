import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainTextDiv, TextDiv, MainButtonDiv, Input, Button, Result, ResultDescription } from '../../../styles/Calculate/Calculate'
import './BmiContent.css';

function BmiContent() {

    const [calculate, setCalculate] = useState(0);
    const [results, setResults] = useState([]);

    useEffect(() => {
        localStorage.getItem('bmi');
    }, []);

    function bmiCalculate() {
        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;
        const result = ((parseInt(weight) * parseInt(weight)) / parseInt(height)).toFixed(2);
        setCalculate(result);
        // addLocalStorage(result);
    }

    function clearInput() {
        const weight = document.getElementById('weight');
        const height = document.getElementById('height');
        weight.value = "";
        height.value = "";
    }

    // function addLocalStorage(rs) {
    //     let bmis = getBmis()
    //     setResults(bmis.concat(rs));
    //     localStorage.setItem('bmis', JSON.stringify(rs))
    // }

    // function getBmis() {
    //     let bmis = []
    //     if (localStorage.getItem('bmi') === null) {
    //         bmis = []
    //     } else {
    //         bmis = JSON.parse(localStorage.getItem('bmi'))
    //     }
    //     return bmis
    // }
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
                    Calculate
                </Button>
                <Button onClick={clearInput}>
                    Clear
                </Button>
                <Link to='/'>
                    <Button style={{ backgroundColor: 'blue' }}>What's BMI?</Button>
                </Link>
            </MainButtonDiv>
            <Result>
                {calculate !== 'NaN' ? calculate : 'Lütfen değer giriniz'}
            </Result>
            <ResultDescription>
                {calculate !== 0 && calculate < 18.5 &&
                    <div className="result-div">
                        <p className="result-text">
                            Underweight
                        </p>
                        <Link to="/dietlist/1">Underweight diet list..</Link>
                    </div>
                }
                {calculate !== 0 && calculate > 18.5 && calculate < 24.9 &&
                    <div>
                        <p className="result-text">
                            Healthy Weight
                        </p>
                        <Link to="/dietlist/1">Healthy Weight diet list..</Link>
                    </div>

                }
                {calculate !== 0 && calculate > 25 && calculate < 29.9 &&
                    <div>
                        <p className="result-text">
                            Overweight
                        </p>
                        <Link to="/dietlist/2">Overweight diet list..</Link>
                    </div>
                }
                {calculate !== 0 && calculate > 30 &&
                    <div>
                        <p className="result-text">
                            Obese
                        </p>
                        <Link to="/dietlist/2">Obese diet list..</Link>
                    </div>
                }
            </ResultDescription>

        </div>
    )
}
export default BmiContent;