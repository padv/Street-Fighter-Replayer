import React from 'react';
import Videos from './Videos';
import Menu from './Menu';


class App extends React.Component{

  render() {

    return (

      <div className="content" id="content">
        <Menu/>
        <Videos/>
      </div>

    )
  }
}

export default App;