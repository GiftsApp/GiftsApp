import React, { useState } from "react";
import styles from "./SubscriptionTaskComponent.module.scss";
import {
  Instagram,
  Telegram,
  Tiktok,
  socialNetworksIcon,
} from "../../../assets/icons/quests/exports";
import { silver } from "../../../assets/icons/exports";
import { FaAngleRight } from "react-icons/fa";
import QuestCompletionModal from "../completionModal";

const SubscriptionTaskComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imageCont}>
          <img src={socialNetworksIcon} alt="Social Networks" />
        </div>
        <p className={styles.mainDescription}>
          Subscribe to the Telegram GIFT's App social network
        </p>
        <p className={styles.subDescription}>
          Subscribe to the GIFT's App social network. Subscribe to the GIFT's
          App social network. Join us!
        </p>
        <div className={styles.rewardSection}>
          <p>You will get</p>
          <div className={styles.rewardAmount}>
            <img src={silver} alt="" />
            <p>+ 1 000</p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => setOpen(true)} className={styles.button}>
          <div>
            <img src={Instagram} alt="Icon" />
            Subscribe
          </div>
          <FaAngleRight className={styles.arrow} />
        </button>
        <button className={styles.button}>
          <div>
            <img src={Telegram} alt="Icon" />
            Subscribe
          </div>
          <FaAngleRight className={styles.arrow} />
        </button>
        <button className={styles.button}>
          <div>
            <img src={Tiktok} alt="Icon" />
            Subscribe
          </div>
          <FaAngleRight className={styles.arrow} />
        </button>
      </div>
      <QuestCompletionModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default SubscriptionTaskComponent;
