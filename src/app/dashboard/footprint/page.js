import styles from "./footprint.module.css";
import { auth } from "@/auth";
import {
  getFootprintByUser,
  getResultByUser,
  getUserByEmail,
} from "@/lib/methods";
import FootPrintBlock from "@/components/footprint/footPrintBlocks/FootPrintBlock";
import footprintChartShowResult from "@/lib/footprint/dataForChart";
import FootprintChart from "@/components/footprint/footprintChart/FootprintChart";

export const metadata = {
  title: "Carbon footprint calculator",
  description:
    "Use our carbon footprint calculator and know how many CO2 gas you produce",
};

// export default function FootprintPage() {
//   const [footprint1, setFootprint1] = useState(0);

//   const footprintChange1 = (inputValue) => {
//     console.log("inputValue", inputValue);
//     setFootprint1(inputValue);
//   };

//   const [footprint2, setFootprint2] = useState(0);

//   const footprintChange2 = (inputValue) => {
//     console.log("inputValue", inputValue);
//     setFootprint2(inputValue);
//   };

//   const [footprint3, setFootprint3] = useState(0);

//   const footprintChange3 = (inputValue) => {
//     console.log("inputValue", inputValue);
//     setFootprint3(inputValue);
//   };

//   const [footprint4, setFootprint4] = useState(0);

//   const footprintChange4 = (inputValue) => {
//     console.log("inputValue", inputValue);
//     setFootprint4(inputValue);
//   };

//   const footprint = footprint1 + footprint2 + footprint3 + footprint4;

//   return (
//     <div className={styles.container}>
//       <div className={styles.block}>
//         <span>transport</span>
//         <div>
//           <Transport transportType={transport.landTransport} footprintChange={footprintChange1} />
//         </div>

//         <div>
//           <Transport transportType={transport.waterTransport} footprintChange={footprintChange2} />
//         </div>

//         <div>
//           <Transport transportType={transport.airTransport} footprintChange={footprintChange3} />
//         </div>

//         <div>
//           <Transport transportType={transport.electroTransport} footprintChange={footprintChange4} />
//         </div>

//         <label>{footprint}</label>
//       </div>
//     </div>
//   );
// }

export default async function FootprintPage() {
  let data = 0
  const session = await auth();
  const user = await getUserByEmail(session.user.email);
  const userId = user.userId;
  const footprint = await getFootprintByUser(userId);
  if (footprint) {
    data = footprintChartShowResult(footprint?.result.slice(-30));
  }


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.span}>Your footprint</span>
        <FootPrintBlock userId={userId} />
        { data ? <FootprintChart data={data} /> : <div>There are no any data yet, please add your first data</div>}
        {/* <FootprintChart data={data} /> */}
      </div>
      <div className={styles.cards}>place for adds</div>
    </div>
  );
}
