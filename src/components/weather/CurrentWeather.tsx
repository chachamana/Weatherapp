import type { currentweatherTypes } from "../../types/types";
import { dtEdit, tempEdit, timeEdit } from "../../functions";
import styles from "./CurrentWeather.module.scss";

type Props = {
  data: currentweatherTypes;
};

function CurrentWeather(props: Props) {
  const { data } = props;

  return (
    <>
      <section className={styles.current}>
        <div className={styles.current__wrapper}>
          <div className={styles.current__info}>
            <div>
              <h3 className={styles.heading__sub}>Current Weather</h3>
              <h2 className={styles.heading__main}>{data.name}</h2>
              <p className={styles.tab}>{timeEdit(data.dt)}</p>
            </div>
            <div className={styles.current__description}>{data.weather[0].description}</div>
          </div>
          <div className={styles.current__icon}>
            <img src={`../images/${data.weather[0].icon}.svg`} alt="weather status icon" />
          </div>

          <div className={styles.current__weather}>
            <div className={styles.current__temperature}>
              <p>
                <span className={styles.heading__number__big}>{tempEdit(data.main.temp)}</span>
                <span className={styles.vertical_align}>&deg;</span>
              </p>
              <p>
                H:&nbsp;{tempEdit(data.main.temp_max)}
                <span className={styles.vertical_align}>&deg;</span>&nbsp; L:&nbsp;{tempEdit(data.main.temp_min)}
                <span className={styles.vertical_align}>&deg;</span>
              </p>
            </div>
            <div className={styles.current__humidity}>
              <h3 className={styles.heading__sub}>Humidity </h3>
              <span className={styles.heading__number__small}>{data.main.humidity}</span>%
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CurrentWeather;
