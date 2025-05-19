import React from "react";
import styles from "./NewArrival.module.css";
import one from "./Frame 684.png";
import two from "./Frame 685.png";
import three from "./Frame 686.png";
import four from "./Frame 687.png";

const NewArrival = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.Block}>
        <p>Featured</p>
      </div>
      <h1>New Arrival</h1>
      <div className={styles.SectionTwo}>
        <div className={styles.FeatureOne}>
          <img src={one} alt="one" />
          <h1>PlayStation 5</h1>

          <p>
            Black and White version of the PS5 <br></br>coming out on sale.
          </p>
        </div>

        <div className={styles.RightColumn}>
          <div className={styles.FeatureTwo}>
            <img src={two} alt="two" />
            <h1>Women’s Collections</h1>
            <p>
              Featured woman collections that<br></br> give you another vibe.
            </p>
          </div>

          <div className={styles.BottomRow}>
            <div className={styles.FeatureThree}>
              <img src={three} alt="three" />
              <h1> Speakers</h1>
              <p>Amazon wireless speakers</p>
            </div>
            <div className={styles.FeatureFour}>
              <img src={four} alt="four" />
              <h1>Perfume</h1>
              <p>GUCCI INTENSE OUD EDP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
