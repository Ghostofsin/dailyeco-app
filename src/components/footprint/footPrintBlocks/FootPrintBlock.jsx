"use client";

import styles from "./footprintBlock.module.css";
import { useState, useEffect } from "react";
import Transport from "./Transport";
import { saveFootprint } from "@/lib/actions/actions";

const transport = {
  electroTransport: {
    name: "electroTransport",
    title: "Electro transport",
    options: [
      {
        name: "tram",
        title: "Tram",
      },
      {
        name: "trolleybus",
        title: "Trolleybus",
      },
      {
        name: "electroCar",
        title: "Electro Car",
      },
      {
        name: "electroTrain",
        title: "Electro Train",
      },
      {
        name: "subway",
        title: "Subway",
      },
    ],
  },
  airTransport: {
    name: "airTransport",
    title: "Air transport",
    options: [
      {
        name: "shortDiastancePlane",
        title: "Short Diastance",
      },
      {
        name: "longDiastancePlane",
        title: "Long Diastance",
      },
    ],
  },
  waterTransport: {
    name: "waterTransport",
    title: "Water transport",
    options: [
      {
        name: "yaht",
        title: "Yaht",
      },
      {
        name: "ship",
        title: "Ship",
      },
      {
        name: "smallboat",
        title: "Smallboat",
      },
      {
        name: "cruiseship",
        title: "Cruiseship",
      },
    ],
  },
  landTransport: {
    name: "landTransport",
    title: "Land transport",
    options: [
      {
        name: "car",
        title: "Car",
      },
      {
        name: "bus",
        title: "Bus",
      },
      {
        name: "motorbike",
        title: "Motorbike",
      },
      {
        name: "truck",
        title: "Truck",
      },
      {
        name: "train",
        title: "Train",
      },
    ],
  },
};

export default function FootPrintBlock({ userId }) {
  const [footprints, setFootprints] = useState({
    landTransport: 0,
    waterTransport: 0,
    airTransport: 0,
    electroTransport: 0,
  });

  const handleFootprintChange = (transportType, inputValue) => {
    setFootprints((prevFootprints) => ({
      ...prevFootprints,
      [transportType]: inputValue,
    }));
  };

  const totalFootprint = Object.values(footprints).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>Transport</span>
        <div className={styles.block}>
          {Object.entries(transport).map(([key, value]) => (
            <div key={key}>
              <Transport
                transportType={value}
                footprintChange={(inputValue) =>
                  handleFootprintChange(key, inputValue)
                }
              />
            </div>
          ))}
        </div>

        <label className={styles.totalFootprint}>
          Total Footprint: {totalFootprint}
        </label>
        <form action={saveFootprint}>
          <input
            name="userId"
            value={userId}
            hidden
            readOnly
          />
          <input
            name="footprints"
            value={JSON.stringify(footprints)}
            hidden
            readOnly
          />
          <input
            name="totalFootprint"
            value={totalFootprint}
            hidden
            readOnly
          />
          <button className={styles.button}>Save</button>
        </form>
      </div>
    </div>
  );
}
