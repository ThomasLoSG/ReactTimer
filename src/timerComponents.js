'use strict';

export const Number = (props) =>{
    return <TimerDisplay value={props.number} />;
}
export const Colon = (props) =>{
    return <TimerDisplay value=":" />;
}
export const Dot = (props) =>{
    return <TimerDisplay value="." />;
}
const TimerDisplay = (props) =>{
    return <div class="timer-text">{props.value}</div>;
}
export const TimerReset = (props) => {
    return <button class="timer-button" onClick={props.onClick}>Reset</button>
}
export const TimerLap = (props) => {
    return <button class="timer-button" onClick={props.onClick}>Lap</button>
}
export const TimerStart = (props) => {
    return <button class="timer-button" onClick={props.onClick}>Start</button>
}
export const TimerStop = (props) => {
    return <button class="timer-button" onClick={props.onClick}>Stop</button>
}

export const LapTable = (props) => {
    return (
       <ul class="laps">
         {props.laps.map((value, index) => {
           return <li key={index}>{value}</li>
         })}
       </ul>);
}

Number.propTypes = {
    number: PropTypes.number,
}
TimerDisplay.propTypes = {
    value: PropTypes.string,
}

