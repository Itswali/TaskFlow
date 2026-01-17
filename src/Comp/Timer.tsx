import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
  let interval = null;
  if (isActive && seconds > 0) {
    interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  } else if (seconds === 0 && isActive) { // Check isActive to prevent double alerts
    setIsActive(false);
    alert("Time is Up!");
  }
  return () => clearInterval(interval);
}, [isActive, seconds]);

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-xs text-center bg-white">
      <h2 className="text-2xl font-bold mb-4">Countdown</h2>
      <div className="text-4xl font-mono mb-4 text-sky-600">
        {seconds}s
      </div>

      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-4 py-2 rounded text-white ${isActive ? 'bg-red-400' : 'bg-green-500'}`}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>

        <button
          onClick={() => {setSeconds(60); setIsActive(false);}}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
