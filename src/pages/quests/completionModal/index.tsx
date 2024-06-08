import React from "react";
import styles from "./completion.module.scss";
import { winPopupImage } from "../../../assets/icons/quests/exports";

interface QuestCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuestCompletionModal: React.FC<QuestCompletionModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div onClick={onClose} className={isOpen ? styles.modalOverlay : ""}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${isOpen && styles.active} , ${styles.modalContent}`}
      >
        <img src={winPopupImage} alt="Quest Complete" />
        <p className={styles.message}>You have completed the quest!</p>
        <button className={styles.rewardButton} onClick={onClose}>
          Get a reward
        </button>
      </div>
    </div>
  );
};

export default QuestCompletionModal;
