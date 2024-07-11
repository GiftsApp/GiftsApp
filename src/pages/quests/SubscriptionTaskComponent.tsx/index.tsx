import React, {useState} from "react";
import styles from "./SubscriptionTaskComponent.module.scss";
import {
    Instagram,
    Telegram,
    Tiktok,
    socialNetworksIcon,
} from "../../../assets/icons/quests/exports";
import {silver} from "../../../assets/icons/exports";
import {FaAngleRight} from "react-icons/fa";
import QuestCompletionModal from "../completionModal";
import {useParams} from "react-router";
import {useAppSelector} from "../../../store/hooks";
import {selectQuestsData} from "../../../store/features/quests/selectors";
import {Link} from "react-router-dom";

const SubscriptionTaskComponent = () => {
    const params = useParams()
    const allData = useAppSelector(selectQuestsData())
    const data = allData.find(i => i.id === params.id)
    console.log(data)
    const iconsArr = [Instagram, Telegram, Tiktok,]

    const [open, setOpen] = useState(false);
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <div className={styles.imageCont}>
                    <img src={socialNetworksIcon} alt="Social Networks"/>
                </div>
                <p className={styles.mainDescription}>
                    {data?.title}
                </p>
                <p className={styles.subDescription}>
                    {data?.title}
                </p>
                <div className={styles.rewardSection}>
                    <p>You will get</p>
                    <div className={styles.rewardAmount}>
                        <img src={silver} alt=""/>
                        <p>+ {data?.count}</p>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                {data?.buttonsID.map((i, index) => {
                    return (
                        <Link to={i.link} key={index} className={styles.button}>
                            <div>
                                <img src={iconsArr[index]} alt="Icon"/>
                                Subscribe
                            </div>
                            <FaAngleRight className={styles.arrow}/>
                        </Link>
                    )
                })}
                {/*<button className={styles.button}>*/}
                {/*    <div>*/}
                {/*        <img src={Telegram} alt="Icon"/>*/}
                {/*        Subscribe*/}
                {/*    </div>*/}
                {/*    <FaAngleRight className={styles.arrow}/>*/}
                {/*</button>*/}
                {/*<button className={styles.button}>*/}
                {/*    <div>*/}
                {/*        <img src={Tiktok} alt="Icon"/>*/}
                {/*        Subscribe*/}
                {/*    </div>*/}
                {/*    <FaAngleRight className={styles.arrow}/>*/}
                {/*</button>*/}
            </div>
            {open &&
                <QuestCompletionModal isOpen={open} onClose={() => setOpen(false)}/>
            }
        </section>
    );
};

export default SubscriptionTaskComponent;
