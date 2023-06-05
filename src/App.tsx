import React, { useState } from "react";
import styles from "./App.module.scss";
import CurrentWeather from "./components/weather/CurrentWeather";
import ForecastWeather from "./components/forecast/ForecastWeather";
import type { weatherTypes, currentweatherTypes } from "./types/types";
import { API_KEY, API_URL } from "./api";

function App() {
  //State
  const [city, setCity] = useState<string>(""); // store the input name
  const [search, setSearch] = useState<string>(""); //store a copy of search

  const [forecastData, setForecastData] = useState<weatherTypes | null>(null); //store api response
  const [currentData, setCurrentData] = useState<currentweatherTypes | null>(null); //store api response

  //handle function
  const handleSearch = () => {
    const currentUrl = `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const forecastUrl = `${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const currentFetch = fetch(currentUrl);
      const forecastFetch = fetch(forecastUrl);

      Promise.all([currentFetch, forecastFetch]).then(async (response) => {
        const currentData = await response[0].json();
        const forecastData = await response[1].json();
        setCurrentData(currentData);
        setForecastData(forecastData);
        console.log(currentData);
        console.log(forecastData);

      });
    } catch (error) {
      console.warn(error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const handleOnClick = (): void => {
    setSearch(city);
    setCity("");
    handleSearch();
  };

  return (
    <main>
      <div className={styles.main__wrapper}>
        <h1 className={styles.heading__title}>Weather Application</h1>

        <section>
          <div className={styles.input__wrapper}>
            <label htmlFor="location"></label>
            <input
              className={`${styles.glassmorphism__form} ${styles.input}`}
              type="text"
              name="location"
              onChange={handleOnChange}
              value={city}
              placeholder="Type city name💡"
            />
            <button className={`${styles.glassmorphism__form} ${styles.button}`} onClick={handleOnClick}>
              search
            </button>
          </div>
        </section>

        {currentData && <CurrentWeather data={currentData} />}
        {forecastData && <ForecastWeather data={forecastData} />}
      </div>
    </main>
  );
}

export default App;
