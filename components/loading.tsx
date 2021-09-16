import React from "react";
import styles from "@styles/components/Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.ldsripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
