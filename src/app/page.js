import Header from "@/components/header/Header";
import styles from "./mainpage.module.css";
import Link from "next/link";
import Image from "next/image";
import MainFooter from "@/components/footer/MainFooter";
import MainPageSwiper from "@/components/swipers/mainPageSwiper/MainPageSwiper";
import HeaderBg from "../../public/images/backgroung/Factories3.png"
import MiddleBg from "../../public/images/backgroung/Pines.png"
import BottomBg from "../../public/images/backgroung/forest-dark2.png"
import Earth2 from "../../public/images/earth/earth2.png"


export const metadata = {
  title: "Climate Change Mitigation Solutions | dailyEco",
  description:
    "Join the effort against climate change and environmental protection with dailyEco",
};

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.headMenu}>
      <Header />
      </div>
      

      <section className={styles.siteHeader}>
        <div className={styles.siteHeaderGrid}>
          <h1 className={styles.title1}>
            Take an Action against Climate Change
          </h1>
          <p></p>

          <div>
            <p className={styles.title2}>
              Discover how to reduce CO2 emissions <br /> and your carbon
              footprint
            </p>
          </div>
          <p></p>
          <Link
            className={styles.button}
            href="/problem"
          >
            <p>Get started</p>
          </Link>
        </div>
      </section>

      <section>
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
          {/* <div className={styles.topBackground}></div> */}
      </section>

      <main className={styles.mainSection}>
      <div className={styles.mainContainer}>
          <section className={styles.sectionAct}>
              <div className={styles.imageWrapper}>
                <Image
                  src={Earth2}
                  alt="earth2"
                  fill
                  sizes="50vw"
                  style={{
                    objectFit: 'contain'  // cover, contain, none
                  }}
                />
              </div>
            <div className={styles.gridTextLeft}>
              <h2>Reduce carbon emissions.</h2>
              <p>
                DailyEco offers solutions to help decrease carbon emissions and
                benefit the environment. Explore a wide range of products and
                services that enable you to contribute to climate change
                mitigation.
              </p>
              <Link
                href="/resources"
                className={styles.learnMore}
              >
                Learn more
              </Link>
            </div>
            <div className={`${styles.gridTextRight} ${styles.reverseCell}`}>
              <h2>Protect the environment.</h2>
              <p >
                We believe that everyone can make a difference in environmental
                protection. With DailyEco solutions, you can reduce your carbon
                emissions and make your life or business more environmentally
                sustainable.
              </p>
              <Link
                href="/resources"
                className={styles.learnMore}
              >
                Learn more
              </Link>
            </div>
            <div className={styles.imageWrapperLeft}>
            <Image
                  src={Earth2}
                  alt="earth2"
                  fill
                  sizes="50vw"
                  style={{
                    objectFit: 'contain'  // cover, contain, none
                  }}
                />
            </div>
             
            <div className={styles.imageWrapper}>
                <Image
                  src={Earth2}
                  alt="earth2"
                  fill
                  sizes="50vw"
                  style={{
                    objectFit: 'contain'  // cover, contain, none
                  }}
                />
              </div>
            {/* </div> */}
            <div className={styles.gridTextLeft}>
              <h2>Take responsibility.</h2>
              <p>
                Reducing carbon emissions is a collective task, and everyone can
                contribute. With DailyEco solutions, you can take responsibility
                for your emissions and be part of the global effort to combat
                climate change.
              </p>
              <Link
                href="/resources"
                className={styles.learnMore}
              >
                Learn more
              </Link>
            </div>
          
          </section>
          </div>
      </main>

      <section>
        {/* <div className={styles.middleBackground}></div> */}
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#133145"}}> 
            <Image 
              src={MiddleBg}     
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

      <div className={styles.mainContainer}>
        <section className={styles.sectionPros}>
          <div className={styles.prosBlock}>
            <div className={styles.prosBlockImage}>
              <Image
                src="/images/landing/sunrise.svg"
                alt="wind-power img"
                width="50"
                height="50"
              />
              <h3>Opportunities for action.</h3>
            </div>

            <p>
              DailyEco provides information on environmental protection methods
              so you can take part in addressing climate change. Discover
              recommendations and resources for implementing eco-friendly
              practices into your daily life.
            </p>
          </div>

          <div className={styles.prosBlock}>
            <div className={styles.prosBlockImage}>
              <Image
                src="/images/landing/water-pollution.svg"
                alt="water-pollution img"
                width="50"
                height="50"
              />
              <h3>Understanding the issue.</h3>
            </div>

            <p>
              With DailyEco, you can gain a better understanding of the problem
              of climate change and its impact on the environment. This will
              enable you to make informed decisions and actively participate in
              environmental protection.
            </p>
          </div>

          <div className={styles.prosBlock}>
            <div className={styles.prosBlockImage}>
              <Image
                src="/images/landing/wind-power.svg"
                alt="water-pollution img"
                width="50"
                height="50"
              />
              <h3>Quick access to information.</h3>
            </div>

            <p>
              Our product provides rapid access to information about climate
              change, carbon emissions, and environmental protection methods.
              Stay informed and empowered to make sustainable choices for a
              better future.
            </p>
          </div>
        </section>
      </div>

      <section className={styles.sectionReview}>
        <h2>What people say about us</h2>
        <div className={styles.sectionReviewContainer}>
          <div className={styles.reviewBlock}>
            <div className={styles.reviewerImage}>
              <Image
                className={styles.reviewerImage}
                src="/images/noavatar.png"
                alt="no avatar img"
                width="100"
                height="100"
              />
            </div>

            <div className={styles.reviewer}>
              <p className={styles.quote}>
                {`"I am proud to be able to contribute to environmental protection
                and reduce my carbon emissions."`}
              </p>
              <div className={styles.reviewerName}>Naomi Martinez</div>
            </div>
          </div>

          <div className={styles.reviewBlock}>
            <div className={styles.reviewerImage}>
              <Image
                className={styles.reviewerImage}
                src="/images/noavatar.png"
                alt="no avatar img"
                width="100"
                height="100"
              />
            </div>

            <div className={styles.reviewer}>
              <p className={styles.quote}>
                {`"I was shocked to know real truth about our planet Earth.
                dailyEco changed my life for sure."`}
              </p>
              <div className={styles.reviewerName}>Max Verde</div>
            </div>
          </div>

          <div className={styles.reviewBlock}>
            <div className={styles.reviewerImage}>
              <Image
                className={styles.reviewerImage}
                src="/images/noavatar.png"
                alt="no avatar img"
                width="100"
                height="100"
              />
            </div>

            <div className={styles.reviewer}>
              <p className={styles.quote}>
                {`"This helped me better understand the issue of climate change
                and take measures to address it."`}
              </p>
              <div className={styles.reviewerName}>Bella Johnson</div>
            </div>
          </div>
          <div className={styles.swiper}>
            <MainPageSwiper />
          </div>
        </div>
      </section>

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

      <MainFooter
        bgColor={"#133145"}
        color={"#dffae2"}
      />
    </div>
  );
}
