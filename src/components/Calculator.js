import React, { useState } from 'react';
import "./style.css"

var op1, op2, dotctr = 0;
var lastOp;
function Calculator() {

    const [ans, setAns] = useState("");

    const handleAns = (e) => {
        console.log("answer changed");
    }
    const setVal = (e) => {
        setAns(ans + e.target.value)
    }
    const setValFloat = (e) => {
        console.log(typeof(ans));
        if (dotctr !== 0 || ans.length === 0 || ans.includes('.')) {
            alert("Wrong Input!!")
            clear();
        }
        else {
            setAns(ans + ".")
            dotctr++;
        }
    }
    const clear = () => {
        setAns("")
        dotctr = 0;
        op1 = 0;
        op2 = 0;
    }
    const calcVal = (e) => {
        lastOp = e.target.value;
        op2 = parseFloat(ans);
        op1 = op2
        setAns("")
        dotctr = 0;
        // console.log(lastOp+op1);
    }
    const calcFinal = () => {
        let res;
        op2 = parseFloat(ans);
        setAns("")
        switch (lastOp) {
            case "+":
                res = op1 + op2;
                setAns(res)
                break;
            case "-":
                res = op1 - op2;
                setAns(res)
                break;
            case "mul":
                res = op1 * op2;
                setAns(res)
                break;
            case "div":
                if ( op2 === 0 ) {
                    alert("Division by Zero Error!!");
                    clear();
                }
                else{
                    res = op1 / op2;
                    setAns(res)
                }
                break;
            default:
                setAns(op1)
                break;
        }
        dotctr = 0;
    }
    return (
        <div className='my-div container '>
            <table >
                <tbody>
                    <tr>
                        <td colSpan={4} ><textarea cols="15" rows="3" value={ans} onChange={handleAns}></textarea></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td colSpan={2} ><button className="btn " id="c-but" onClick={clear}>C</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn " value={7} onClick={setVal}>7</button> </td>
                        <td><button className="btn " value={8} onClick={setVal}>8</button> </td>
                        <td><button className="btn " value={9} onClick={setVal}>9</button> </td>
                        <td><button className="btn " value={"div"} onClick={calcVal}>&#247;</button> </td>
                    </tr>
                    <tr>
                        <td><button className="btn " value={4} onClick={setVal}>4</button> </td>
                        <td><button className="btn " value={5} onClick={setVal}>5</button> </td>
                        <td><button className="btn " value={6} onClick={setVal}>6</button> </td>
                        <td><button className="btn " value={"mul"} onClick={calcVal}>&#215;</button> </td>
                    </tr>
                    <tr>
                        <td><button className="btn " value={1} onClick={setVal}>1</button> </td>
                        <td><button className="btn " value={2} onClick={setVal}>2</button> </td>
                        <td><button className="btn " value={3} onClick={setVal}>3</button> </td>
                        <td><button className="btn " value={"-"} onClick={calcVal}>&#8722;</button> </td>
                    </tr>
                    <tr>
                        <td><button className="btn " value={0} onClick={setVal}>0</button> </td>
                        <td><button className="btn " onClick={setValFloat}>.</button> </td>
                        <td><button className="btn " onClick={calcFinal}>=</button> </td>
                        <td><button className="btn " value={"+"} onClick={calcVal}>&#43;</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calculator