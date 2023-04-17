import React from 'react';
//import { DashB } from './Dashboard/dshb.js';
import Scheduler from './S_comp/Scheduler.js';
import { groupsData } from './groupsData.js';
import { ChatPage } from './Dashboard/General_chat.js';

function App() {
  return (
//    <DashB username="Himani Panwar" groupsData={groupsData}/>
      <ChatPage groupData={groupsData[0]}/>
//       <Scheduler/>
  );
}

export default App;
 