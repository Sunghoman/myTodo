import './Timer.css'
import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return(() => clearInterval(id))
  }, []);
  
  const weeks = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

  return (
    <section className='dateContainer'>
      <span>{time.getMonth() + 1}월 {time.getDate()}일 {weeks[time.getDay()]}</span>
      <h1>{time.getHours()} : {time.getMinutes()}</h1>
      {/* <h1>{time.toLocaleTimeString()}</h1> */}
    </section>
  )
}