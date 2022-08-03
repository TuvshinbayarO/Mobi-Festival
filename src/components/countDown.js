import React, {useState, useEffect, useRef} from "react";

const CountDown = () => {

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Aug 5, 2022, 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  },[])

  return (
    <div className="flex justify-center items-center text-center py-32">
        <div className="flex flex-col justify-center items-center p-10 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 space-y-5 w-[80%] outline outline-offset-2 outline-1 outline-pink-500 rounded-lg">
            <section><p>{timerDays}</p> <small>Day</small></section>
            <section><p>{timerHours}</p><small>Hours</small></section>
            <section><p>{timerMinutes}</p><small>Minutes</small></section>
            <section><p>{timerSeconds}</p><small>Seconds</small></section>
        </div>
    </div>
  )
}

export default CountDown;