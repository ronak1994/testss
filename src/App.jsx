import React from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Splash from "./components/splash/splash";
import Admin from "./components/admin/admin";
import Userlist from "./components/userlist/Userlist";
import Contacts from "./components/contacts/contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./components/settings/settings";



const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} exact />
        <Route path="/login" exact element={<Join />} />
        <Route path="/contacts" element={<Contacts />} exact />
        <Route path="/settings" element={<Settings />} exact />
        <Route path="/admin" element={<Admin />} exact  />
        <Route path="/userlist" element={<Userlist />}   />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
