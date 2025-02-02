import React from "react";
import styles from "./Quests.module.scss";
import {
    first,
    cart,
    second,
    third,
    four,
    smallCart,
} from "../../assets/icons/quests/exports";
import {useNavigate} from "react-router";
import {Outlet} from "react-router-dom";
import {useAppSelector} from "../../store/hooks";
import {selectQuestsData} from "../../store/features/quests/selectors";

const Quests = () => {
    const imagesArr = [first, second, third, four,]
    const navigate = useNavigate();
    const data = useAppSelector(selectQuestsData())
    return (
        <>
            <section className={styles.container}>
                <div className={styles.balanceSection}>
                    <img src={cart} alt="Silver Ticket" className={styles.ticket}/>
                    <p className={styles.earnMore}>Earn more tickets!</p>
                </div>
                <div className={styles.tasksSection}>
                    <p className={styles.taskTitle}>Tasks</p>
                    <div className={styles.tasks}>
                        {data.map((item, index) => {
                            return (
                                <QuestItem
                                    key={index}
                                    onclick={() => navigate(item.id)}
                                    icon={imagesArr[index]}
                                    description={item.title}
                                    reward={`+ ${item.count}`}
                                />
                            )
                        })}

                        {/*<QuestItem*/}
                        {/*  onclick={() => navigate("/quests/subscribe")}*/}
                        {/*  icon={second}*/}
                        {/*  description="Subscribe to the GIFT's App social network"*/}
                        {/*  reward="+ 1 000"*/}
                        {/*/>*/}
                        {/*<QuestItem*/}
                        {/*  icon={third}*/}
                        {/*  description="Join our Telegram channel"*/}
                        {/*  reward="+ 500"*/}
                        {/*/>*/}
                        {/*<QuestItem*/}
                        {/*  icon={four}*/}
                        {/*  description="Complete a level in our game"*/}
                        {/*  reward="+ 2 000"*/}
                        {/*/>*/}
                    </div>
                </div>
            </section>
            <Outlet/>
        </>
    );
};

interface TaskItemProps {
    icon: string;
    description: string;
    reward: string;
    onclick?: () => void;
}

const QuestItem: React.FC<TaskItemProps> = ({
                                                icon,
                                                description,
                                                reward,
                                                onclick,
                                            }) => {
    return (
        <div onClick={onclick} className={styles.taskItem}>
            <div className={styles.taskIconCont}>
                <img src={icon} alt="Task Icon" className={styles.taskIcon}/>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.footer}>
                <img src={smallCart} alt="Task Icon" className={styles.taskIcon}/>
                <p className={styles.reward}>{reward}</p>
            </div>
        </div>
    );
};

export default Quests;
