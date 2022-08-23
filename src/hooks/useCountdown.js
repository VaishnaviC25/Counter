import { useEffect, useState } from 'react';

const useCountdown = (targetTime) => {

  const [countDown, setCountDown] = useState(
    targetTime - 1
  );

  
  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  console.log(countDown);
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
//console.log(days + ":" + hours + ":"+ minutes +":" +seconds);
  return [days, hours, minutes, seconds];
};

export { useCountdown };
