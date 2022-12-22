import React, { useRef } from 'react';

const Interval: React.FC = () => {
  const [seconds, setSeconds] = React.useState(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const secondsCounter = () => {
    //Add 1 second every second
    setSeconds((prev) => ++prev);
  };

  React.useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  function startTimer() {
    if (!!intervalRef.current) return;
    const interval = setInterval(secondsCounter, 1000);
    intervalRef.current = interval;
  }

  function stopTimer() {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <>
      <p style={{ textAlign: 'center' }}>{seconds} seconds passed</p>
      <div style={{ display: 'flex', justifyContent: 'center ' }}>
        <button onClick={stopTimer}>stop</button>
        <button onClick={startTimer}>start</button>
      </div>
    </>
  );
};

export default Interval;
