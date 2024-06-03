import { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { wheel, wheelArrow } from "../../../assets/images/exports";

const WheelModal = ({ open, handleModal }) => {
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      inset: '45% 40px 40px 50%',
      transform: "translate(-50%, -62%)",
      width: "100%",
      background: "transparent",
      border: 'none',
      padding: 0
    },
    overlay: {
      background: "rgb(61 64 69 / 80%)",
    },
  };

  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const startTime = useRef(null);

  const spin = () => {
    if (!spinning) {
      setSpinning(true);
      startTime.current = performance.now();
    }
  };

  useEffect(() => {
    let animationFrameId;

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const updateRotation = (currentTime) => {
      if (!startTime.current) startTime.current = currentTime;
      const elapsedTime = (currentTime - startTime.current) / 1000;

      let rotationSpeed = 0;

      if (elapsedTime < 1) {
        rotationSpeed = easeInOutQuad(elapsedTime / 3) * 60;
      } else if (elapsedTime < 4) {
        rotationSpeed = 4; // постоянная высокая скорость
      } else if (elapsedTime < 7) {
        rotationSpeed = easeInOutQuad((7 - elapsedTime) / 3) * 6; // плавное замедление
      } else {
        setSpinning(false);
        return;
      }

      setRotation((prevRotation) => prevRotation + rotationSpeed);
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    if (spinning) {
      animationFrameId = requestAnimationFrame(updateRotation);
    } else {
      cancelAnimationFrame(animationFrameId);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [spinning]);

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => handleModal(false)}
      style={customStyles}
    >
      <div onClick={spin} className="wheel-container">
        <div className="wheel">
          <img
            src={wheel}
            alt="wheel"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
        <img className='wheelArrow' alt="wheelArrow" src={wheelArrow}></img>
      </div>
    </Modal>
  );
};

export default WheelModal;
