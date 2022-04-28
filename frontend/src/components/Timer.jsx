import { useEffect, useState } from "react";
import Counter from "./Counter";

import "./timer.css";

function Timer() {
  // initiation des states
  const [timerYears, setTimerYears] = useState();
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSecondes, setTimerSecondes] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("April 4, 2025").getTime(); // date de fin du timer

    interval = setInterval(() => {
      const now = new Date().getTime(); // date actuelle

      const distance = countDownDate - now; // calucule de la date d'echeance avec la date actuelle

      const years = Math.floor(distance / (365 * 24 * 60 * 60 * 1000)); // converti/calcule le nombre d'années restante
      const days = Math.floor(
        (distance % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
      ); // converti/calcule le nombre de jours restant
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      ); // converti/calcule le nombre d'heures restante
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000)); // converti/calcule le nombre de minutes restante
      const secondes = Math.floor((distance % (60 * 1000)) / 1000); // convertire/calcule le nombre de secondes restante
      if (distance < 0) {
        // Stop timer
        clearInterval(interval.current);
      } else {
        // Update timer
        setTimerYears(years);
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSecondes(secondes);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }); // permet le decompte

  return (
    <div className="App">
      <Counter
        timerYears={timerYears}
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSecondes={timerSecondes}
      />
    </div>
  );
}

export default Timer;
