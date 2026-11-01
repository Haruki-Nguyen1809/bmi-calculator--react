import Button from "../Button/Button";
import { useState } from "react"; 
import StatusDiv from "../statusDiv/statusDiv";


export default function BMI() {
    const [weightUnitsDefault, setWeightUnitsDefault] = useState('kg'); 
    const [heightUnitsDefault, setHeightUnitsDefault] = useState('cm');
    const [inputHeightValue, setInputHeightValue] = useState('');
    const [inputWeightValue, setInputWeightValue] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
    function check() {
        if (inputHeightValue.trim().length === 0 || inputWeightValue.trim().length === 0) {
            return false;
        }
        return true;
    }
    let valueInOrNot = check();
    function inputValidation() {
        if (isNaN(inputHeightValue) || inputHeightValue <= 0 || isNaN(inputWeightValue) || inputWeightValue <= 0) {
            alert("Please enter valid number");
            return false;
        }
        return true;
    }
    function weightUnitsSelection(e) {
        setWeightUnitsDefault(e.target.value);
    }
    function heightUnitsSelection(e) {
        setHeightUnitsDefault(e.target.value);
    }
    function heightValueInput(e) {
        setInputHeightValue(e.target.value);
    }
    function weightValueInput(e) {
        setInputWeightValue(e.target.value);
    }
    function deleteAc(status) {
        if (status === true) {
            setWeightUnitsDefault('kg');
            setHeightUnitsDefault('cm');
            setInputHeightValue('');
            setInputWeightValue('');
            setBmiResult(null);
        } else {
            return;
        }
    }
    function calculate(value) {
        if (value === true) {
            if (inputValidation() === false) {
                return;
            }
            if ((heightUnitsDefault !== 'cm' || weightUnitsDefault !== 'kg') && (heightUnitsDefault !== 'inch' || weightUnitsDefault !== 'pound')) {
                alert("Please choose correct pair of units");
                return;
            }
            if (heightUnitsDefault === 'cm' && weightUnitsDefault === 'kg') {
                setBmiResult((inputWeightValue / Math.pow((inputHeightValue / 100), 2)).toFixed(2));
            } else if (heightUnitsDefault === 'inch' && weightUnitsDefault === 'pound') {
                setBmiResult(((inputWeightValue / Math.pow(inputHeightValue, 2)) * 703).toFixed(2));
            }
        }
    }
    function resultDiv() {
        if (bmiResult === null) {
            return;
        }
        if (bmiResult < 18.5) {
            return <><StatusDiv status="underweight">Your BMI is {bmiResult}, indicating you are underweight.</StatusDiv></>
        } else if (bmiResult >= 18.5 && bmiResult < 25.0) {
            return <><StatusDiv status="normal">Your BMI of {bmiResult} falls within the ideal range.</StatusDiv></>
        } else if (bmiResult >= 25.0 && bmiResult < 30.0) {
            return <><StatusDiv status="overweight">Your BMI of {bmiResult} is slightly above the healthy range.</StatusDiv></>
        } else {
            return <><StatusDiv status="obease">Your BMI is {bmiResult}, which falls into the obese category.</StatusDiv></>
        }
        
    }
    return (
        <div className="bmi-card">
            <h1>BMI Calculator</h1>
            <label htmlFor="weightEl">Weight:</label>
            <select name="weightUnits" id="weight-units" onChange={weightUnitsSelection} value={weightUnitsDefault}>
                <option value="kg">Kg</option>
                <option value="pound">Pound</option>
            </select>
            <input type="text" id="weightEl" placeholder="Enter..." onChange={weightValueInput} value={inputWeightValue}/>
            <label htmlFor="heightEl">Height:</label>
            <select name="heightUnits" id="height-units" onChange={heightUnitsSelection} value={heightUnitsDefault}>
                <option value="cm">Cm</option>
                <option value="inch">Inch</option>
            </select>
            <input type="text" id="heightEl" placeholder="Enter..." onChange={heightValueInput} value={inputHeightValue}/>
            <div className="btn-row">
                <Button mode="danger" onClick={() => deleteAc(valueInOrNot)}>AC</Button>
                <Button mode="safe" onClick={() => calculate(valueInOrNot)}>Calculate</Button>
            </div>
            {bmiResult !== null? resultDiv() : null}
        </div>
    );
}
