import Footer from "@/components/footer/MainFooter";
import Header from "@/components/header/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./problem.module.css";
import QuizButton from "@/components/quizButton/QuizButton";
import HeaderBg from "../../../public/images/backgroung/header-back.png";
import BottomBg from "../../../public/images/backgroung/Forest.png";

export const metadata = {
  title: "Understanding Climate Change",
  description:
    "Explore the pressing issues surrounding climate change and discover actionable solutions with dailyEco. From rising sea levels to extreme weather events, delve into the challenges our planet faces and learn how individuals and communities can contribute to a sustainable future. Join us in the fight against climate change today!",
};

export default function ProblemPage() {
  return (
    <div>
      <Header />

      <section className={styles.siteHeader}>
        <h1 className={styles.title1}>Why should I care about</h1>
        <h2 className={styles.title2}>Climate change ?</h2>
      </section>

      <section>
        {/* <div className={styles.topBackground}></div> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            src={HeaderBg}
            sizes="100vw"
            quality={100}
            // Make the image display full width
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            alt="head article forest pic"
          ></Image>
        </div>
      </section>

      <main className={styles.mainSection}>
        <div className={styles.mainContainer}>
          <section className={styles.sectionEvidence}>
            <h2>Scientific evidence is unequivocal</h2>
            <p>
              While Earth’s climate
              <Link
                className={styles.link}
                href="https://www.climate.gov/maps-data/climate-data-primer/past-climate"
                target="_blank"
              >
                {" "}
                has changed throughout its history,
              </Link>
              the current warming is happening at a rate not seen in the past
              10,000 years.
            </p>
            <p>
              <Link
                className={styles.link}
                href="/resources"
              >
                Explore our page with in-depth information and credible sources
                about climate change to gain a better understanding of this
                global challenge.
              </Link>
            </p>
          </section>

          <section className={styles.sectionConsequences}>
            <div className={styles.flexConsequences}>
              <div className={styles.gridTextRight}>
                <h2>Ocean acidification is increasing</h2>
                <p>
                  Since the beginning of the Industrial Revolution, the acidity
                  of surface ocean waters
                  <Link
                    className={styles.link}
                    href="https://www.pmel.noaa.gov/co2/story/What+is+Ocean+Acidification%3F"
                    target="_blank"
                  >
                    {" "}
                    has increased by about 30%,
                  </Link>
                  due to humans emitting more carbon dioxide into the
                  atmosphere.
                </p>
              </div>
              <div className={styles.imageBlock}>
                <div className={styles.pic}>
                  <Image
                    src="/images/earth/earth2.png"
                    alt="earth2"
                    fill
                    sizes="25vw"
                  />
                </div>
              </div>

              <div className={styles.gridTextLeft}>
                <h2>Natural disasters are increasing in frequency</h2>
                <p>
                  According to the
                  <Link
                    className={styles.link}
                    href="https://public.wmo.int/en/media/press-release/weather-related-disasters-increase-over-past-50-years-causing-more-damage-fewer"
                    target="_blank"
                  >
                    {" "}
                    World Meteorological Organization
                  </Link>
                  (WMO), the number of disasters over the last 50 years has
                  increased fivefold.
                </p>
              </div>
            </div>

            <div className={styles.flexConsequences}>
              <div className={styles.gridTextRight}>
                <h2>Sea level is rising</h2>
                <p>
                  Global sea level
                  <Link
                    className={styles.link}
                    href="https://www.pnas.org/doi/abs/10.1073/pnas.1717312115"
                    target="_blank"
                  >
                    {" "}
                    rose about 20 centimeters
                  </Link>
                  in the last century. The rate in the last two decades,
                  however, is nearly double that of the last century and
                  accelerating slightly every year.
                </p>
              </div>
              <div className={styles.imageBlock}>
                <div className={styles.pic}>
                  <Image
                    src="/images/earth/earth1.png"
                    alt="earth1"
                    fill
                    sizes="25vw"
                  />
                </div>
              </div>

              <div className={styles.gridTextLeft}>
                <h2>The ocean is getting warmer</h2>
                <p>
                  The ocean has absorbed much of this increased heat, with the
                  top 100 meters of ocean showing warming of
                  <Link
                    className={styles.link}
                    href="https://www.ncei.noaa.gov/access/global-ocean-heat-content/index3.html"
                    target="_blank"
                  >
                    {" "}
                    more than 0.33 degrees
                  </Link>
                  Celsius since 1969.
                </p>
              </div>
            </div>
          </section>

          <div
            role="presentation"
            className={styles.breakline}
          ></div>

          <h2 className={styles.sectionCanDoHeader}>
            But what I personally can do ?
          </h2>

          <section className={styles.sectionCanDo}>
            <div className={styles.flex}>
              <div className={styles.imageBlock}>
                <div className={styles.picCanDo}>
                  <Image
                    src="/images/can-do/Study.png"
                    alt="study"
                    fill
                    sizes="25vw"
                  />
                </div>
              </div>

              <div className={styles.textCanDo}>
                <h3>Study</h3>
                <p>
                  Know more about reasons, causes and examples of climate change
                  <Link
                    className={styles.link}
                    href="https://climate.nasa.gov/"
                  >
                    by the link Global Climate Change
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className={styles.flexReverse}>
              <div className={styles.imageBlock}>
                <div className={styles.picCanDo}>
                  <Image
                    src="/images/can-do/Act.png"
                    alt="act"
                    fill
                    sizes="25vw"
                  />
                </div>
              </div>

              <div
                className={styles.textCanDo}
                style={{ textAlign: "right" }}
              >
                <h3>Act</h3>
                <p>
                  Form your personal eco-habits and contribute to the better
                  world.{" "}
                  <Link
                    className={styles.link}
                    href="https://www.imperial.ac.uk/stories/climate-action/"
                  >
                    Advises from Imperial College London
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className={styles.flex}>
              <div className={styles.imageBlock}>
                <div className={styles.picCanDo}>
                  <Image
                    src="/images/can-do/Share.png"
                    alt="share"
                    fill
                    sizes="25vw"
                  />
                </div>
              </div>

              <div className={styles.textCanDo}>
                <h3>Share</h3>
                <p>
                  Spread your knowledge and engage your family and friend into
                  eco-lifestyle.
                </p>
              </div>
            </div>
          </section>

          <div style={{display: "flex", justifyContent:"center"}}>
          <QuizButton text={"Check your knowledge in short Quiz"} />
          </div>
          
        </div>
      </main>

      <section>
        {/* <div className={styles.bottomBackground}></div> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            src={BottomBg}
            sizes="100vw"
            quality={100}
            // Make the image display full width
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            alt="head article forest pic"
          ></Image>
        </div>
      </section>

      <Footer />
    </div>
  );
}
