import React, { useState, useEffect } from "react";
import StyledButton from '../../components/styled/styled-button';

export default () => {
    const [supported, setSupported] = useState(false);
    const [rangeValue, setRangeValue] = useState(80);
    const minRange = 60;
    const maxRange = 500;
   
    useEffect(() => {
        if (ResizeObserver) {
            setSupported(true);
        } else {
            setSupported(false);
        }
    },[]);

    const colorText = (entry) => {
        if (rangeValue >=minRange && rangeValue <=200) {
            entry.target.style.color = 'green';
        } else if (rangeValue >=201 && rangeValue <=400) {
            entry.target.style.color = 'orange';
        } else if (rangeValue >=401 && rangeValue <=maxRange) {
            entry.target.style.color = 'red';
        }
    }

    useEffect(() => {
        try {
            let dumbBtn = document.getElementById('dumbBtnId');
            let textarea = document.getElementById('dumbAreaId');
            var resizeObserver = new ResizeObserver(entries => {
                for(const entry of entries) {
                    colorText(entry);
                }
            });
            resizeObserver.observe(dumbBtn);
            resizeObserver.observe(textarea);
        } catch(e) {
            setSupported(false);
            console.log(e);      
        }
    }, [rangeValue]);

    const resize = event => {
        const value = event.target.valueAsNumber;
        setRangeValue(value);
        let dumbBtn = document.getElementById('dumbBtnId');
        dumbBtn.style.width = `${value}px`;

        let dumbArea = document.getElementById('dumbAreaId');
        dumbArea.style.width = `${value}px`;
    }


    return(
        
        <div className="column">
            Drag me to resize the button
            <div>
                <span>(minimum: {minRange}px)</span> {' '}
                <input onChange={(event) => resize(event)} type="range" min={minRange} max={maxRange} defaultValue={rangeValue} />
                <span>{' '} {maxRange}px</span>
            </div>
            <span>{rangeValue}px</span>
            <br />
            <StyledButton id="dumbBtnId">I am a Dumb Button</StyledButton> <br />
            <textarea id="dumbAreaId" width={rangeValue}>I am a dumb text area</textarea>
        </div>
        
    )
}