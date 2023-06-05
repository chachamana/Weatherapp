import type { weatherTypes } from "../../types/types";
import { dtEdit, dtEdit_t, tempEdit } from "../../functions";
import styles from "./ForecastWeather.module.scss";

type Props = {
  data: weatherTypes;
};
function ForecastWeather(props: Props) {
  const { data } = props;

  return (
    <>
      <section className={styles.forecast}>
        <div className={styles.forecast__wrapper}>
          {data.list
            .filter((item, id: number) => id % 8 === 0)
            .map((item, id) => (
              <div className={styles.forecast__item} key={id}>
                <div>
                  <p className={styles.tab}>{dtEdit(item.dt_txt)}</p>
                  <p className={styles.forecast__time}>{dtEdit_t(item.dt_txt)}</p>
                </div>
                <p className={styles.forecast__icon}>
                  <img src={`../images/${item.weather[0].icon}.svg`} alt="weather status icon" />
                </p>
                <div className={styles.forecast__weather}>
                  <p className={styles.forecast__temperature}>
                    H:&nbsp;
                    <span className={styles.heading__temperature}>{tempEdit(item.main.temp_max)}</span>
                    <span className={styles.vertical_align}>&deg;</span>
                    <br className={styles.br_pc} />
                    L:&nbsp;
                    <span className={styles.heading__temperature}>{tempEdit(item.main.temp_min)}</span>
                    <span className={styles.vertical_align}>&deg;</span>
                  </p>
                  <p className={styles.forecast__description}>{item.weather[0].description}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
export default ForecastWeather;
