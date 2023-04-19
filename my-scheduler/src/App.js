import React from 'react';
import { DashB } from './Dashboard/dshb.js';
import Scheduler from './S_comp/Scheduler.js';
import { NewTrip } from './Create_trip/newTrip.js';
import { groupsData } from './groupsData.js';
import { ChatPage } from './Dashboard/General_chat.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/D" element={<DashB username="Himani Panwar" groupsData={groupsData} />} />
        <Route path="/Chat" element={<ChatPage groupData={groupsData[0]} />} />
        <Route path="/Schd" element={<Scheduler />} />
        <Route path="/New" element={<NewTrip />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
