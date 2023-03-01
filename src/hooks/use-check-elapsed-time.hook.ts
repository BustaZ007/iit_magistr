import { useState, useEffect } from 'react';

type TTimeoutTime = {
  [key: string]: number;
  init: number;
  now: number;
  min: number;
  hour: number;
  сейчас: number;
  час: number;
  мин: number;
};

const TimeoutsTime: TTimeoutTime = {
  hour: 3600000,
  now: 5000,
  min: 60000,
  сейчас: 5000,
  час: 3600000,
  мин: 60000,
  init: 0,
};

function useCheckElapsedTime(dateTime: moment.Moment) {
  const [elapsedTime, setElapsedTime] = useState<string>(
    dateTime.isValid() ? dateTime.fromNow(true) : ''
  );

  const timer = (ms: number): NodeJS.Timeout => {
    let timerId = setTimeout(() => {
      const time = dateTime.fromNow(true);
      const stage =
        Object.keys(TimeoutsTime).find((key: string) => time.includes(key)) ??
        'stop';

      setElapsedTime(time);

      if (stage !== 'stop') {
        timerId = timer(TimeoutsTime[stage] ?? 0);
      }
    }, ms);

    return timerId;
  };

  useEffect(() => {
    const timerId = timer(TimeoutsTime.init);
    return () => clearTimeout(timerId);
  }, []);

  return { elapsedTime };
}

export default useCheckElapsedTime;
