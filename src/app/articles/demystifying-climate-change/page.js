import styles from "../article.module.css";
import Image from "next/image";

import Earth from "../../../../public/images/article/blanket-Earth.png";
import Discuss from "../../../../public/images/article/discuss-Earth.png";
import Bandits from "../../../../public/images/article/bandits.png";
import QuizButtonBlock from "@/components/articles/rigthPanel/quizButtonBlock/QuizButtonBlock";
import ArticleContents from "@/components/articles/rigthPanel/articleContents/ArticleContents";

import QuoteAuthor from "@/components/articles/quoteAuthor/QuoteAuthor";
import ArticleMetaEnd from "@/components/articles/articleMetaEnd/ArticleMetaEnd";

export const metadata = {
  title: "Demystifying Climate Change: Your Essential Guide to the Planet's Hottest Topic",
  description: "The topic that will not leave you indifferent and will help you understand the causes of global climate change",
  openGraph: {
    type: 'article',
    siteName: 'dailyEco',
    url: `${process.env.ARTICLE_LINK_URL}/articles/demystifying-climate-change`,
    title: "Demystifying Climate Change",
    description: "Your Essential Guide to the Planet's Hottest Topic",
    images: [
      {url: `${process.env.ARTICLE_LINK_URL}/images/article/preview.png`,
      width: 600,
      height: 315,
      }
    ],
  },
};


const articlePartList = [
  {
    title: "The Climate Conundrum Unpacked",
    path: "/articles/demystifying-climate-change#The-Climate-Conundrum-Unpacked",
  },
  {
    title: "The Greenhouse Effect Demystified",
    path: "/articles/demystifying-climate-change#The-Greenhouse-Effect-Demystified",
  },
  {
    title: "Ice, Ice, Melting",
    path: "/articles/demystifying-climate-change#Ice-Ice-Melting",
  },
  {
    title: "How Climate Change Affects Your Food",
    path: "/articles/demystifying-climate-change#How-Climate-Change-Affects-Your-Food",
  },
  {
    title: "Weathering the Storm",
    path: "/articles/demystifying-climate-change#Weathering-the-Storm",
  },
  {
    title: "The Good, the Bad, and the Ugly",
    path: "/articles/demystifying-climate-change#Good-Bad-Ugly",
  },
  {
    title: "The Final Frontier",
    path: "/articles/demystifying-climate-change#The-Final-Frontier",
  },
];


export default function FirstArticlePage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainBlock}>
        <div className={styles.articleBlock}>
          <div className={styles.headerBlock}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "800px",
              }}
            >
              <Image
                className={styles.headerImage}
                src={Discuss}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="head article forest pic"
              ></Image>
            </div>

            <div className={styles.articleHeader}>
              <div className={styles.similarTopics}>
                <div className={styles.topic}>Eco Study</div>
                <div className={styles.topic}>Waste Management</div>
              </div>
              <h1 className={styles.articleName}>
                {`Demystifying Climate Change: Your Essential Guide to the
                Planet's Hottest Topic`}
              </h1>
              <div className={styles.articleInfo}>
                <div className={styles.articleInfoDetails}>
                  <div>By Maxim Verde</div>
                  <div>Updated: 09.05.2024</div>
                  <div>Reviewed by Alex Kopi</div>
                </div>
                <div className={styles.articleInfoDetails}>
                  <div className={styles.picInfo}>
                    <Image
                      src="/images/article/vector/time-to-read.svg"
                      width={12}
                      height={12}
                      alt="time-to-read pic"
                    ></Image>
                    13 min
                  </div>
                  <div className={styles.picInfo}>
                    <Image
                      src="/images/article/vector/number-viewers.svg"
                      width={16}
                      height={12}
                      alt="number-viewers pic"
                    ></Image>
                    2345
                  </div>
                  <div className={styles.picInfo}>
                    <Image
                      src="/images/article/vector/raiting-star.svg"
                      width={12}
                      height={12}
                      alt="raiting-star pic"
                    ></Image>
                    4,9
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className={styles.rightBar}>
            <div className={styles.stickyBlock}>
              <ArticleContents articlePartList={articlePartList} />
              <QuizButtonBlock />
            </div>
          </section>

          <section className={styles.mainArticle}>

            <h2 id="The-Climate-Conundrum-Unpacked">
              The Climate Conundrum Unpacked
            </h2>

            <p className={styles.baseParagraph}>
              {`Hey there, climate crusaders and weather watchers! Welcome to the
              epicenter of Earth's hottest conversation—climate change. You've
              probably heard the term tossed around like a beach ball at a
              summer concert, but what's the real deal, and why should it matter
              to you? Grab your favorite drink and settle in, because we're
              about to decode this planetary puzzle.`}
            </p>
            <p className={styles.baseParagraph}>
              {`Imagine Earth as your trusty cozy blanket, keeping you snug and
              warm. Now, picture someone cranking up the heat just a bit too
              high. That's basically what's happening to our planet, but instead
              of a sneaky roommate, it's due to a mix of gases called greenhouse
              gases. These gases, like CO2 (that's carbon dioxide, not the fizzy
              drink!), hang out in the atmosphere, trapping heat from the sun
              and causing our planet to warm up.`}
            </p>
            <p className={styles.baseParagraph}>
              {`But wait, before you start picturing Earth with a sunburn, let's
              address the big question: is this just a natural cycle, or are we,
              as humans, stirring the climate pot? Our love for fossil fuels has
              pumped an excessive amount of CO2 into the atmosphere, throwing
              off the natural balance.`}
            </p>
            <p className={styles.baseParagraph}>
              {`Why care? Because climate change affects where we live and what we
              eat. But don't fret! Understanding the issue is the first step to
              fixing it, and that's where this article comes in.`}
            </p>
            <div className={styles.blueBlock}>
              <p>
                <b>Think you know a lot about climate change already? </b>
              </p>
              <p>
                {`Why not put your knowledge to the test with our quiz? Click the
                red button “Take quiz” and see how much you really know about
                climate change!`}
              </p>
            </div>

            <h2 id="The-Greenhouse-Effect-Demystified">
              The Greenhouse Effect Demystified
            </h2>
            <p className={styles.baseParagraph}>
              {`Let's back to our cozy blanket. Picture Earth as your favorite
              spot on the sofa, snuggled up in a warm, fuzzy blanket. Now,
              imagine that blanket is made of special gases, like CO2, methane,
              and water vapor. These gases are trapping heat from the sun and
              keeping our planet just the right temperature for life to thrive.
              Without this blanket, Earth would be as chilly as a polar bear's
              picnic.`}
            </p>
            <p className={styles.baseParagraph}>
              {`But here's the twist: like any good blanket, too much can make you
              sweat. The same goes for Earth's blanket of greenhouse gases. When
              we burn fossil fuels like coal, oil, and gas, we're adding extra
              layers of blankets. And just like piling on too many blankets,
              this extra layer is making Earth hotter than a summer in the
              Sahara.`}
            </p>
            <p className={styles.baseParagraph}>
              {`Imagine this: Earth is like a giant greenhouse, and we're turning
              up the heat. Scientific data shows that over the past century, the
              Earth's average temperature has risen by about 1.2°C (2.2°F). This
              might not sound like much, but just like a fever, even a small
              increase can have big consequences.Think of it this way: when you
              have a fever, your body gets too hot, and when your body
              temperature is 37.8°C instead of 36.6°C you start feeling
              uncomfortable.`}
            </p>
            <p className={styles.baseParagraph}>
              {`The same thing is happening to our planet. Ice caps are melting,
              sea levels are rising, and extreme weather events are becoming
              more frequent and severe. It's not just about feeling a bit
              warmer—it's about disrupting the delicate balance of life on
              Earth. Unless we take action to reduce our greenhouse gas
              emissions, the Earth could warm by another 1.5°C (2.7°F) or more
              by the end of this century, with catastrophic consequences for our
              planet and future generations.`}
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Image
                src={Earth}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="article pic forest"
              ></Image>
            </div>

            <h2 id="Ice-Ice-Melting">Ice, Ice, Melting</h2>
            <p className={styles.baseParagraph}>
              {`In a plot twist that could rival any sci-fi blockbuster, Earth's
              icy giants—from Greenland's vast ice caps to Antarctica's
              sprawling tundras—are quietly dwindling. This isn't just a distant
              worry; it's a pressing issue that's reshaping our world today.
              Imagine cities like New York, Amsterdam, Miami, and Shanghai
              developing unwanted waterfronts right in their downtown areas.
              However, the repercussions extend beyond these swamped urban
              centers. The seemingly modest rise in sea levels—about 21-24 cm
              since 1880—masks a dramatic impact on our planet. Notably, a third
              of this increase has occurred in just the last 25 years,
              heightening threats to both human and ecological stability.`}
            </p>
            <p className={styles.baseParagraph}>
              {`The rate of glacier disappearance has spiked by 57% since the
              1990s. If this trend continues, Earth could be devoid of glaciers
              within 100-150 years. For instance, the iconic snows of
              Kilimanjaro have diminished by more than 80% since 1912.
              Similarly, glaciers in India's Garhwal Himalayas are retreating so
              quickly that most of the central and eastern glaciers there could
              vanish by 2035. Meanwhile, Arctic sea ice has shrunk by about 10%
              over the last 30 years.`}
            </p>
            <p className={styles.baseParagraph}>
              {`The repercussions of these melting ice masses are severe,
              affecting nearly 2 billion people who rely on them for fresh
              water, setting the stage for potential large-scale migrations that
              could displace up to 200 million people by 2050. This is akin to
              casting entire nations in a migration saga no one volunteered for.
              The main villains? The high consumption and industrial activities
              of developed countries, which contribute disproportionately to
              global warming. This unfolding drama doesn't just affect the
              regions immediately losing their ice; it also strains even the
              most remote and stable countries as migrants seek safer grounds
              and disrupted food supplies lead to higher grocery bills and food
              shortages.`}
            </p>

            <h2 id="How-Climate-Change-Affects-Your-Food">
              How Climate Change Affects Your Food
            </h2>
            <p className={styles.baseParagraph}>
              Ever thought about the journey your food takes from the farm to
              your plate? Well, buckle up, because climate change is adding some
              unexpected twists and turns to that journey. Picture this: your
              favorite fruits and veggies, like tomatoes and strawberries, need
              just the right amount of sun, water, and temperature to grow juicy
              and delicious.
            </p>
            <p className={styles.baseParagraph}>
              {`But with climate change throwing a tantrum, we're seeing more
              extreme weather—like crazy heatwaves and unexpected frosts—messing
              with these delicate crops. This means your summer salads might
              become a luxury item, with prices as high as a concert ticket. And
              it's not just about what's on your plate; climate change is also
              affecting how food gets to you. Think about the trucks and planes
              that transport your favorite snacks—they guzzle fossil fuels,
              releasing even more heat-trapping gases into the atmosphere. It's
              like trying to deliver a pizza in rush-hour traffic—it's slow,
              expensive, and not very eco-friendly.`}
            </p>
            <p className={styles.baseParagraph}>
              {`So, next time you're munching on a snack, remember, your food's
              journey is more than just farm to fork—it's going to be an
              expensive rollercoaster ride through a changing climate if we just
              ignore and do nothing.`}
            </p>

            <div className={styles.quote}>
              <div className={styles.quoteHeader}>
                
                  <div className={styles.quoteSing}>
                    <Image
                      src="/images/article/vector/quote.svg"
                      width={40}
                      height={24}
                      alt="blue quote"
                    ></Image>
                  </div>
                  <div className={styles.quoteLeft}>
                  <QuoteAuthor
                    name={"Sir David Attenborough"}
                    position={
                      "British broadcaster, biologist, natural historian, and writer"
                    }
                    imagePath={"/images/article/David.png"}
                  />
                </div>

                <div className={styles.quoteSing}>
                  <Image
                    src="/images/article/vector/quote.svg"
                    width={40}
                    height={24}
                    alt="blue quote"
                  ></Image>
                </div>
              </div>
              <p style={{ textAlign: "center", fontStyle: "italic" }}>
                Climate change is the greatest threat to every living thing on
                Earth, and the single biggest threat to our food security.
              </p>
            </div>

            <h2 id="Weathering-the-Storm">Weathering the Storm</h2>
            <p className={styles.baseParagraph}>
              {`Hold onto your hats, folks, because climate change is throwing a
              weather tantrum like never before! Imagine our weather patterns as
              a DJ's playlist—usually, it's a smooth mix of sunny days and
              gentle showers. But thanks to climate change, someone's been
              messing with the controls, and now we're getting hit with the
              ultimate shuffle mode. Heatwaves are cranking up the temperature,
              hurricanes are crashing the coastal party more often, and don't
              even get me started on the wild winter weather! It's like the
              weather has gone rogue, and unless we start dancing to a greener
              beat, these extreme weather events are here to stay.`}
            </p>
            <p className={styles.baseParagraph}>
              {`Science backs up this weather mayhem. Data shows that the
              intensity and frequency of extreme weather events, like
              hurricanes, droughts, and heavy rainfall, have increased in recent
              years. For example, the number of intense hurricanes in the
              Atlantic has doubled over the past century, and they're getting
              stronger and more destructive. It's like the weather gods are on a
              power trip, and we're caught in the crossfire.`}
            </p>
            <p className={styles.baseParagraph}>
              {`But it's not just about the big, headline-grabbing events. Climate
              change is also playing tricks on our day-to-day weather. Remember
              that freak heatwave last summer that made you question if hell had
              relocated to your backyard? Yeah, that's the kind of weather
              weirdness we can expect more of if we don't start taking climate
              change seriously.`}
            </p>

            <h2 id="Good-Bad-Ugly">
              Fossil Fuels: The Good, the Bad, and the Ugly
            </h2>
            <p className={styles.baseParagraph}>
              {`Let's talk about the big three: coal, oil, and gas. These bad boys
              have been fueling our world for centuries, powering everything
              from our morning commute to our late-night Netflix binges. But
              here's the kicker: they're also the villains in our climate change
              saga.`}
            </p>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <Image
                  src="/images/article/vector/Ellipse.svg"
                  width={32}
                  height={32}
                  alt="blue circle"
                ></Image>
                <p>
                  <b>Coal</b>, {`for instance, is like the grumpy old grandpa,
                  spewing out smoke and fumes into the atmosphere. It's
                  estimated that burning coal alone contributes to about 44% of
                  CO2 emissions worldwide, making it one of the largest
                  contributors to greenhouse gas emissions. Coal combustion also
                  releases other pollutants like sulfur dioxide, which can
                  contribute to acid rain and other environmental issues.`}
                </p>
              </div>
              <div className={styles.listItem}>
                <Image
                  src="/images/article/vector/Ellipse.svg"
                  width={32}
                  height={32}
                  alt="blue circle"
                ></Image>
                <p>
                  <b>Oil</b>, on the other hand, is like that careless
                  partygoer, promising joy and relax but leaving a mess in its
                  wake. Like coal, burning oil for energy releases CO2 into the
                  atmosphere (33%), contributing to the greenhouse effect. Oil
                  spills and leaks also release methane, a potent greenhouse
                  gas, into the atmosphere, further exacerbating the problem.
                </p>
              </div>
              <div className={styles.listItem}>
                <Image
                  src="/images/article/vector/Ellipse.svg"
                  width={32}
                  height={32}
                  alt="blue circle"
                ></Image>
                <p>
                  <b>And gas</b>? {`It's like the sneaky ninja, quietly slipping
                  into our lives with a gentle whisper and a potent impact.
                  Natural gas, while cleaner than coal and oil, still releases
                  CO2 when burned, contributing to around 22% of global CO2
                  emissions. Additionally, natural gas is primarily composed of
                  methane, which has up to 30 times higher global warming
                  potential than CO2.`}
                </p>
              </div>
            </div>
            <p className={styles.baseParagraph}>
              {`Keep using fossil fuels is like feeding candy to a hyperactive
              toddler—it might keep them entertained for a while, but it's a
              recipe for disaster in the long run. Unless we kick the fossil
              fuel habit and embrace cleaner alternatives, we're just fanning
              the flames of our own demise.`}
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Image
                src={Bandits}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="article pic forest"
              ></Image>
            </div>

            <h2 id="The-Final-Frontier">
              The Final Frontier: Uniting for a Cooler Tomorrow
            </h2>
            <p className={styles.baseParagraph}>
              {`Now at the end of this play it becomes clear that we stand at this
              climatic crossroads, the stakes have never been higher or the
              choices clearer. While the relentless march of climate change
              paints a daunting picture, it's not too late to change the tune.
              Every action counts, from reducing our reliance on fossil fuels to
              supporting sustainable practices in our daily lives. Together, we
              can cool down the fever our planet is experiencing and safeguard
              it for future generations. This isn't just a challenge; it's an
              opportunity—an opportunity to innovate, unite, and usher in an era
              of responsible stewardship of our beautiful Earth. The path
              forward is challenging, but with collective effort and relentless
              optimism, we can forge a sustainable future. Let's embrace this
              challenge with open arms and a fierce heart. The time to act is
              now—let's not wait until it's too late.`}
            </p>

            {/* <ReadNext/> */}
          </section>

          <section className={styles.articleMetaEnd}>
            <ArticleMetaEnd />
          </section>
        </div>

        <div className={styles.floatingBlock}>
          <div className={styles.stickyBlock}>
            <ArticleContents articlePartList={articlePartList} />
            <QuizButtonBlock />
          </div>
        </div>
      </div>

      {/* <div className={styles.footerBlock}>
        <h2>Read Next</h2>
        <div className={styles.swiper}>
        
          <ArticleSwiper/>

        </div>
			</div> */}
    </div>
  );
}
