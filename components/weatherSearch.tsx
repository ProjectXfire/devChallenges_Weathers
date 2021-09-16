import React from "react";
// Providers
import { Close, Search } from "@material-ui/icons";
// Styles
import styles from "@styles/components/WeatherSearch.module.scss";

export const WeatherSearch = ({
  setOpenSearch,
  handleSearchInput,
  searchValue,
  searchCityWeather,
  existSearch,
}: any) => {
  return (
    <section className={styles["weather-search-container"]}>
      <div className={styles["weather-search-container__close"]}>
        <button type="button" onClick={() => setOpenSearch(false)}>
          <Close />
        </button>
      </div>
      <div className={styles["weather-search-container__actions"]}>
        <div className={styles["weather-search-container__input"]}>
          <Search />
          <input
            type="text"
            placeholder="search location"
            value={searchValue}
            onChange={(e) => handleSearchInput(e)}
          />
        </div>
        <button
          className={styles["weather-search-container__button"]}
          type="button"
          onClick={() => searchCityWeather()}
        >
          Search
        </button>
      </div>
      {!existSearch && (
        <div className={styles["weather-search-container__not-found-message"]}>
          <strong>{searchValue}</strong> does not exist.
        </div>
      )}
    </section>
  );
};
