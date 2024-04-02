import React, { useEffect, useState } from "react";
import css from "../Main/Main.module.css";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

const Main = () => {
  return (
    <div className={css.main}>
      <p>Titulo</p>
      <ProgressBar
        title={"Milisegundos"}
        max={1000}
        unit={() => {
          return new Date().getMilliseconds();
        }}
        refresh={1}
      />
      <ProgressBar
        title={"Segundos"}
        max={60}
        unit={() => {
          return new Date().getSeconds();
        }}
        refresh={500}
        smooth={true}
      />
      <ProgressBar
        title={"Minutos"}
        max={60}
        unit={() => {
          return String(
            new Date().getMinutes() + new Date().getSeconds() / 60
          ).substring(0, 5);
        }}
        refresh={1000}
      />
      <ProgressBar
        title={"Hora"}
        max={24}
        unit={() => {
          return new Date().getHours();
        }}
        refresh={1000}
      />
      <ProgressBar
        title={"Dia"}
        max={30}
        unit={() => {
          return new Date().getDate();
        }}
        refresh={1000}
      />
      <ProgressBar
        title={"Mes"}
        max={12}
        unit={() => {
          return new Date().getMonth() + 1;
        }}
        refresh={1000}
      />
    </div>
  );
};

export default Main;
