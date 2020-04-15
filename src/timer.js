'use strict';
import { Number, Colon, Dot } from './timerComponents.js';
import { TimerReset, TimerLap, TimerStart, TimerStop, LapTable } from './timerComponents.js';

class Timer extends React.Component{
    handleReset(e){
        clearInterval(this.state.interval);
        this.setState({
            min1:0,
            min2:0,
            sec1:0,
            sec2:0,
            mse1:0,
            mse2:0,
            status:'start',
            interval: null,
            laps:[]
        });
    }
    handleStart(e){
        this.setState({
            status:'running',
            interval: setInterval(() => {
                var vmin1 = this.state.min1;
                var vmin2 = this.state.min2;
                var vsec1 = this.state.sec1;
                var vsec2 = this.state.sec2;
                var vmse1 = this.state.mse1;
                var vmse2 = this.state.mse2+1;
                var vstatus = this.state.status;
                if (vmse2 > 9){
                    vmse2 = 0;
                    vmse1++;
                }
                if (vmse1 > 9){
                    vmse1 = 0;
                    vsec2++;
                }
                if (vsec2 > 9){
                    vsec2 = 0;
                    vsec1++;
                }
                if (vsec1 == 6){
                    vsec1 = 0;
                    vmin2++;
                }
                if (vmin2 > 9){
                    vmin2 = 0;
                    vmin1++;
                }
                if (vmin1 == 6){
                    vstatus = 'start';
                }
                this.setState({
                    min1:vmin1,
                    min2:vmin2,
                    sec1:vsec1,
                    sec2:vsec2,
                    mse1:vmse1,
                    mse2:vmse2,
                    status:vstatus
                 })
            }, 10)
        });
    }
    handleStop(e){
        clearInterval(this.state.interval);
        this.setState({
            status:'start',
            interval:null
        });
    }
    handleLap(e){
        var vlaps = this.state.laps;
        vlaps.push(this.getTime());
        this.setState({
            min1:0,
            min2:0,
            sec1:0,
            sec2:0,
            mse1:0,
            mse2:0,
            laps:vlaps
        });
    }
    getTime(){
        return (this.state.laps.length + 1) + " - "
                + this.state.min1+ this.state.min2
                + ":" +this.state.sec1+ this.state.sec2
                + "." +this.state.mse1+ this.state.mse2;
    }
    constructor(props){
        super(props);
        this.state = {
            min1:0,
            min2:0,
            sec1:0,
            sec2:0,
            mse1:0,
            mse2:0,
            status:'start',
            interval:null,
            laps:[]
        };
        this.handleReset = this.handleReset.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleLap = this.handleLap.bind(this);
    }
    render(){
        if (this.state.status === 'start'){
            return (
                <div>
                    <Number number={this.state.min1} />
                    <Number number={this.state.min2} />
                    <Colon className="number"/>
                    <Number number={this.state.sec1} />
                    <Number number={this.state.sec2} />
                    <Dot className="number"/>
                    <Number number={this.state.mse1} />
                    <Number number={this.state.mse2} />
                    <br/>
                    <TimerReset onClick={this.handleReset}/>
                    <TimerStart onClick={this.handleStart}/>
                    <br/>
                    <LapTable laps={this.state.laps}/>
                </div>
            );
        }else if (this.state.status === 'running'){
            return (
                <div>
                    <Number number={this.state.min1} />
                    <Number number={this.state.min2} />
                    <Colon className="number"/>
                    <Number number={this.state.sec1} />
                    <Number number={this.state.sec2} />
                    <Dot className="number"/>
                    <Number number={this.state.mse1} />
                    <Number number={this.state.mse2} />
                    <br/>
                    <TimerLap onClick={this.handleLap}/>
                    <TimerStop onClick={this.handleStop}/>
                    <LapTable laps={this.state.laps}/>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <Timer/>,
    document.getElementById('app')
);

