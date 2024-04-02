import React, { useEffect, useState } from "react";
import css from "../ProgressBar/ProgressBar.module.css";
const ProgressBar = ({ max, title, unit, refresh, smooth = true }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(unit());
    const interval = setInterval(() => {
      setValue(unit());
    }, refresh);
    // return () => clearInterval(interval);
  }, []);
  return (
    <div className={css.main}>
      <div className={css.text}>
        <p className={css.title}>{title}</p>
        <p className={css.title}>{value}</p>
      </div>
      <progress
        max={max}
        value={value}
        className={css.progress}
        style={{ transition: smooth ? "all .4s" : "none" }}
      />
    </div>
  );
};

export default ProgressBar;
