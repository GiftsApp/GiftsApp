import React from "react";
import styles from "./Boosts.module.scss";
import {
    autoClicker,
    betterTapIcon,
    cart,
    energyIcon,
} from "../../assets/icons/boosts/exports";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectUserData} from "../../store/features/auth/selectors";
import {selectAutoClickerState, selectBoostBetterTap, selectBoostEnergy} from "../../store/features/boosts/selectors";
import {boostBetterTap, boostEnergy} from "../../store/features/boosts/slice";

interface BoostItemProps {
    icon: string;
    name: string;
    price: number | string;
    onclick: () => void;
    disabled?: boolean;
    level?: string;
}

const BoostItem: React.FC<BoostItemProps> = ({onclick, icon, name, price, level, disabled}) => {
    return (
        <div onClick={onclick} className={`${styles.boostItem} ${disabled ? styles.disabled : ''}`}>
            <img src={icon} alt={name}/>
            <div className={styles.boostInfo}>
                <p className={styles.boostName}>{name}</p>
                {level && <p className={styles.boostLevel}>{level}</p>}
            </div>
            <p className={styles.boostPrice}>{price}</p>
        </div>
    );
};

const Boosts = () => {
    const user = useAppSelector(selectUserData());
    const dispatch = useAppDispatch();
    const autoClickState = useAppSelector(selectAutoClickerState());
    const energy = useAppSelector(selectBoostEnergy());
    const betterTap = useAppSelector(selectBoostBetterTap());
    return (
        <section className={styles.container}>
            <div className={styles.balance}>
                <p>Your balance</p>
                <div className={styles.balanceInfo}>
                    <img src={cart} alt="Silver Ticket"/>
                    <p className={styles.balanceAmount}>{user.silverBalance}</p>
                </div>
            </div>
            <div className={styles.boosts}>
                <p className={styles.boostsTitle}>Boosts</p>
                <BoostItem onclick={() => {
                    console.log('Здесь будет логика связано с Metamask')
                }} disabled={autoClickState} icon={autoClicker} name="Auto Clicker" price="1 TON"/>
                <BoostItem onclick={() => {
                    dispatch(boostEnergy())
                }} icon={energyIcon} name="Energy" price={energy.price} level={`${energy.currentLvl} lvl`}/>
                <BoostItem
                    onclick={() => {
                        dispatch(boostBetterTap())
                    }}
                    icon={betterTapIcon}
                    name="Better tap"
                    price={betterTap.price}
                    level={`${betterTap.currentLvl} lvl`}
                />
            </div>
        </section>
    );
};

export default Boosts;
