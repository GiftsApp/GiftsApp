import { useLocation } from "react-router";
import {
  boostsActive,
  boosts,
  friendsActive,
  friends,
  lotteryActive,
  lottery,
  mainActive,
  main,
  questsActive,
  quests,
} from "../../assets/icons/exports";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuArr = [
    { url: "/", icon: main, activeIcon: mainActive, key: "main" },
    { url: "/boosts", icon: boosts, activeIcon: boostsActive, key: "boosts" },
    { url: "/quests", icon: quests, activeIcon: questsActive, key: "quests" },
    {
      url: "/lottery",
      icon: lottery,
      activeIcon: lotteryActive,
      key: "lottery",
    },
    {
      url: "/friends",
      icon: friends,
      activeIcon: friendsActive,
      key: "friends",
    },
  ];
  return (
    <div className="sidebar">
      <div className="items">
        {menuArr.map((menuItem) => {
          let active;
          if (menuItem.url.replace("/", "")) {
            active = location.pathname.includes(menuItem.url.replace("/", ""));
          } else {
            location.pathname === "/" ? (active = true) : (active = false);
          }

          return (
            <Link key={menuItem.key} to={menuItem.url}>
              <img
                src={active ? menuItem.activeIcon : menuItem.icon}
                alt={menuItem.key}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
