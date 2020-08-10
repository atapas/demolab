import React, { useState, useEffect } from "react"
import Table from "react-bootstrap/Table";

export default () => {

    const [data, setData] = useState([]);
   
    useEffect(() => {
        console.log('Initial Load');
       let cases = getCases();
       setData(() => ([...data, ...cases]));
    },[]);

    useEffect(() => {
        console.log('On data change');
    },[data]);

    const getCases = () => {
        let arr = [];
        arr.push(constructObj(true, 0, 'true', '0'));
        arr.push(constructObj(true, 1, 'true', '1'));
        arr.push(constructObj(undefined, undefined, 'undefined', 'undefined'));
        arr.push(constructObj(false, 0, 'false', '0'));
        arr.push(constructObj(null, false, 'null', 'false'));
        arr.push(constructObj(null, null, 'null', 'null'));
        arr.push(constructObj(0, 0, '0', '0'));
        arr.push(constructObj('0', 0, "'0'", '0'));
        arr.push(constructObj('9', 9, "'9'", '9'));
        arr.push(constructObj('', 0, '""', '0'));
        arr.push(constructObj({name: 'tapas'}, {name: 'tapas'}, "{name: 'tapas'}", "{name: 'tapas'}"));
        arr.push(constructObj([9, 2], '9,2', "[9, 2]", "'9,2'"));
        arr.push(constructObj(null, undefined, "null", "undefined"));
        arr.push(constructObj(null, 0, "null", "0"));
        arr.push(constructObj(false, undefined, "false", "undefined"));
        arr.push(constructObj(0, NaN, "0", "NaN"));
        arr.push(constructObj([5,6], [5,6], "[5,6]", "[5,6]"));
        arr.push(constructObj(+0, -0, '+0', '-0'));
        arr.push(constructObj(NaN, NaN, 'NaN', 'NaN'));
        return arr;
    }

    const constructObj = (lhs, rhs, lhsDisp, rhsDisp) => {
        let obj = {};
        obj['lhs'] = lhs
        obj['rhs'] = rhs;
        obj['lhsDisplay'] = lhsDisp;
        obj['rhsDisplay'] = rhsDisp;
        return obj;
    }

    const calculateEquals = (lhs, rhs) => {
        return lhs == rhs;
    }

    const calculateStrictEquals = (lhs, rhs) => {
        return lhs === rhs;
    }

    const calculateObjectIs = (lhs, rhs) => {
        return Object.is(lhs, rhs);
    }

    const CustomTD = props => {
        const color = props.result ? '#008000' : '#FF0000';
        const text = props.result ? 'true' : 'false';
        return(
            <td style={{backgroundColor: color}}>{ text }</td>
        )
    }

    return (
        <>
        <Table responsive bordered hover variant="dark">
            <thead>
            <tr>
                <th>LHS</th>
                <th>RHS</th>
                <th>==</th>
                <th>===</th>
                <th>Object.is()</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map((expression, index) => (
                        <tr key={index}>
                            <td>{ expression.lhsDisplay }</td>
                            <td>{ expression.rhsDisplay }</td>
                            <CustomTD result={ calculateEquals(expression.lhs, expression.rhs) } />
                            <CustomTD result={ calculateStrictEquals(expression.lhs, expression.rhs) } />
                            <CustomTD result={ calculateObjectIs(expression.lhs, expression.rhs) } />
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        </>
    )
}
