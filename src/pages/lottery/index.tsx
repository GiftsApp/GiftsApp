import React, { useState } from "react";
import styles from "./Lottery.module.scss";
import { goldCart, silver } from "../../assets/icons/exports";
import { first } from "../../assets/icons/quests/exports";
import { car, minusIcon, plusIcon } from "../../assets/icons/lottery/exports";

const LotteryComponent = () => {
  const [ticketCount, setTicketCount] = useState(1);

  const increaseTicketCount = () => setTicketCount(ticketCount + 1);
  const decreaseTicketCount = () =>
    setTicketCount(ticketCount > 1 ? ticketCount - 1 : 1);

  return (
    <section className={styles.container}>
      <div className={styles.balanceSection}>
        <p className="title">Your balance</p>
        <div className={styles.balanceItemContainer}>
          <div className={styles.balanceItem}>
            <img src={silver} alt="Silver Ticket" />
            <p>100 000</p>
          </div>
          <div className={styles.balanceItem}>
            <img src={goldCart} alt="Gold Ticket" />
            <p>13</p>
          </div>
        </div>
      </div>
      <div className={styles.buyTicketSection}>
        <div className={styles.buyTicketSectionTitle}>
          <p className={styles.title}>Buy ticket</p>
          <p className={styles.costTitle}>Cost</p>
        </div>
        <div className={styles.ticketControls}>
          <div>
            <img
              src={minusIcon}
              className={styles.ticketControlsBTN}
              onClick={decreaseTicketCount}
            />

            <p>{ticketCount}</p>
            <img
              src={plusIcon}
              className={styles.ticketControlsBTN}
              onClick={increaseTicketCount}
            />
          </div>
          <div>
            <img src={silver} alt="" />
            <p className={styles.cost}>1 500 000</p>
          </div>
        </div>
        <button className={styles.buyButton}>Buy</button>
      </div>
      <div className={styles.lotterySection}>
        <h2>Lottery</h2>
        <LotteryItem
          icon={first}
          description="Iphone 15 x 2 and 15 Bitcoins"
          participation="12 / 300"
        />
        <LotteryItem
          icon={car}
          description="Best car and 1 000 000"
          participation="21 / 100"
        />
      </div>
    </section>
  );
};

interface LotteryItemProps {
  icon: string;
  description: string;
  participation: string;
}

const LotteryItem: React.FC<LotteryItemProps> = ({
  icon,
  description,
  participation,
}) => {
  return (
    <div className={styles.lotteryItem}>
      <img src={icon} alt="Lottery Icon" className={styles.lotteryIcon} />
      <div className={styles.lotteryInfo}>
        <p className={styles.description}>{description}</p>
        <p className={styles.participation}>Tap to participate</p>
      </div>
      <div className={styles.participationCountCont}>
        <img src={goldCart} alt="" />
        <p className={styles.participationCount}>{participation}</p>
      </div>
    </div>
  );
};

export default LotteryComponent;
