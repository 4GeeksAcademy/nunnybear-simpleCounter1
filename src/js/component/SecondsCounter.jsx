//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

function SimpleCounter(props){
    return (<div className="counterBg">

    <div className="timerClock"><i class="bi bi-clock"></i></div>
    <div className="fifthBox">{props.NumFive}</div>
    <div className="fourthBox">{props.NumFour}</div>
    <div className="thirdBox">{props.NumThree}</div>
    <div className="secondBox">{props.NumTwo}</div>
    <div className="firstBox">{props.NumOne}</div>
    </div>);

}
SimpleCounter.propTypes = {
    NumFive: PropTypes.number,
    NumFour: PropTypes.number,
    NumThree: PropTypes.number,
    NumTwo: PropTypes.number,
    NumOne: PropTypes.number
};

let counter=0;
setInterval(function(){
    const fifthBox = Math.floor(counter/100000);
    const fourthBox = Math.floor(counter/10000);
    const thirdBox = Math.floor(counter/1000);
    const secondBox = Math.floor(counter/100);
    const firstBox = Math.floor(counter/2);
    console.log(fifthBox, fourthBox, thirdBox, secondBox, firstBox)
    counter++;

ReactDOM.render(
<SimpleCounter NumOne={firstBox} NumTwo={secondBox} NumThree={thirdBox} NumFour={fourthBox} NumFive={fifthBox} />, document.querySelector("#app")
);

}, 1000);

export default SecondsCounter;