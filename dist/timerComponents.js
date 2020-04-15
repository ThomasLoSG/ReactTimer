'use strict';

export var Number = function Number(props) {
    return React.createElement(TimerDisplay, { value: props.number });
};
export var Colon = function Colon(props) {
    return React.createElement(TimerDisplay, { value: ":" });
};
export var Dot = function Dot(props) {
    return React.createElement(TimerDisplay, { value: "." });
};
var TimerDisplay = function TimerDisplay(props) {
    return React.createElement(
        "div",
        { "class": "timer-text" },
        props.value
    );
};
export var TimerReset = function TimerReset(props) {
    return React.createElement(
        "button",
        { "class": "timer-button", onClick: props.onClick },
        "Reset"
    );
};
export var TimerLap = function TimerLap(props) {
    return React.createElement(
        "button",
        { "class": "timer-button", onClick: props.onClick },
        "Lap"
    );
};
export var TimerStart = function TimerStart(props) {
    return React.createElement(
        "button",
        { "class": "timer-button", onClick: props.onClick },
        "Start"
    );
};
export var TimerStop = function TimerStop(props) {
    return React.createElement(
        "button",
        { "class": "timer-button", onClick: props.onClick },
        "Stop"
    );
};

export var LapTable = function LapTable(props) {
    return React.createElement(
        "ul",
        { "class": "laps" },
        props.laps.map(function (value, index) {
            return React.createElement(
                "li",
                { key: index },
                value
            );
        })
    );
};

Number.propTypes = {
    number: PropTypes.number
};
TimerDisplay.propTypes = {
    value: PropTypes.string
};