import React from "react";
import Modal from "react-modal";
import "./RewardModal.scss";
import { reward } from "../../../assets/images/lottery/exports";

interface RewardModalProps {
  open: boolean;
  onClose: () => void;
}

const RewardModal: React.FC<RewardModalProps> = ({ open, onClose }) => {
  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "400px",
      borderRadius: "20px",
      padding: "20px",
      textAlign: "center" as const,
      backgroundColor: "#fff",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Modal isOpen={open} onRequestClose={onClose} style={customStyles}>
      <div className="reward-modal">
        <img className="reward-image" src={reward} alt="Reward" />
        <h2>Congratulations!</h2>
        <p>The Wheel of Fortune has brought you Iphone</p>
        <button onClick={onClose} className="reward-button">
          Get a reward
        </button>
      </div>
    </Modal>
  );
};

export default RewardModal;
