import Header from "@/components/header/Header";
import styles from "./resources.module.css";
import Footer from "@/components/footer/MainFooter";
import Image from "next/image";
import Link from "next/link";
import HeaderBg from "../../../public/images/backgroung/header-back.png"
import BottomBg from "../../../public/images/backgroung/Forest.png"

export const metadata = {
  title: "Climate Change Resources: Your Comprehensive Guide to Action",
  description: "Empower yourself with our extensive collection of climate change resources. From informative articles and research papers to practical guides and interactive tools, our page equips you with the knowledge and tools needed to understand and address climate change effectively.",
};


export default function ResourcesPage() {
  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.siteHeader}>
        <h1 className={styles.title1}>Empower Yourself:</h1>
        <h2 className={styles.title2}>
          Learn About Climate Change with
          <br />
          These Resources
        </h2>
      </section>

      <section>
        {/* <div className={styles.topBackground}></div> */}
        <div style={{ display: 'flex', flexDirection: 'column'}}> 
            <Image 
              src={HeaderBg}     
              sizes="100vw"
              quality={100}
              // Make the image display full width
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
              alt="head article forest pic"
            ></Image>
        </div>
      </section>

      <main className={styles.mainSection}>
        <div className={styles.mainContainer}>
          <h2 className={styles.header}>Climate Change Insights</h2>
          <p className={styles.subHeader}>
            A Curated List of Resources to Understand and Tackle the Climate
            Crisis
          </p>

          <div className={styles.flex}>
            <div className={styles.flexTextRight}>
              <h2>
                {" "}
                <Link
                  href="https://climatefeedback.org/"
                  className={styles.link}
                  target="_blank"
                >
                  Climate Feedback{" "}
                </Link>
              </h2>
              <p>
                A community of scientists and experts who review and rate the
                accuracy of climate change reporting in the media, providing
                readers with a more informed understanding of the issue.
              </p>
            </div>
            <div className={styles.flexImgContainer}>
            <div className={styles.flexImg}>
              <Image
                src="/images/resources/climate-feedback.png"
                alt="climate-feedback"
                fill
                sizes="25vw"
              />
            </div>
            </div>
         
          </div>

          <div
            role="presentation"
            className={styles.breakline}
          ></div>

          <div className={styles.flexReverse}>
            <div className={styles.flexText}>
              <h2>
                <Link
                  href="https://ourworldindata.org/explorers/co2"
                  className={styles.link}
                  target="_blank"
                >
                  CO₂ Data Explorer
                </Link>
              </h2>
              <p>
                The tools provide a comprehensive database of carbon dioxide
                emissions from around the world and allows users to explore data
                on CO₂ emissions by country, sector, and fuel type.
              </p>
            </div>
            <div className={styles.flexImgContainer}>
            <div className={styles.flexImg}>
              <Image
                src="/images/resources/CO2-data-explorer.png"
                alt="CO2-data-explorer"
               fill
               sizes="25vw"
              />
            </div>
            </div>
        
          </div>

          <div
            role="presentation"
            className={styles.breakline}
          ></div>

          <div className={styles.flex}>
            <div className={styles.flexTextRight}>
              <h2>
                <Link
                  href="https://www.climatesignals.org/"
                  className={styles.link}
                  target="_blank"
                >
                  Climate Signals
                </Link>
              </h2>
              <p>
                A non-profit organization that provides clear and accessible
                information about climate change and its impacts, with a focus
                on sea level rise and coastal flooding.
              </p>
            </div>
            <div className={styles.flexImgContainer}>
            <div className={styles.flexImg}>
              <Image
                src="/images/resources/climate-signals.png"
                alt="climate-signals"
               fill
               sizes="25vw"
              />
            </div>
            </div>
         
          </div>

          <div
            role="presentation"
            className={styles.breakline}
          ></div>

          <div className={styles.flexReverse}>
            <div className={styles.flexText}>
              <h2>
                <Link
                  href="https://www.carbonbrief.org/"
                  className={styles.link}
                  target="_blank"
                >
                  Carbon Brief
                </Link>
              </h2>
              <p>
                This website provides analysis and fact-checking of
                climate-related news and information, as well as in-depth
                reports on key issues in climate science and policy.
              </p>
            </div>
            <div className={styles.flexImgContainer}>
            <div className={styles.flexImg}>
              <Image
                src="/images/resources/carbon-brief.png"
                alt="carbon-brief"
               fill
               sizes="25vw"
              />
            </div>
            </div>
           
          </div>

          <div
            role="presentation"
            className={styles.breakline}
          ></div>

          <div className={styles.flex}>
            <div className={styles.flexTextRight}>
              <h2>
                <Link
                  href="https://www.globalforestwatch.org/"
                  className={styles.link}
                  target="_blank"
                >
                  Global Forest Watch
                </Link>
              </h2>
              <p>
                This website provides a wealth of information and tools for
                visualizing and analyzing global forest cover, deforestation
                rates, and forest-related issues.
              </p>
            </div>
            <div className={styles.flexImgContainer}>
            <div className={styles.flexImg}>
              <Image
                src="/images/resources/global-forest-watch.png"
                alt="global-forest-watch"
               fill
               sizes="25vw"
              />
            </div>
            </div>
         
          </div>

          <div
            role="presentation"
            className={styles.breakline}
          ></div>

          <div className={styles.flexReverse}>
            <div className={styles.flexText}>
              <h2>
                <Link
                  href="https://www.climateinteractive.org/en-roads/"
                  className={styles.link}
                  target="_blank"
                >
                  Climate Interactive
                </Link>
              </h2>
              <p>
                This site provides tools and simulations that allow users to
                explore the potential impacts of different climate policies and
                scenarios.
              </p>
            </div>
            <div className={styles.flexImgContainer}>
            <div className={styles.flexImg}>
              <Image
                src="/images/resources/climate-interactiv.png"
                alt="climate-interactiv"
               fill
               sizes="25vw"
              />
            </div>
            </div>
           
          </div>
        </div>
      </main>

      <section>
        {/* <div className={styles.bottomBackground}></div> */}
        <div style={{ display: 'flex', flexDirection: 'column'}}> 
            <Image 
              src={BottomBg}     
              sizes="100vw"
              quality={100}
              // Make the image display full width
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
              alt="head article forest pic"
            ></Image>
        </div>
      </section>

      <Footer />
    </div>
  );
}
