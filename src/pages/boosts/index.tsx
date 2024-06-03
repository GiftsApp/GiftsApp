import React from "react";
import styles from "./Boosts.module.scss";
import {
  autoClicker,
  beterTap,
  cart,
  energy,
} from "../../assets/icons/boosts/exports";

interface BoostItemProps {
  icon: string;
  name: string;
  price: string;
  level?: string;
}

const BoostItem: React.FC<BoostItemProps> = ({ icon, name, price, level }) => {
  return (
    <div className={styles.boostItem}>
      <img src={icon} alt={name} />
      <div className={styles.boostInfo}>
        <p className={styles.boostName}>{name}</p>
        {level && <p className={styles.boostLevel}>{level}</p>}
      </div>
      <p className={styles.boostPrice}>{price}</p>
    </div>
  );
};

const Boosts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.balance}>
        <p>Your balance</p>
        <div className={styles.balanceInfo}>
          <img src={cart} alt="Silver Ticket" />
          <p className={styles.balanceAmount}>1 324 321</p>
        </div>
      </div>
      <div className={styles.boosts}>
        <p className={styles.boostsTitle}>Boosts</p>
        <BoostItem icon={autoClicker} name="Auto Clicker" price="1 TON" />
        <BoostItem icon={energy} name="Energy" price="10 000" level="1 lvl" />
        <BoostItem
          icon={beterTap}
          name="Better tap"
          price="10 000"
          level="1 lvl"
        />
      </div>
    </section>
  );
};

export default Boosts;
