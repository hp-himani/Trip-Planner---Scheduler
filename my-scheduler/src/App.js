import React from 'react';
import { DashB } from './Dashboard/dshb.js';
import { groupsData } from './groupsData.js';
import { ChatPage } from './Dashboard/General_chat.js';

function App() {
  return (
    <DashB username="Himani Panwar" groupsData={groupsData}/>
//      <ChatPage groupData={groupsData[0]}/>
  );
}

export default App;
