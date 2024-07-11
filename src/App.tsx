import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/main";
import Sidebar from "./components/sideBar";
import Profile from "./pages/profile";
import Boosts from "./pages/boosts";
import Quests from "./pages/quests";
import SubscriptionTaskComponent from "./pages/quests/SubscriptionTaskComponent.tsx";
import LotteryComponent from "./pages/lottery";
import InviteFriendsComponent from "./pages/friends";
import { useAppDispatch } from "./store/hooks";

const App: React.FC = () => {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === "/profile") {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
  }, [location?.pathname]);

  const wind = window as any;
  const tg = wind.Telegram?.WebApp;
  const user = tg.initDataUnsafe?.user;
  const queryId = tg.initDataUnsafe?.query_id;
  useEffect(() => {
    // if (user && queryId) {
    // const data = {
    //   id: String(user?.id),
    //   queryID: queryId,
    //   name: user?.username,
    //   languageCode: user?.language_code,
    // };
    // if (!localStorage.getItem("userId")) {
    //   dispatch(userCreate(data));
    // }
    // dispatch(getUserMini());
    // }
  }, [dispatch, user, queryId]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/boosts" element={<Boosts />} />
        <Route path="/quests">
          <Route index element={<Quests />} />
          <Route path=":id" element={<SubscriptionTaskComponent />} />
        </Route>
        <Route path="/lottery" element={<LotteryComponent />} />
        <Route path="/friends" element={<InviteFriendsComponent />} />
      </Routes>
      {showSideBar && <Sidebar />}
    </>
  );
};

export default App;
