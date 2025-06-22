import React from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>{seconds} seconds have passed since you opened the page.</div>
  );
}

export default Timer;
