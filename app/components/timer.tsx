"use client";
import { useEffect, useMemo, useState } from "react";

type TimerState = "stopped" | "running" | "paused";

type TimerEvent = {
  type: TimerState;
  timestamp: number;
};

const POMODORO_MINUTES = 24;

const Timer = () => {
  const [timerEvents, setTimerEvents] = useState<TimerEvent[]>([]);
  const [tick, setTick] = useState(0);

  const calculatePausedMilliseconds = (timerEvents: TimerEvent[]) => {
    let pausedTime = 0;
    for (let i = 0; i < timerEvents.length; i++) {
      if (timerEvents[i].type === "paused") {
        const nextTime = timerEvents[i + 1]?.timestamp ?? Date.now();
        pausedTime += nextTime - timerEvents[i].timestamp;
      }
    }

    return pausedTime;
  };

  const { timerState, startTime, pausedTime } = useMemo(() => {
    const lastEvent = timerEvents[timerEvents.length - 1];
    const pausedTime = calculatePausedMilliseconds(timerEvents);

    if (lastEvent) {
      return {
        timerState: lastEvent.type,
        startTime: timerEvents[0].timestamp,
        pausedTime,
      };
    }

    return { timerState: "stopped", startTime: 0, pausedTime: 0 };
  }, [timerEvents]);

  const createTimerEvent = (type: TimerState) => {
    setTimerEvents([...timerEvents, { type, timestamp: Date.now() }]);

    // TODO: save timerEvents to localStorage

    if (type === "stopped") {
      setTimerEvents([]);
    }
  };

  useEffect(() => {
    if (timerState === "running") {
      setTimeout(() => {
        setTick(() => tick + (1 % 2));
      }, 50);
    }
  }, [tick, timerState]);

  const { minutes, seconds } = useMemo(() => {
    if (timerState === "stopped") {
      return { minutes: "25", seconds: "00" };
    }

    const totalSeconds = Math.floor(
      (Date.now() - startTime - pausedTime) / 1000
    );
    const minutes = String(
      POMODORO_MINUTES - Math.floor(totalSeconds / 60)
    ).padStart(2, "0");
    const seconds = String(59 - (totalSeconds % 60)).padStart(2, "0");

    return { minutes, seconds };
  }, [tick, timerState]);

  return (
    <div className="flex flex-row flex-nowrap">
      <span className="text-8xl font-bold text-white drop-shadow-2xl w-80">
        {minutes}:{seconds}
      </span>
      <div className="flex flex-col justify-center items-center">
        <button onClick={() => createTimerEvent("running")}>Start</button>
        <button
          disabled={timerState !== "running"}
          onClick={() => createTimerEvent("paused")}
        >
          Pause
        </button>
        <button
          disabled={timerState !== "running"}
          onClick={() => createTimerEvent("stopped")}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
