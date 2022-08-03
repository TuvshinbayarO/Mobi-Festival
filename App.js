import React, {useState, useEffect, useRef} from "react";
import Logo from './Assets/festival.png'
import Photo from './Assets/photo.jpg'
import Typewriter from 'typewriter-effect';

function App() {

  const [loading, setLoading] = useState(false)
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const startTimer = () => {
    const countDownDate = new Date('Aug 5, 2022, 00:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / (1000)) 
      if(distance < 0) { 
        clearInterval(interval.current)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  }, [])

  return (
    <div className="h-full w-full">
      {
        loading ? (<div className="h-screen flex justify-center items-center"><h1 className="font-bold text-5xl text-white text-center"><Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Mobi Festival 2022!')
            .callFunction(() => {
            })
            .pauseFor(1500)
            .deleteAll()
            .callFunction(() => {
            })
            .start();
        }}
      /></h1></div>) : (
          <div className="h-full">
            <div className="flex flex-col justify-center items-center h-full pt-0 sm:pt-0">
              <div className="flex flex-col justify-center items-center h-screen w-full" style={{ backgroundImage: `url(${Logo})` , backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', overflow:'hidden' }}>
                {/* <a href="#down" className=" pt-28">
                  <h2 className=" text-[65px] font-bold sm:block hidden">
                    <span><i></i>W</span>
                    <span><i></i>e</span>
                    <span><i></i>l</span>
                    <span><i></i>c</span>
                    <span><i></i>o</span>
                    <span><i></i>m</span>
                    <span><i></i>e</span>
                    <span><i></i>•</span>
                    <span><i></i>M</span>
                    <span><i></i>o</span>
                    <span><i></i>b</span>
                    <span><i></i>i</span>
                    <span><i></i>•</span>
                    <span><i></i>F</span>
                    <span><i></i>e</span>
                    <span><i></i>s</span>
                    <span><i></i>t</span>
                    <span><i></i>i</span>
                    <span><i></i>v</span>
                    <span><i></i>a</span>
                    <span><i></i>l</span>
                  </h2>
                </a> */}
                <div className=" text-red-500 flex justify-center items-center text-center pt-52 sm:pt-32 space-x-5 sm:space-x-10 text-2xl sm:text-4xl font-bold ">
                    <section><p>{timerDays}</p> <small>Day</small></section>
                    
                    <section><p>{timerHours}</p><small>Hours</small></section>
                    
                    <section><p>{timerMinutes}</p><small>Minutes</small></section>
                    
                    <section><p>{timerSeconds}</p><small>Seconds</small></section>
                </div>
                {/* <div className="block sm:hidden">
                  <a className="flex justify-center items-center" href="#down">
                    <h1 className="text-red-500 font-bold text-5xl text-center pt-96">Mobi Festival 2022</h1>
                  </a>
                </div> */}
              </div>
              {/* <div className="pt-5 flex flex-col justify-center items-center"> */}
                {/* <h1 className="text-3xl font-bold text-white cursor-pointer hover:opacity-70 transition-all duration-300">Газрын зураг</h1> */}
                {/* <div className="pt-5">
                  <a id="down">
                    <img className="h-screen sm:h-full" src={Photo} alt="Map" />
                    <img className="h-screen sm:h-full" src={Photo} alt="Map" />
                    <img className="h-screen sm:h-full" src={Photo} alt="Map" />
                    <img className="h-screen sm:h-full" src={Photo} alt="Map" />
                    <img className="h-screen sm:h-full" src={Photo} alt="Map" />
                    <img className="h-screen sm:h-full" src={Photo} alt="Map" />
                  </a>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
