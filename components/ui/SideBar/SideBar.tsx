"use client";
import React from "react";
import DateInput from "../DateInput/DateInput";
import ToggleButton from "../ToggleButton/ToggleButton";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!isOpen) {
    return (
      <button className={styles.openButton} onClick={() => setIsOpen(true)}>
        Open
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
        Close
      </button>
      <span className={styles.onoff}>
        <ToggleButton />
        <p>雨雲レイヤー</p>
      </span>
      <span className={styles.onoff}>
        <DateInput />
        <p>過去の日時</p>
      </span>
    </div>
  );
};
export default SideBar;
