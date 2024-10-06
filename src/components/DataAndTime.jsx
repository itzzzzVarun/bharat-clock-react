import { useEffect, useState } from 'react';

function DateAndTime () {

  const [time, setTime] = useState(new Date());
  useEffect (() => {
    let intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId);
    }
  }, [])
  return <p className="lead">This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default DateAndTime