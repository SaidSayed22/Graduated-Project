import "./App.css";
import Choose from "./Components/Choose";
import FPage from "./Components/FPage";
import Verification from "./Components/Verification";
import Home from "./Components/Home";
import Sign from "./Components/SignRegister";
import Examination from "./Components/Examination";
import SettingsMe from "./Components/SettingsMe";
import SettingsNotification from "./Components/SettingsNotification";
import SettingsSecurity from "./Components/SettingsSecurity";
import SettingsLanguage from "./Components/SettingsLanguage";
import SettingsInformation from "./Components/SettingsInformation";
import RecDoc from "./Components/RecDoc";

import Chat from "./Components/chat_room";
import ChatDoc from "./Components/chat_doc";

import Guest from "./Components/Guest";

import { Routes, Route } from "react-router-dom";
import DoctorDetails from "./Components/DoctorDetails";
import SignRegister from "./Components/SignRegister";
import SignLogin from "./Components/SignLogin";




function App() {
  return (
    <div className="App">
      <div className="col-12">
        <Routes>
          <Route path="/" element={<FPage />} />
          <Route path="choose" element={<Choose />} />
          <Route path="verification" element={<Verification />} />
          <Route path="home" element={<Home />} />
          <Route path="signregister" element={<SignRegister />} />
          <Route path="signlogin" element={<SignLogin />} />
          <Route path="examination" element={<Examination />} />
          <Route path="settings" element={<SettingsMe />} />
          <Route path="notification" element={<SettingsNotification />} />
          <Route path="security" element={<SettingsSecurity />} />
          <Route path="language" element={<SettingsLanguage />} />
          <Route path="info" element={<SettingsInformation />} />
          <Route path="rec" element={<RecDoc />} />
          <Route path="doctor/:doctorId" element={<DoctorDetails />} />

          <Route path="chatRoom" element={<Chat />} />
          <Route path="chatDoc" element={<ChatDoc />} />

          <Route path="guest" element={<Guest />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
