import React, { Component } from 'react';

import HeaderNav from './components/Header/HeaderNav';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <>
        <HeaderNav />
        <Main />
      </>
    );
  }
}

export default App;
