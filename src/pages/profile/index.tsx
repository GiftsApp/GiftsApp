import React from "react";
import { user } from "../../assets/images/exports";
import { goldCart, silver } from "../../assets/icons/exports";
import {
  lottery1,
  lottery2,
  lottery3,
  lottery4,
  lottery5,
} from "../../assets/images/lottery/exports";
import { useNavigate } from "react-router";

interface TicketProps {
  type: "silver" | "gold";
  count: string;
}

interface LotteryProps {
  image: string;
  description: string;
  participationStatus: string;
  count: number;
}

const Ticket: React.FC<TicketProps> = ({ type, count }) => (
  <div className={`ticket ${type}`}>
    <div className="ticket-type">
      <img src={type === "silver" ? silver : goldCart} alt="" />
    </div>
    <div className="ticket-count">{count}</div>
  </div>
);

const Lottery: React.FC<LotteryProps> = ({
  image,
  description,
  participationStatus,
  count,
}) => (
  <div className="lottery">
    <img src={image} alt={description} className="lottery-image" />
    <div className="lottery-info">
      <div className="lottery-description">{description}</div>
      <div className="lottery-status">{participationStatus}</div>
    </div>
    <div className="lottery-count">
      <img src={goldCart} alt="" />
      {count}
    </div>
  </div>
);

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const count = 1324654;
  return (
    <section className="Profile">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="profile-header">
        <div className="profile-image">
          <img src={user} alt="Ruslan Kargapolov" />
        </div>
        <div className="profile-name">Ruslan Kargapolov</div>
      </div>
      <div className="tickets">
        <Ticket
          type="silver"
          count={count.toLocaleString().replace(/,/g, " ")}
        />
        <Ticket type="gold" count={"12"} />
      </div>
      <div className="lottery-section">
        <p className="title">Lottery</p>
        <Lottery
          image={lottery1}
          description="Iphone 15 x 2 and 15 Bitcoins"
          participationStatus="You are participating"
          count={123}
        />
        <Lottery
          image={lottery2}
          description="Best car and 1 000 000"
          participationStatus="You are participating"
          count={1}
        />
        <Lottery
          image={lottery3}
          description="Magic Box"
          participationStatus="You are participating"
          count={133}
        />
        <Lottery
          image={lottery4}
          description="Telegram Premium"
          participationStatus="Tap to participate"
          count={11}
        />
        <Lottery
          image={lottery5}
          description="Simple tickets boost"
          participationStatus="Tap to participate"
          count={12}
        />
      </div>
    </section>
  );
};

export default Profile;
