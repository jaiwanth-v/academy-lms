import React, { useState, useEffect } from 'react';
import moment from 'moment'

const Clock = () => {
  var start = new Date()
  let stime = { currtime : moment(start).format('LT') , currdate : moment(start).format('Do MMM dddd')}
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setTime(time => {
            var d = new Date();
            time = { currtime : moment(d).format('LT') , currdate : moment(d).format('Do MMM dddd')}
            return time;
          });
        }, 1000);
        return () => clearInterval(interval);
      }, []);


    return (   
        <div className='displayflex'>
    <span className='clock-time'>{time.currtime ? time.currtime : stime.currtime}</span>
    <span className='clock-date'>{time.currdate ? time.currdate : stime.currdate}</span>
    </div>
     )
}

export default Clock