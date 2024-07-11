import { useEffect, useRef, useState } from "react";
import {
  userArrow,
  whell,
  goldCart,
  coin,
  flash,
  silver,
} from "../../assets/icons/exports";
import { userImage } from "../../assets/images/exports";
import AnimatedPlus from "./animatedPlus/animatedPlus";
import WhellModal from "../../components/modals/whellModal";
import { useNavigate } from "react-router";
import RewardModal from "../../components/modals/rewardModal";
import { useAppSelector } from "../../store/hooks";
import { selectUserData } from "../../store/features/auth/selectors";

interface PlusItem {
  id: number;
  x: number;
  y: number;
}

const Main = () => {
  const user = useAppSelector(selectUserData());
  const navigate = useNavigate();
  const contRef = useRef<HTMLDivElement | null>(null);
  const [plusItems, setPlusItems] = useState<PlusItem[]>([]);
  const [openWhell, setOpenWhell] = useState<boolean>(false);
  const [isShrinking, setIsShrinking] = useState(false);
  const [openReward, setOpenReward] = useState(false);
  const [balance, setBalance] = useState(user?.silverBalance);
  const [energy, setEnergy] = useState(user?.energy);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => {
        if (prevEnergy < user?.energy) {
          return prevEnergy + 3;
        }
        return prevEnergy;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [user?.energy]);

  const handleAnimation = () => {
    const container = contRef.current;

    if (container) {
      const containerRect = container.getBoundingClientRect();

      const newPlusItems: PlusItem[] = [];

      for (let i = 0; i < user.tapLVL; i++) {
        newPlusItems.push({
          id: Date.now() + i,
          x: Math.random() * containerRect.width + containerRect.x * 0.1,
          y: Math.random() * containerRect.height + containerRect.y,
        });
      }

      setPlusItems(newPlusItems);
    }
  };

  const handleTap = () => {
    if (energy === 0) return;
    setIsShrinking(true);
    setBalance(balance + user.energyLVL);
    setEnergy(energy - user.energyLVL);
    setTimeout(() => setIsShrinking(false), 200);
    handleAnimation();
  };

  return (
    <section className="Main">
      <div className="userSide" onClick={() => navigate("/profile")}>
        <div>
          <img src={userImage} alt="" />
          <p className="username">{user.name}</p>
        </div>
        <img src={userArrow} alt="" />
      </div>
      <div className="secondSide">
        <div
          className={!user.isAllowWheelSpin ? "disabled" : ""}
          onClick={() => {
            if (user.isAllowWheelSpin) {
              setOpenWhell(true);
            }
          }}
        >
          <img src={whell} alt="" />
          <p>Wheel</p>
        </div>
        <div>
          <img src={goldCart} alt="" />
          <p>{user.goldBalance}</p>
        </div>
      </div>
      <div className="bigSide">
        <p className="counter">{balance.toLocaleString().replace(/,/g, " ")}</p>
        <div className="coinContainer" ref={contRef}>
          <img
            className={isShrinking ? "shrinking" : ""}
            onClick={handleTap}
            id="coin"
            src={coin}
            alt=""
          />
          <AnimatedPlus
            plusItems={plusItems}
            handleAnimation={handleAnimation}
          />
        </div>
        <div className="footer">
          <div>
            <img src={flash} alt="" />
            <p>
              {energy}/{user.energy}
            </p>
          </div>
          <div style={{ flexDirection: "column" }}>
            <p className="gray">Per tap</p>
            <div>
              +{user.tapLVL} <img src={silver} alt="" />
            </div>
          </div>
        </div>
      </div>

      <WhellModal open={openWhell} handleModal={() => setOpenWhell(false)} />
      <RewardModal open={openReward} onClose={() => setOpenReward(false)} />
    </section>
  );
};

export default Main;
