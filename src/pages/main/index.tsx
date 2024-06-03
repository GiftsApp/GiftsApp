import { useEffect, useRef, useState } from "react";
import {
  userArrow,
  whell,
  goldCart,
  coin,
  flash,
  silver,
} from "../../assets/icons/exports";
import { user } from "../../assets/images/exports";
import AnimatedPlus from "./animatedPlus/animatedPlus";
import WhellModal from "../../components/modals/whellModal";
import { useNavigate } from "react-router";
import RewardModal from "../../components/modals/rewardModal";

interface PlusItem {
  id: number;
  x: number;
  y: number;
}

const Main = () => {
  const navigate = useNavigate();
  const contRef = useRef<HTMLDivElement | null>(null);
  const [plusItems, setPlusItems] = useState<PlusItem[]>([]);
  const [openWhell, setOpenWhell] = useState<boolean>(false);
  const [isShrinking, setIsShrinking] = useState(false);
  const [openReward, setOpenReward] = useState(false);
  const [balans, setBalans] = useState(1324321);
  const [energy, setEnergy] = useState(100);

  const MAX_ENERGY = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => {
        if (prevEnergy < MAX_ENERGY) {
          return prevEnergy + 1;
        }
        return prevEnergy;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAnimation = () => {
    const container = contRef.current;

    if (container) {
      const containerRect = container.getBoundingClientRect();

      const newPlusItems: PlusItem[] = [];

      for (let i = 0; i < 5; i++) {
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
    setBalans(balans + 1);
    setEnergy(energy - 1);
    setTimeout(() => setIsShrinking(false), 200);
    handleAnimation();
  };

  return (
    <section className="Main">
      <div className="userSide" onClick={() => navigate("/profile")}>
        <div>
          <img src={user} alt="" />
          <p className="username">Ruslan Kargapolov</p>
        </div>
        <img src={userArrow} alt="" />
      </div>
      <div className="secondSide">
        <div onClick={() => setOpenWhell(true)}>
          <img src={whell} alt="" />
          <p>Wheel</p>
        </div>
        <div>
          <img src={goldCart} alt="" />
          <p>123</p>
        </div>
      </div>
      <div className="bigSide">
        <p className="counter">{balans.toLocaleString().replace(/,/g, " ")}</p>
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
            <p>{energy}/100</p>
          </div>
          <div style={{ flexDirection: "column" }}>
            <p className="gray">Per tap</p>
            <div>
              +1 <img src={silver} alt="" />
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
