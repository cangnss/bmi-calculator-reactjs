import React from 'react'
import { useParams } from 'react-router-dom';
import {DietListDiv,DietListTitle} from '../../styles/DietList/DietList';

const diets = [
    {
        "id":1,
        "breakfast":[
            "1/2 lemon 1 glass water","1 boiled egg","1 tbls 0 fat sour cream","1 slice whole wheat bread","1 glass of 0 fat milk"
        ],
        "lunch":["400 ml water 30 min before lunch","Vegetable salad","Soup","Grilled chicken","Grilled water"],
        "snackLunch":["Choose 1 fruit with 2 glasses of water. Fruits: Banana, Orange"],
        "dinner":["Eat last meal at 6 pm","1 boiled egg","2 slices whole wheat bread","1 tbls 0 fat sour cream","1 slice 0 fat white cheese"]
    },
    {
        "id":2,
        "breakfast":[
            "2 Banana, 10 almonds",
            "1 dairy milk, 1 banana",
            "4 spoon bornvita, 350ml milk"
        ],
        "lunch":["routin lunch with salad, 200 gm curd"],
        "snackLunch":["1 dairy milk,1 banana","4 spoon borunvita","350ml milk"],
        "dinner":["routin dinner, 1 glass milk","1 butter cube 1 spoon sugar"]
    }
];

function DietList() {
    const params = useParams();//linkten gelen id'yi almak için kullandım.
    console.log(params);
    return (
        <DietListDiv>
            {diets.map((diet)=>{
                if(diet.id === +params.id){
                return(
                    <div key={diet.id}>
                        <DietListTitle>BREAKFAST</DietListTitle>
                        <p>{diet.breakfast}</p>
                        <DietListTitle>LUNCH</DietListTitle>
                        <p>{diet.lunch}</p>
                        <DietListTitle>SNACK LUNCH</DietListTitle>
                        <p>{diet.snackLunch}</p>
                        <DietListTitle>DINNER</DietListTitle>
                        <p>{diet.dinner}</p>
                    </div>
                )}
            })}
        </DietListDiv>
        
    )
}
export default DietList;