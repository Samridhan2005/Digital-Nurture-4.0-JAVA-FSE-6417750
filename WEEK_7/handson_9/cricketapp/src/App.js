import React from 'react'
import ListofPlayers from './Listofplayers';
import IndianPlayers from './Indianplayers';

const App = () => {
  const flag=false;

  let component;
  if(flag==true){
    component=<ListofPlayers/>
  }
  else{
    component=<IndianPlayers/>
  }
  return (
    <div>
      <h1>Cricket app</h1>
      {component}
    </div>
  )
}

export default App