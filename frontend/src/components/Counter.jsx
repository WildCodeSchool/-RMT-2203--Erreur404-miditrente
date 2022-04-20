function Counter({
  timerYears,
  timerDays,
  timerHours,
  timerMinutes,
  timerSecondes,
}) {
  return (
    <section className="timer_center_qb">
      <section className="timer_parent_qb">
        <div className="timer_clock_qb">
          <section className="timer_text_qb">
            <p className="p_timer_qb">{timerDays}</p>
            <small>Jours</small>
          </section>
          <section className="timer_text_qb">
            <p className="p_timer_qb">{timerHours}</p>
            <small>Heures</small>
          </section>
          <div className="timer_sup_qb">
            <p className="p_timer_qb">{timerYears}</p>
            <small>Ans</small>
          </div>
          <section className="timer_text_qb">
            <p className="p_timer_qb">{timerMinutes}</p>
            <small>Minutes</small>
          </section>
          <section className="timer_text_qb">
            <p className="p_timer_qb">{timerSecondes}</p>
            <small>Secondes</small>
          </section>
        </div>
      </section>
    </section>
  );
}

Counter.defaultProps = {
  timerYears: 0,
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSecondes: 0,
};

export default Counter;
