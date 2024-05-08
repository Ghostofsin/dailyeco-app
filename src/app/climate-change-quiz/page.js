
import Header from "@/components/header/Header";
import styles from "./climateCangeQuiz.module.css";
import Footer from "@/components/footer/MainFooter";
import { saveResults, updateResults } from "@/lib/actions/actions";
import { auth } from "@/auth";
import { getResultByUser, getUserByEmail } from "@/lib/methods";
import HeaderBg from "../../../public/images/backgroung/header-back.png"
import BottomBg from "../../../public/images/backgroung/Forest.png"
import Image from "next/image";

export const metadata = {
  title: "Climate change quiz. Test Your Knowledge!",
  description: "Take our climate change quiz and explore topics like greenhouse gases and global warming. Whether you're new or an enthusiast, it's an educational way to learn about this critical issue. Start now and see what you know!",
};

export default async function ClimateChangeQuizPage() {
  const session = await auth();
  const user = await getUserByEmail(session.user.email);
  const userId = user.userId;
  const result = await getResultByUser(userId);

  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.siteHeader}>
        <h1 className={styles.title2}>Climate change Quiz</h1>
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
          <div className={styles.quizContainer}>
            <form
              action={result ? updateResults : saveResults}
              method="POST"
            >
              <input name="userId" value={userId} hidden readOnly></input>
              <div className={styles.quizHeader}>
                <div className={styles.quizHeaderText}>
                  Check your knowledge
                </div>
                <div className={styles.quizHeadeSubText}>
                  *mandatory question
                </div>
              </div>

              <div className={styles.task}>
                <div className={styles.taskTitle}>
                  What is rate of the consensus that climate change is real and
                  caused by humans?
                </div>
                <div className={styles.taskPoint}>
                  <span className={styles.star}>*</span>
                  <span>1 point</span>
                </div>

                <div className={styles.taskQuestion}>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest1"
                      value="nobody"
                      required
                    />
                    <label
                      className={styles.laber}
                      htmlFor="quest1"
                    >
                      Nobody
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest1"
                      value="10"
                    />
                    <label htmlFor="quest1">10%</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest1"
                      value="23"
                    />
                    <label htmlFor="quest1">23%</label>
                  </div>

                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest1"
                      value="49"
                    />
                    <label htmlFor="quest1">49%</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest1"
                      value="75"
                    />
                    <label htmlFor="quest1">75%</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest1"
                      value="99"
                    />
                    <label htmlFor="quest1">99%</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest1"
                      value="all"
                    />
                    <label htmlFor="quest1">All of them</label>
                  </div>
                </div>
              </div>
              {/*----------------------------------*/}
              <div className={styles.task}>
                <div className={styles.taskTitle}>
                  Most places on Earth are warmer than they were 100 years ago.
                </div>

                <div className={styles.taskPoint}>
                  <span className={styles.star}>*</span>
                  <span>1 point</span>
                </div>

                <div className={styles.taskQuestion}>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest2"
                      value="true"
                      required
                    />
                    <label htmlFor="quest2">True</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest2"
                      value="false"
                    />
                    <label htmlFor="quest2">False</label>
                  </div>
                </div>
              </div>
              {/*----------------------------------*/}
              <div className={styles.task}>
                <div className={styles.taskTitle}>
                  How do scientists collect evidence about climate?
                </div>
                <div className={styles.taskPoint}>
                  <span className={styles.star}>*</span>
                  <span>1 point</span>
                </div>

                <div className={styles.taskQuestion}>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest3"
                      value="remote-sensing"
                      required
                    />
                    <label htmlFor="quest3">
                      Using remote sensing from space with satellites
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest3"
                      value="ground-based"
                    />
                    <label htmlFor="quest3">
                      By ground-based measurements of surface temperature,
                      carbon dioxide concentration and sea level
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest3"
                      value="proxy-data"
                    />
                    <label htmlFor="quest3">
                      By collecting "proxy data" from tree rings, ice cores and
                      historical records
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest3"
                      value="all"
                    />
                    <label htmlFor="quest3">All of them</label>
                  </div>
                </div>
              </div>
              {/*----------------------------------*/}

              <div className={styles.task}>
                <div className={styles.taskTitle}>
                  What is the goal of the 2015 Paris climate accord?
                </div>

                <div className={styles.taskPoint}>
                  <span className={styles.star}>*</span>
                  <span>1 point</span>
                </div>

                <div className={styles.taskQuestion}>
                  <select
                    name="quest4"
                    id="quest4"
                    required
                  >
                    <option value="">Choose</option>
                    <option value="1">1&deg;C</option>
                    <option value="2">2&deg;C</option>
                    <option value="3">3&deg;C</option>
                    <option value="4">4&deg;C</option>
                    <option value="5">5&deg;C</option>
                  </select>
                </div>
              </div>

              {/*----------------------------------*/}
              <div className={styles.task}>
                <div className={styles.taskTitle}>
                  How much has sea level risen since 1900?
                </div>
                <div className={styles.taskPoint}>
                  <span className={styles.star}>*</span>
                  <span>1 point</span>
                </div>

                <div className={styles.taskQuestion}>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest5"
                      value="1"
                      required
                    />
                    <label htmlFor="quest5">1cm</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest5"
                      value="10"
                    />
                    <label htmlFor="quest5">10cm</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest5"
                      value="20"
                    />
                    <label htmlFor="quest5">20cm</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest5"
                      value="30"
                    />
                    <label htmlFor="quest5">30cm</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest5"
                      value="50"
                    />
                    <label htmlFor="quest5">50cm</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest5"
                      value="100"
                    />
                    <label htmlFor="quest5">100cm</label>
                  </div>
                </div>
              </div>

              {/*----------------------------------*/}
              <div className={styles.task}>
                <div className={styles.taskTitle}>
                  Which of the following are greenhouse gases, which trap heat
                  in the earth’s atmosphere? (Select four)
                </div>
                <div className={styles.taskPoint}>
                  <span className={styles.star}>*</span>
                  <span>4 points</span>
                </div>

                <div className={styles.taskQuestion}>
                  <div className={styles.options}>
                    <input
                      type="checkbox"
                      name="quest6"
                      value="sulfur"
                      // required
                    />
                    <label htmlFor="quest6">Sulfur hexafluoride</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="checkbox"
                      name="quest6"
                      value="methane"
                    />
                    <label htmlFor="quest6">Methane</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="checkbox"
                      name="quest6"
                      value="nitrogen"
                    />
                    <label htmlFor="quest6">Nitrogen</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="checkbox"
                      name="quest6"
                      value="carbon"
                    />
                    <label htmlFor="quest6">Carbon dioxide</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="checkbox"
                      name="quest6"
                      value="nitrous"
                    />
                    <label htmlFor="quest6">Nitrous oxide</label>
                  </div>
                </div>
              </div>
              {/*----------------------------------*/}

              <div className={styles.task}>
                <div className={styles.taskTitle}>
                  How does the greenhouse effect work?
                </div>

                <div className={styles.taskPoint}>
                  <span className={styles.star}>*</span>
                  <span>3 points</span>
                </div>

                <div className={styles.taskQuestion}>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest7"
                      value="gases-reflect"
                      required
                    />
                    <label htmlFor="quest7">
                      Greenhouse gases reflect the sun's energy, causing it to
                      warm the Earth.
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest7"
                      value="gases-absorb"
                    />
                    <label htmlFor="quest7">
                      Greenhouse gases absorb the sun's energy, slowing or
                      preventing heat from escaping into space.
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest7"
                      value="gases-warm"
                    />
                    <label htmlFor="quest7">
                      Greenhouse gases directly warm oceans and cause dramatic
                      weather.
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest7"
                      value="oceans-absorb"
                    />
                    <label htmlFor="quest7">
                      Oceans absorb greenhouse gases, which cause the Earth's
                      temperature to rise.
                    </label>
                  </div>
                </div>
              </div>

              {/*----------------------------------*/}
              <div className={styles.task}>
                <div className={styles.taskTitle}>
                  Wasting less food is a way to reduce greenhouse gas emissions
                </div>
                <div className={styles.taskPoint}>
                  <span className={styles.star}>*</span>
                  <span>1 point</span>
                </div>

                <div className={styles.taskQuestion}>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest8"
                      value="true"
                      required
                    />
                    <label htmlFor="quest8">True</label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest8"
                      value="false"
                    />
                    <label htmlFor="quest8">False</label>
                  </div>
                </div>
              </div>

              {/*----------------------------------*/}
              <div className={styles.task}>
                <div className={styles.taskTitle}>
                  Which of the following actions could you take to help lessen
                  the impacts of climate change?
                </div>
                <div className={styles.taskPoint}>
                  <span className={styles.star}>*</span>
                  <span>1 point</span>
                </div>

                <div className={styles.taskQuestion}>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest9"
                      value="sealing"
                      required
                    />
                    <label htmlFor="quest9">
                      Sealing and insulating your windows and doors to save
                      energy.
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest9"
                      value="biking"
                    />
                    <label htmlFor="quest9">
                      Biking, walking, carpooling, and using public
                      transportation when possible.
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest9"
                      value="saving"
                    />
                    <label htmlFor="quest9">
                      Saving water by using low-flow fixtures or taking shorter
                      showers.
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest9"
                      value="reducing"
                    />
                    <label htmlFor="quest9">
                      Reducing your food waste by buying only what you need,
                      composting food scraps, and donating unused food to food
                      banks.
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest9"
                      value="getting"
                    />
                    <label htmlFor="quest9">
                      Getting involved with your community, local governments,
                      and neighborhood councils.
                    </label>
                  </div>
                  <div className={styles.options}>
                    <input
                      type="radio"
                      name="quest9"
                      value="all"
                    />
                    <label htmlFor="quest9">All of them.</label>
                  </div>
                </div>
              </div>
              {/*----------------------------------*/}

              <div className={styles.formButtons}>
                <button
                  className={styles.btnSubmit}
                  id="submit-btn"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className={styles.btnReset}
                >
                  Reset
                </button>
              </div>
            </form>
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
