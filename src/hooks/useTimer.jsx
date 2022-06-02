import { useState } from "react";



export const useTimer = (waitDuration) => {

    const [timerComplete, setTimerComplete] = useState(false);

    const [timer, setTimer] = useState(null);


    const startTimer = () => {
        setTimer(setTimeout(() => {
            setTimerComplete(true);
            console.log("timer completed!");
        }, waitDuration))
        console.log("timer started...", timer);
    };

    const restartTimer = () => {
        setTimerComplete(false);
        console.log("timer stopped!", timer)
        clearTimeout(timer);
        startTimer();
    };


    return { timerComplete, restartTimer };


};
