import React from "react";
import { plusIcon } from "../../../assets/icons/exports";

interface PlusItem {
  id: number;
  x: number;
  y: number;
}
interface IProps {
  plusItems: PlusItem[];
  handleAnimation: () => void;
}

const AnimatedPlus: React.FC<IProps> = ({ plusItems, handleAnimation }) => {
  return (
    <>
      {plusItems.map((item) => (
        <img
          key={item.id}
          src={plusIcon}
          onClick={handleAnimation}
          alt="tap"
          className="animated-plus"
          style={{ top: `${item.y}px`, left: `${item.x}px` }}
        />
      ))}
    </>
  );
};

export default AnimatedPlus;
