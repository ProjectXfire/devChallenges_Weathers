/* eslint-disable @next/next/no-img-element */
import React from "react";
// Next
import Image from "next/image";
// Providers
import { LocationSearching } from "@material-ui/icons";
import dateformat from "dateformat";
// Utils
import { celsiusToFahrenheit } from "../utils/convertTemp";
// Styles
import styles from "@styles/components/WeatherToday.module.scss";
// Components
import { Loading } from "@components/loading";

export const WeatherToday = ({
  setOpenSearch,
  dataToday = "hc.png",
  loading,
  isCelsius,
}: any) => {
  const loaderImage = ({ src, width, quality }: any) => {
    return `https://www.metaweather.com/static/img/weather/png/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <section className={styles["weather-today-container"]}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles["weather-today-container__actions"]}>
            <button
              className={styles["weather-today-container__search"]}
              type="button"
              onClick={() => setOpenSearch(true)}
            >
              Search for places
            </button>
            <button
              className={styles["weather-today-container__search-icon"]}
              type="button"
            >
              <LocationSearching />
            </button>
          </div>
          <div className={styles["weather-today-container__image"]}>
            <Image
              loader={loaderImage}
              src={dataToday && dataToday.image ? dataToday.image : "hc.png"}
              width={150}
              height={150}
              alt="weather-img"
            />
          </div>
          <p className={styles["weather-today-container__temp"]}>
            {dataToday && dataToday.the_temp
              ? isCelsius
                ? Math.round(dataToday.the_temp)
                : celsiusToFahrenheit(Math.round(dataToday.the_temp))
              : 0}
            {isCelsius ? (
              <span className={styles["weather-today-container__temp--symbol"]}>
                °C
              </span>
            ) : (
              <span className={styles["weather-today-container__temp--symbol"]}>
                °F
              </span>
            )}
          </p>
          <p className={styles["weather-today-container__name"]}>
            {dataToday && dataToday.weather_state_name
              ? dataToday.weather_state_name
              : ""}
          </p>
          <p className={styles["weather-today-container__date"]}>
            Today&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
            {dataToday && dataToday.applicable_date
              ? dateformat(dataToday.applicable_date, "dddd, d mmm", true)
              : ""}
          </p>
        </>
      )}
    </section>
  );
};
