import React from "react";
// Styles
import styles from "@styles/components/WeatherHightlights.module.scss";

export const WeatherHightlights = ({ dataToday }: any) => {
  return (
    <>
      <h1 className={styles["weather-hightlights__title"]}>
        Today&apos;s Hightlights
      </h1>
      <div className={styles["weather-hightlights__detail"]}>
        <div className={styles["weather-hightlights__item"]}>
          <p className={styles["weather-hightlights__name"]}>Wind status</p>
          <p className={styles["weather-hightlights__value"]}>
            {dataToday && dataToday.wind_speed
              ? Math.round(dataToday.wind_speed)
              : ""}
            <span> mph</span>
          </p>
        </div>
        <div className={styles["weather-hightlights__item"]}>
          <p className={styles["weather-hightlights__name"]}>Humidity</p>
          <p className={styles["weather-hightlights__value"]}>
            {dataToday && dataToday.humidity ? dataToday.humidity : ""}
            <span> %</span>
          </p>
          <div className={styles["weather-hightlights__progress-bar-range"]}>
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className={styles["weather-hightlights__progress-bar"]}>
            <div
              style={{
                height: 5,
                width: `${
                  dataToday && dataToday.humidity ? dataToday.humidity : 0
                }%`,
                backgroundColor: "#fff176",
                borderRadius: 5,
              }}
            ></div>
          </div>
        </div>
        <div className={styles["weather-hightlights__item"]}>
          <p className={styles["weather-hightlights__name"]}>Visibility</p>
          <p className={styles["weather-hightlights__value"]}>
            {dataToday && dataToday.visibility
              ? dataToday.visibility.toFixed(1)
              : ""}
            <span> miles</span>
          </p>
        </div>
        <div className={styles["weather-hightlights__item"]}>
          <p className={styles["weather-hightlights__name"]}>Air Pressure</p>
          <p className={styles["weather-hightlights__value"]}>
            {dataToday && dataToday.air_pressure ? dataToday.air_pressure : ""}
            <span> mb</span>
          </p>
        </div>
      </div>
    </>
  );
};
