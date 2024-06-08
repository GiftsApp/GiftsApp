import React from "react";
import styles from "./Friends.module.scss";
import {
  firstFriend,
  fourFriend,
  giftIcon,
  messageIcon,
  refreshIcon,
  secondFriend,
  thirdFriend,
} from "../../assets/images/friends/exports";
import { goldCart, silver } from "../../assets/icons/exports";
interface IFriend {
  name: string;
  points: number;
  avatar: string;
}
const InviteFriendsComponent = () => {
  let friends: IFriend[] = [
    { name: "Oleg Panov", points: 12, avatar: firstFriend },
    { name: "Alena Swartz", points: 213, avatar: secondFriend },
    { name: "Elena Shine", points: 11, avatar: thirdFriend },
    { name: "Hanna Montana", points: 5, avatar: fourFriend },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.inviteSection}>
        <h2>Invite your friends!</h2>
        <p>You and your friend will receive bonuses</p>
        <div className={styles.inviteCard}>
          <img src={giftIcon} alt="Invite friends" />
          <div>
            <p>Invite friends</p>
            <p className={styles.bonus}>
              <img src={silver} alt="" />+ 200 000
              <span> for you and your friend</span>
            </p>
          </div>
        </div>
        <button className={styles.inviteButton}>Invite Friends</button>
      </div>
      <div className={styles.friendsSection}>
        <div className={styles.friendsHeader}>
          <h3>Your friends</h3>
          <button className={styles.refreshButton}>
            <img src={refreshIcon} alt="Refresh" />
          </button>
        </div>
        <ul className={styles.friendList}>
          {friends?.length ? (
            friends.map((friend, index) => (
              <li key={index} className={styles.friendItem}>
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className={styles.avatar}
                />
                <div className={styles.friendInfo}>
                  <p>{friend.name}</p>
                  <div className={styles.pointCont}>
                    <img src={goldCart} alt="" />
                    <p className={styles.points}>{friend.points}</p>
                  </div>
                </div>
                <button className={styles.messageButton}>
                  <img src={messageIcon} alt="Message" />
                </button>
              </li>
            ))
          ) : (
            <div className={styles.emptyBlock}>
              You haven't invited anyone yet
            </div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default InviteFriendsComponent;
