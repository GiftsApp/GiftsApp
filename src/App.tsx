import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/main";
import Sidebar from "./components/sideBar";
import Profile from "./pages/profile";
import Boosts from "./pages/boosts";
import Quests from "./pages/quests";
import SubscriptionTaskComponent from "./pages/quests/SubscriptionTaskComponent.tsx";
// import LotteryComponent from "./pages/lottery";
// import InviteFriendsComponent from "./pages/friends";

const App: React.FC = () => {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(true);

  useEffect(() => {
    if (location.pathname === "/profile") {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
  }, [location?.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/boosts" element={<Boosts />} />
        <Route path="/quests">
          <Route index element={<Quests />} />
          <Route path="subscribe" element={<SubscriptionTaskComponent />} />
        </Route>
        {/* <Route path="/lottery" element={<LotteryComponent />} />
        <Route path="/friends" element={<InviteFriendsComponent />} /> */}
      </Routes>
      {showSideBar && <Sidebar />}
    </>
  );
};

export default App;
