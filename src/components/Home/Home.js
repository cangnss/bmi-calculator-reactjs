import React from 'react'
import {HomeDiv,HomeContentDiv,HCTitle,HCDescription,Button} from '../../styles/Home/Home'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <HomeDiv>
            <HomeContentDiv>
                <HCTitle>What's BMI?</HCTitle>
                <HCDescription><strong>Body Mass Index (BMI)</strong> is a person's weight in kilograms divided by the square of height in meters. A high BMI can be an indicator of high body fatness. BMI can be used to screen for weight categories that may lead to health problems but it is not diagnostic of the body fatness or health of an individual</HCDescription>
                <hr/>
                <HCTitle>How do I calculate my BMI?</HCTitle>
                <HCDescription><strong>Body Mass Index (BMI)</strong> is a simple <strong>calculation</strong> using a person's height and weight. The <strong>formula</strong> is <strong>BMI</strong> = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared. A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9.</HCDescription>
            </HomeContentDiv>
            <Link to='/bmi'>
                <Button>BMI Calculator</Button>
            </Link>
        </HomeDiv>
    )
}
export default Home;