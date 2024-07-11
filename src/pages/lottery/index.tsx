import React, {useState} from "react";
import styles from "./Lottery.module.scss";
import {goldCart, silver} from "../../assets/icons/exports";
import {minusIcon, plusIcon} from "../../assets/icons/lottery/exports";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectUserData} from "../../store/features/auth/selectors";
import {buyGoldTicket} from "../../store/features/auth/slice";
import {lottery1} from "../../assets/images/lottery/exports";
import {selectLotteryData} from "../../store/features/lottery/selectors";

const LotteryComponent = () => {
    const [ticketCount, setTicketCount] = useState(1);
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUserData())
    const lotteryData = useAppSelector(selectLotteryData())
    const increaseTicketCount = () => {
        if (user.silverBalance < ticketCount * 1500000) return
        setTicketCount(ticketCount + 1)
    };
    const decreaseTicketCount = () =>
        setTicketCount(ticketCount > 1 ? ticketCount - 1 : 1);
    const handleBuy = () => {
        dispatch(buyGoldTicket(ticketCount))
    }
    return (
        <section className={styles.container}>
            <div className={styles.balanceSection}>
                <p className="title">Your balance</p>
                <div className={styles.balanceItemContainer}>
                    <div className={styles.balanceItem}>
                        <img src={silver} alt="Silver Ticket"/>
                        <p>{user?.silverBalance}</p>
                    </div>
                    <div className={styles.balanceItem}>
                        <img src={goldCart} alt="Gold Ticket"/>
                        <p>{user.goldBalance}</p>
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
                            alt="gifts"
                            src={minusIcon}
                            className={styles.ticketControlsBTN}
                            onClick={decreaseTicketCount}
                        />

                        <p>{ticketCount}</p>
                        <img
                            alt="gifts"
                            src={plusIcon}
                            className={styles.ticketControlsBTN}
                            onClick={increaseTicketCount}
                        />
                    </div>
                    <div>
                        <img src={silver} alt=""/>
                        <p className={styles.cost}>{(ticketCount * 1500000).toLocaleString()}</p>
                    </div>
                </div>
                <button onClick={handleBuy} className={styles.buyButton}>Buy</button>
            </div>
            <div className={styles.lotterySection}>
                <h2>Lottery</h2>
                {lotteryData?.map((item, index) => {
                    return (
                        <LotteryItem
                            key={index}
                            icon={lottery1}
                            description={item.title}
                            participation="You are participating"
                            count={item.ticketCount}
                            max_count={item.maxTicketCount}
                        />
                    )
                })}
            </div>
        </section>
    );
};

interface LotteryItemProps {
    icon: string;
    description: string;
    participation: string;
    max_count: number;
    count: number
}

const LotteryItem: React.FC<LotteryItemProps> = ({
                                                     icon,
                                                     description,
                                                     participation,
                                                     max_count,
                                                     count
                                                 }) => {
    return (
        <div className={styles.lotteryItem}>
            <img src={icon} alt="Lottery Icon" className={styles.lotteryIcon}/>
            <div className={styles.lotteryInfo}>
                <p className={styles.description}>{description}</p>
                <p className={styles.participation}>Tap to participate</p>
            </div>
            <div className={styles.participationCountCont}>
                <img src={goldCart} alt=""/>
                <p className={styles.participationCount}>{count} / {max_count}</p>
            </div>
        </div>
    );
};

export default LotteryComponent;
