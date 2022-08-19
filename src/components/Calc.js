import { Container, Typography } from '@mui/material';
import {useState} from 'react'

const Calculator = () =>{
const [calc,setCalc] = useState("");
const [result, setResult] = useState("");

const ops = ['/', '*', '+', '-', '.'];

const Button = ({thing}) =>{
    return(
    <button onClick={e => updateCalc(e.target.textContent)} className={"btn btn-primary m-1"}>{thing}</button>
    )
}

    const updateCalc = value =>{
        if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
            return;
        }

        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc+ value).toString());
        }
    }

    const calculate = () =>{
        setCalc(eval(calc.toString()))
    }

    const del = () =>{
        const value = ""
        setCalc(value)
        setResult(value)
    }

    const deleteLast = () =>{
        if (calc == ""){
            return;
        }

        const value = calc.slice(0,-1);

        setCalc(value);
    }

    return(
        <Container sx={{display:"flex", flexDirection:"column",alignItems:"center"}}>
            <Typography variant="h1" color="white">Calculator</Typography>
        <div id={"centras"}>
            <div id={"vaizdas"}>
                {result ? <span>({result})</span> : ''}
                {calc || "0"}
            </div>
            <div id={"batonai"}>
                <table>

                <tr>
                <Button thing={"*"}/>
                <Button thing={"/"}/>
                <Button thing={"+"}/>
                <Button thing={"-"}/>
                <button onClick={del} className={"btn btn-primary m-1"}>C</button>
                <button onClick={deleteLast} className={"btn btn-primary m-1"}>Del</button>
                </tr>

                <tr>
                <Button thing={"7"}/>
                <Button thing={"8"}/>
                <Button thing={"9"}/>
                </tr>

                <tr>
                <Button thing={"4"}/>
                <Button thing={"5"}/>
                <Button thing={"6"}/>
                </tr>

                <tr>
                <Button thing={"1"}/>
                <Button thing={"2"}/>
                <Button thing={"3"}/>
                </tr>

                <tr>
                <Button thing={"0"}/>
                <Button thing={"."}/>
                    <button onClick={calculate} className={"btn btn-primary m-1"}>SUM</button>
                </tr>

                </table>
            </div>
            <script src="bower_components/dist/number-to-text.js"></script>

        </div>
        </Container>
    )
}
export default Calculator