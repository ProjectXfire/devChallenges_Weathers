import React from "react";
// Styles
import styles from "@styles/components/WeatherForecast.module.scss";
// Components
import { Weather } from "@components/weather";
import { WeatherHightlights } from "@components/weatherHightlights";

export const WeatherForecast = ({
  dataToday,
  dataForecast,
  isCelsius,
  setIsCelsius,
}: any) => {
  return (
    <section className={styles["weather-forecast-container"]}>
      <div className={styles["weather-forecast-container__actions"]}>
        <button type="button" onClick={() => setIsCelsius(true)}>
          °C
        </button>
        <button type="button" onClick={() => setIsCelsius(false)}>
          °F
        </button>
      </div>
      <ul className={styles["weather-forecast-container__list"]}>
        {dataForecast.length > 0 &&
          dataForecast.map((weather: any) => (
            <Weather key={weather.id} weather={weather} isCelsius={isCelsius} />
          ))}
      </ul>
      <section className={styles["weather-forecast-container__hightlights"]}>
        <WeatherHightlights dataToday={dataToday} />
      </section>
    </section>
  );
};
