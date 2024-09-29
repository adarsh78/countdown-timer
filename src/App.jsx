import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  

  useEffect(() => {
    const countdownTimer = () => {
      const targetDate = new Date("2024-12-31T23:59:59");
      const presentDate = new Date();
      const dateDifference = targetDate - presentDate;

      let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(dateDifference / (1000 * 60 * 60)) % 24;
      let minutes = Math.floor(dateDifference / (1000 * 60)) % 60;
      let seconds = Math.floor(dateDifference / 1000) % 60;

      if (days < 10) days = "0" + days;
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      if (dateDifference > 0) {
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    const intervalId = setInterval(() => {
      countdownTimer();
      const secondsElement = document.querySelector(".flip-seconds");
      const minutesElement = document.querySelector(".flip-minutes");
      const hoursElement = document.querySelector(".flip-hours");
      const daysElement = document.querySelector(".flip-days");

      // Flip seconds every second
      secondsElement.classList.add("flipped");
      setTimeout(() => {
        secondsElement.classList.remove("flipped");
      }, 500);

      // Flip minutes when seconds hit 0
      if (timeLeft.seconds === "00") {
        console.log("yes")
        minutesElement.classList.add("flipped");
        setTimeout(() => {
          minutesElement.classList.remove("flipped");
        }, 500);
      }

      // Flip hours when minutes hit 0
      if (timeLeft.minutes === "00" && timeLeft.seconds === "00") {
        hoursElement.classList.add("flipped");
        setTimeout(() => {
          hoursElement.classList.remove("flipped");
        }, 500);
      }

      // Flip days when hours hit 0
      if (
        timeLeft.hours === "00" &&
        timeLeft.minutes === "00" &&
        timeLeft.seconds === "00"
      ) {
        daysElement.classList.add("flipped");
        setTimeout(() => {
          daysElement.classList.remove("flipped");
        }, 500);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <>
      <main className='flex items-center justify-center flex-col gap-7 bg-[hsl(235,16%,14%)] bg-no-repeat h-screen bg-[url("./images/bg-stars.svg")]'>
        <h1 className="text-[hsl(0,0%,100%)] text-2xl lg:text-xl text-center tracking-[0.5rem] uppercase">
          We're launching soon
        </h1>
        <div className="flex gap-5">
          <div className="absolute top-[319px] lg:top-[259px] left-[42px] lg:left-[32.5rem] z-10 text-[2rem] lg:text-[4rem] text-[hsl(345,95%,68%)]">
            {timeLeft.days}
          </div>
          <div className="absolute top-[319px] lg:top-[259px] left-[128px] lg:left-[43.4rem] z-10 text-[2rem] lg:text-[4rem] text-[hsl(345,95%,68%)]">
            {timeLeft.hours}
          </div>
          <div className="absolute top-[319px] lg:top-[259px] left-[213px] lg:left-[54.3rem] z-10 text-[2rem] lg:text-[4rem] text-[hsl(345,95%,68%)]">
            {timeLeft.minutes}
          </div>
          <div className="absolute top-[319px] lg:top-[259px] left-[297px] lg:left-[65.2rem] z-10 text-[2rem] lg:text-[4rem] text-[hsl(345,95%,68%)]">
            {timeLeft.seconds}
          </div>
        </div>

        <div className="flex gap-7 lg:gap-9 w-[360px] lg:w-[500px] justify-center">
          <div className="">
          <div className="w-[60px] top-card h-[60px] lg:w-[120px] lg:h-[110px] bg-[hsl(236,21%,26%)] rounded-md">
            <div className="parent w-[60px] h-[30px] lg:w-[120px] lg:h-[55px] bg-[hsl(236,21%,26%)] rounded-t-md relative overflow-hidden">
              <div className="bottom left"></div>
              <div className="line"></div>
              <div className="bottom right"></div>
            </div>
            <div className="parent flip-days w-[60px] h-[30px] lg:w-[120px] lg:h-[55px] bg-[hsl(236,21%,26%)] rounded-b-md relative overflow-hidden">
              <div className="top left"></div>
              <div className="top right"></div>
            </div>
            </div>
          </div>

          <div>
          <div className="w-[60px] top-card h-[60px] lg:w-[120px] lg:h-[110px] bg-[hsl(236,21%,26%)] rounded-md">
            <div className="parent w-[60px] h-[30px] lg:w-[120px] lg:h-[55px] bg-[hsl(236,21%,26%)] rounded-t-md relative overflow-hidden">
              <div className="bottom left"></div>
              <div className="line"></div>
              <div className="bottom right"></div>
            </div>
            <div className="parent flip-hours w-[60px] h-[30px] lg:w-[120px] lg:h-[55px] bg-[hsl(236,21%,26%)] rounded-b-md relative overflow-hidden">
              <div className="top left"></div>
              <div className="top right"></div>
            </div>
            </div>
          </div>

          <div>
          <div className="w-[60px] top-card h-[60px] lg:w-[120px] lg:h-[110px] bg-[hsl(236,21%,26%)] rounded-md">
            <div className="parent w-[60px] h-[30px] lg:w-[120px] lg:h-[55px] bg-[hsl(236,21%,26%)] rounded-t-md relative overflow-hidden">
              <div className="bottom left"></div>
              <div className="line"></div>
              <div className="bottom right"></div>
            </div>
            <div className="parent flip-minutes w-[60px] h-[30px] lg:w-[120px] lg:h-[55px] bg-[hsl(236,21%,26%)] rounded-b-md relative overflow-hidden">
              <div className="top left"></div>
              <div className="top right"></div>
            </div>
            </div>
          </div>

          <div>
            <div className="w-[60px] top-card h-[60px] lg:w-[120px] lg:h-[110px] bg-[hsl(236,21%,26%)] rounded-md">
              <div className="parent w-[60px] h-[30px] lg:w-[120px] lg:h-[55px] bg-[hsl(236,21%,26%)] rounded-t-md relative overflow-hidden">
                <div className="bottom left"></div>
                <div className="line"></div>
                <div className="bottom right"></div>
              </div>
              <div className="parent flip-seconds w-[60px] h-[30px] lg:w-[120px] lg:h-[55px] bg-[hsl(236,21%,26%)] rounded-b-md relative overflow-hidden">
                <div className="top left"></div>
                <div className="top right"></div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="./images/pattern-hills.svg"
          alt="pattern-hills"
          className="h-[150px] top-[254px] lg:h-[200px] w-full relative lg:top-[220px]"
        />
        <div className="relative flex gap-8 top-[175px] lg:top-[100px]">
          <img src="./images/icon-facebook.svg" alt="icon-facebook" />
          <img src="./images/icon-pinterest.svg" alt="icon-pinterest" />
          <img src="./images/icon-instagram.svg" alt="icon-instagram" />
        </div>
      </main>
    </>
  );
};

export default App;
