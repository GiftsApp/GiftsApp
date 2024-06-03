import React from "react";
import styles from "./SubscriptionTaskComponent.module.scss";
import {
  Instagram,
  Telegram,
  Tiktok,
  socialNetworksIcon,
} from "../../../assets/icons/quests/exports";

const SubscriptionTaskComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <img src={socialNetworksIcon} alt="Social Networks" />
        <p className={styles.mainDescription}>
          Subscribe to the Telegram GIFT's App social network
        </p>
        <p className={styles.subDescription}>
          Subscribe to the GIFT's App social network. Subscribe to the GIFT's
          App social network. Join us!
        </p>
        <div className={styles.rewardSection}>
          <p>You will get</p>
          <p className={styles.rewardAmount}>+ 1 000</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <img src={Instagram} alt="Icon" />
          Subscribe
        </button>
        <button className={styles.button}>
          <img src={Telegram} alt="Icon" />
          Subscribe
        </button>
        <button className={styles.button}>
          <img src={Tiktok} alt="Icon" />
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default SubscriptionTaskComponent;
