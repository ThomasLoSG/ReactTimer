'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Number, Colon, Dot } from './timerComponents.js';
import { TimerReset, TimerLap, TimerStart, TimerStop, LapTable } from './timerComponents.js';

var Timer = function (_React$Component) {
    _inherits(Timer, _React$Component);

    _createClass(Timer, [{
        key: 'handleReset',
        value: function handleReset(e) {
            clearInterval(this.state.interval);
            this.setState({
                min1: 0,
                min2: 0,
                sec1: 0,
                sec2: 0,
                mse1: 0,
                mse2: 0,
                status: 'start',
                interval: null,
                laps: []
            });
        }
    }, {
        key: 'handleStart',
        value: function handleStart(e) {
            var _this2 = this;

            this.setState({
                status: 'running',
                interval: setInterval(function () {
                    var vmin1 = _this2.state.min1;
                    var vmin2 = _this2.state.min2;
                    var vsec1 = _this2.state.sec1;
                    var vsec2 = _this2.state.sec2;
                    var vmse1 = _this2.state.mse1;
                    var vmse2 = _this2.state.mse2 + 1;
                    var vstatus = _this2.state.status;
                    if (vmse2 > 9) {
                        vmse2 = 0;
                        vmse1++;
                    }
                    if (vmse1 > 9) {
                        vmse1 = 0;
                        vsec2++;
                    }
                    if (vsec2 > 9) {
                        vsec2 = 0;
                        vsec1++;
                    }
                    if (vsec1 == 6) {
                        vsec1 = 0;
                        vmin2++;
                    }
                    if (vmin2 > 9) {
                        vmin2 = 0;
                        vmin1++;
                    }
                    if (vmin1 == 6) {
                        vstatus = 'start';
                    }
                    _this2.setState({
                        min1: vmin1,
                        min2: vmin2,
                        sec1: vsec1,
                        sec2: vsec2,
                        mse1: vmse1,
                        mse2: vmse2,
                        status: vstatus
                    });
                }, 10)
            });
        }
    }, {
        key: 'handleStop',
        value: function handleStop(e) {
            clearInterval(this.state.interval);
            this.setState({
                status: 'start',
                interval: null
            });
        }
    }, {
        key: 'handleLap',
        value: function handleLap(e) {
            var vlaps = this.state.laps;
            vlaps.push(this.getTime());
            this.setState({
                min1: 0,
                min2: 0,
                sec1: 0,
                sec2: 0,
                mse1: 0,
                mse2: 0,
                laps: vlaps
            });
        }
    }, {
        key: 'getTime',
        value: function getTime() {
            return this.state.laps.length + 1 + " - " + this.state.min1 + this.state.min2 + ":" + this.state.sec1 + this.state.sec2 + "." + this.state.mse1 + this.state.mse2;
        }
    }]);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this.state = {
            min1: 0,
            min2: 0,
            sec1: 0,
            sec2: 0,
            mse1: 0,
            mse2: 0,
            status: 'start',
            interval: null,
            laps: []
        };
        _this.handleReset = _this.handleReset.bind(_this);
        _this.handleStart = _this.handleStart.bind(_this);
        _this.handleStop = _this.handleStop.bind(_this);
        _this.handleLap = _this.handleLap.bind(_this);
        return _this;
    }

    _createClass(Timer, [{
        key: 'render',
        value: function render() {
            if (this.state.status === 'start') {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(Number, { number: this.state.min1 }),
                    React.createElement(Number, { number: this.state.min2 }),
                    React.createElement(Colon, { className: 'number' }),
                    React.createElement(Number, { number: this.state.sec1 }),
                    React.createElement(Number, { number: this.state.sec2 }),
                    React.createElement(Dot, { className: 'number' }),
                    React.createElement(Number, { number: this.state.mse1 }),
                    React.createElement(Number, { number: this.state.mse2 }),
                    React.createElement('br', null),
                    React.createElement(TimerReset, { onClick: this.handleReset }),
                    React.createElement(TimerStart, { onClick: this.handleStart }),
                    React.createElement('br', null),
                    React.createElement(LapTable, { laps: this.state.laps })
                );
            } else if (this.state.status === 'running') {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(Number, { number: this.state.min1 }),
                    React.createElement(Number, { number: this.state.min2 }),
                    React.createElement(Colon, { className: 'number' }),
                    React.createElement(Number, { number: this.state.sec1 }),
                    React.createElement(Number, { number: this.state.sec2 }),
                    React.createElement(Dot, { className: 'number' }),
                    React.createElement(Number, { number: this.state.mse1 }),
                    React.createElement(Number, { number: this.state.mse2 }),
                    React.createElement('br', null),
                    React.createElement(TimerLap, { onClick: this.handleLap }),
                    React.createElement(TimerStop, { onClick: this.handleStop }),
                    React.createElement(LapTable, { laps: this.state.laps })
                );
            }
        }
    }]);

    return Timer;
}(React.Component);

ReactDOM.render(React.createElement(Timer, null), document.getElementById('app'));