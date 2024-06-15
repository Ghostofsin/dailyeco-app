"use client";

import { useEffect, useState } from "react";
import styles from "./transport.module.css";
import footprintCalc from "@/lib/footprint/footprintCalc";


export default function Transport({ transportType, footprintChange }) {
  const [distanceValue, setDistanceValue] = useState(0);
  const [transportValue, setTransportValue] = useState("");
  const [footprint, setFootprint] = useState(0);

  const handleChangeSelect = (event) => {
    setTransportValue(event.target.value);
  };

  const handleChangeInput = (event) => {
    setDistanceValue(+event.target.value);
  };

  useEffect(() => {
    const calc = footprintCalc(transportValue, distanceValue);
    setFootprint(calc);
    footprintChange(footprint); // put new value to parent component
  }, [distanceValue, transportValue, footprint]);

  return (
    <form className={styles.transportType}>
      <div className={styles.section}>
        <label
          className={styles.label}
          htmlFor={transportType.name}
        >
          {transportType.title}
        </label>
        <div className={styles.tranportList}>
          <select
            id={transportType.name}
            name={transportType.name}
            onChange={handleChangeSelect}
          >
            <option value="">- Choose -</option>

            {transportType.options.map((option) => (
              <option
                key={option.name}
                value={option.name}
              >
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.section}>
        <label
          className={styles.label}
          htmlFor="distance"
        >
          Set distance, km
        </label>
        <input
          className={styles.distance}
          name="distance"
          id="distance"
          onChange={handleChangeInput}
        />
      </div>
      <input
        className={styles.footprint}
        name="footprint"
        value={footprint}
        readOnly
      />
    </form>
  );
}
