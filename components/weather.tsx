import React from "react";
// Next
import Image from "next/image";
// Providers
import dateformat from "dateformat";
// Utils
import { celsiusToFahrenheit } from "../utils/convertTemp";
// Styles
import styles from "@styles/components/Weather.module.scss";

export const Weather = ({ weather, isCelsius }: any) => {
  const loaderImage = ({ src, width, quality }: any) => {
    return `https://www.metaweather.com/static/img/weather/png/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  return (
    <div className={styles["weather-container"]}>
      <p className={styles["weather-container__date"]}>
        {dateformat(weather.applicable_date, "dddd, d mmm", true)}
      </p>
      <div className={styles["weather-container__image"]}>
        <Image
          loader={loaderImage}
          src={weather && weather.image ? weather.image : "hc.png"}
          width={50}
          height={50}
          alt="weather-image"
        />
      </div>
      <div className={styles["weather-container__temp"]}>
        <p>
          {isCelsius ? (
            <>
              {Math.round(weather.max_temp)} <span> °C</span>
            </>
          ) : (
            <>
              {celsiusToFahrenheit(weather.max_temp)} <span> °F</span>{" "}
            </>
          )}
        </p>
        <p>
          {isCelsius ? (
            <>
              {Math.round(weather.min_temp)} <span> °C</span>
            </>
          ) : (
            <>
              {celsiusToFahrenheit(weather.min_temp)} <span> °F</span>{" "}
            </>
          )}
        </p>
      </div>
    </div>
  );
};
