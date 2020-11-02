import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";

import style from './react-hook-js-schedule.module.css';

const SetIntervalDemo = () => {
    const [realTime, setRealTime] = useState(false);
    const [counter, setCounter] = useState(0);
    const countRef = useRef(counter);
    countRef.current = counter;
    
    const manageRealTime = () => {
        setRealTime(!realTime);
    }

    useEffect(() => {
        let interval;
        if (realTime) {
            interval = setInterval(() => {
                setCounter(countRef.current + 1);
                console.log('In setInterval', countRef.current);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [realTime]);

    return(
        <div className={style.demo}>
            <h2>setInterval Demo</h2>
            <Button 
                className={style.btnSpacing}
                variant={realTime? 'danger' : 'success'} 
                onClick={() => manageRealTime()}>
                    {realTime ? 'Stop Real-Time': 'Start Real-Time'}
            </Button>
            <div className={style.radial}>
                <span>{counter}</span>
            </div>
        </div>    
    )
}

const SetTimeoutDemo = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('setTimeout called!');
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    const schedule = () => {
        setTimeout(() => {
            console.log('setTimeout called!');
        }, 1000);
    }

    return(
        <div className={style.demo}>
            <h2>setTimeout Demo</h2>
            <Button 
                className={style.btnSpacing}
                variant='info'
                onClick={() => schedule()}>
                    Schedule Once
            </Button>
        </div>    
    )
}


export default () => {
    return(
        <>
            <h1>JS Scheduling methods with React Hooks</h1>
            <div className={style.container}>
                <SetIntervalDemo />
                <SetTimeoutDemo />
            </div>
        </>
    )
} 