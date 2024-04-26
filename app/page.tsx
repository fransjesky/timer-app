'use client';

import { useState, useRef } from 'react';
import { Button } from './components';

export default function Home() {
  const [timer, setTimer] = useState<number>(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const startTimeRef = useRef<number | null>(null);

  const startTimer = () => {
    if (!timerInterval) {
      startTimeRef.current = performance.now();
      const tick = setInterval(() => {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTimeRef.current!;
        setTimer(Math.floor(elapsedTime));
      }, 1);
      setTimerInterval(tick);
    }
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  const resetTimer = () => {
    setTimer(0);
  };

  const formatTime = (time: number) => {
    const milliseconds = String(time % 1000).padStart(3, '0');
    const seconds = String(Math.floor(time / 1000) % 60).padStart(2, '0');
    const minutes = String(Math.floor(time / (1000 * 60)) % 60).padStart(
      2,
      '0'
    );
    const hours = String(Math.floor(time / (1000 * 60 * 60))).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <main className='flex gap-y-10 flex-col items-center justify-center min-h-screen'>
      <h1 className='text-5xl tabular-nums'>{formatTime(timer)}</h1>
      <div className='flex gap-x-4'>
        <Button name='start' onClick={startTimer} />
        <Button name='stop' onClick={stopTimer} />
        <Button name='reset' onClick={resetTimer} />
      </div>
    </main>
  );
}
